<!--
  - SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->

<template>
	<div class="photo-actions" :class="{ 'photo-actions--open': menuOpen }" @click.stop>
		<NcActions
			:aria-label="t('photos', 'Actions for {name}', { name: photo.basename })"
			forceMenu
			:open="menuOpen"
			@update:open="onMenuOpenChanged">
			<template #icon>
				<DotsVertical :size="20" />
			</template>

			<NcActionButton closeAfterClick @click="metadataShown = true">
				<template #icon>
					<Database :size="20" />
				</template>
				{{ t('photos', 'View metadata') }}
			</NcActionButton>

			<NcActionButton v-if="canEdit" closeAfterClick @click="metadataEditShown = true">
				<template #icon>
					<PencilOutline :size="20" />
				</template>
				{{ t('photos', 'Edit metadata') }}
			</NcActionButton>

			<NcActionButton closeAfterClick @click="exifdataShown = true">
				<template #icon>
					<InformationOutline :size="20" />
				</template>
				{{ t('photos', 'View file info') }}
			</NcActionButton>

			<NcActionButton v-if="isLoggedIn" closeAfterClick @click="toggleFavorite">
				<template #icon>
					<Star v-if="photo.favorite" :size="20" />
					<StarOutline v-else :size="20" />
				</template>
				{{ photo.favorite
					? t('photos', 'Remove from favorites')
					: t('photos', 'Add to favorites') }}
			</NcActionButton>

			<NcActionButton v-if="canTag" closeAfterClick @click="tagsShown = true">
				<template #icon>
					<TagMultipleOutline :size="20" />
				</template>
				{{ t('photos', 'Manage tags') }}
			</NcActionButton>

			<NcActionButton v-if="isLoggedIn" closeAfterClick @click="albumPickerShown = true">
				<template #icon>
					<ImageMultipleOutline :size="20" />
				</template>
				{{ t('photos', 'Add to album') }}
			</NcActionButton>

			<NcActionButton v-if="canShare" closeAfterClick @click="share">
				<template #icon>
					<ShareVariantOutline :size="20" />
				</template>
				{{ t('photos', 'Share') }}
			</NcActionButton>

			<NcActionSeparator v-if="canDelete" />

			<NcActionButton v-if="canDelete" closeAfterClick @click="deleteConfirmationShown = true">
				<template #icon>
					<TrashCanOutline :size="20" />
				</template>
				{{ t('photos', 'Delete') }}
			</NcActionButton>
		</NcActions>

		<PhotoMetadataDialog
			v-if="metadataShown"
			:photo="photo"
			@close="metadataShown = false" />

		<PhotoMetadataEditDialog
			v-if="metadataEditShown"
			:photo="photo"
			@close="metadataEditShown = false" />

		<PhotoExifdataDialog
			v-if="exifdataShown"
			:photo="photo"
			@close="exifdataShown = false" />

		<PhotoTagsDialog
			v-if="tagsShown"
			:photo="photo"
			@close="tagsShown = false" />

		<NcModal
			v-if="albumPickerShown"
			:labelId="`album-picker-${photo.fileid}`"
			@close="albumPickerShown = false">
			<AlbumPicker @albumPicked="addToAlbum" />
		</NcModal>

		<NcDialog
			v-if="deleteConfirmationShown"
			:name="t('photos', 'Delete photo')"
			@update:open="deleteConfirmationShown = false">
			<p>{{ t('photos', 'Are you sure you want to move "{name}" to the trash?', { name: photo.basename }) }}</p>

			<template #actions>
				<NcButton variant="tertiary" @click="deleteConfirmationShown = false">
					{{ t('photos', 'Cancel') }}
				</NcButton>
				<NcButton variant="error" @click="confirmDelete">
					{{ t('photos', 'Move to trash') }}
				</NcButton>
			</template>
		</NcDialog>
	</div>
</template>

<script lang="ts" setup>
import type { Album } from '../store/albums.ts'
import type { PhotoTarget } from '../utils/fileUtils.ts'

import { getCurrentUser } from '@nextcloud/auth'
import { showError } from '@nextcloud/dialogs'
import { Permission } from '@nextcloud/files'
import { translate as t } from '@nextcloud/l10n'
import { generateUrl } from '@nextcloud/router'
import { computed, ref, watch } from 'vue'
import NcActionButton from '@nextcloud/vue/components/NcActionButton'
import NcActions from '@nextcloud/vue/components/NcActions'
import NcActionSeparator from '@nextcloud/vue/components/NcActionSeparator'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcDialog from '@nextcloud/vue/components/NcDialog'
import NcModal from '@nextcloud/vue/components/NcModal'
import Database from 'vue-material-design-icons/Database.vue'
import DotsVertical from 'vue-material-design-icons/DotsVertical.vue'
import ImageMultipleOutline from 'vue-material-design-icons/ImageMultipleOutline.vue'
import InformationOutline from 'vue-material-design-icons/InformationOutline.vue'
import PencilOutline from 'vue-material-design-icons/PencilOutline.vue'
import ShareVariantOutline from 'vue-material-design-icons/ShareVariantOutline.vue'
import Star from 'vue-material-design-icons/Star.vue'
import StarOutline from 'vue-material-design-icons/StarOutline.vue'
import TagMultipleOutline from 'vue-material-design-icons/TagMultipleOutline.vue'
import TrashCanOutline from 'vue-material-design-icons/TrashCanOutline.vue'
import AlbumPicker from './Albums/AlbumPicker.vue'
import PhotoMetadataDialog from './PhotoMetadataDialog.vue'
import PhotoExifdataDialog from './PhotoExifdataDialog.vue'
import PhotoMetadataEditDialog from './PhotoMetadataEditDialog.vue'
import PhotoTagsDialog from './PhotoTagsDialog.vue'
import { areTagsInstalled } from '../services/AreTagsInstalled.ts'
import { fetchFile } from '../services/fileFetcher.ts'
import { logger } from '../services/logger.ts'
import { useCollectionsStore } from '../store/collections.ts'
import { useFilesStore } from '../store/files.ts'

const props = defineProps<{
	photo: PhotoTarget
}>()

const emit = defineEmits<{
	(event: 'deleted', photo: PhotoTarget): void
}>()

const filesStore = useFilesStore()
const collectionsStore = useCollectionsStore()

const menuOpen = ref(false)
const metadataShown = ref(false)
const metadataEditShown = ref(false)
const exifdataShown = ref(false)
const tagsShown = ref(false)
const albumPickerShown = ref(false)
const deleteConfirmationShown = ref(false)
const resolvedCanShare = ref<boolean | null>(null)
const resolvingSharePermission = ref(false)

const isLoggedIn = getCurrentUser() !== null

const canEdit = computed(() => isLoggedIn && (props.photo.permissions & Permission.WRITE) !== 0)
const canShare = computed(() => {
	if (!isLoggedIn) {
		return false
	}

	if ((props.photo.permissions & Permission.SHARE) !== 0) {
		return true
	}

	return resolvedCanShare.value === true
})
const canDelete = computed(() => isLoggedIn && (props.photo.permissions & Permission.DELETE) !== 0)
const canTag = computed(() => areTagsInstalled && canEdit.value)

watch(() => props.photo.fileid, () => {
	resolvedCanShare.value = null
	resolvingSharePermission.value = false
})

function onMenuOpenChanged(open: boolean): void {
	menuOpen.value = open

	if (open) {
		resolveSharePermission()
	}
}

async function resolveSharePermission(): Promise<void> {
	if (
		!isLoggedIn
		|| (props.photo.permissions & Permission.SHARE) !== 0
		|| resolvedCanShare.value !== null
		|| resolvingSharePermission.value
		|| !props.photo.davPath
	) {
		return
	}

	const fileid = props.photo.fileid
	const davPath = props.photo.davPath

	resolvingSharePermission.value = true

	try {
		const node = await fetchFile(davPath)

		if (props.photo.fileid !== fileid || props.photo.davPath !== davPath) {
			return
		}

		resolvedCanShare.value = !!node && (node.permissions & Permission.SHARE) !== 0
	} catch (error) {
		if (props.photo.fileid === fileid) {
			resolvedCanShare.value = false
		}

		logger.debug('Could not resolve share permission for photo', {
			error,
			fileid,
			davPath,
		})
	} finally {
		if (props.photo.fileid === fileid) {
			resolvingSharePermission.value = false
		}
	}
}

function share(): void {
	sessionStorage.setItem('nmcsharing:pending-share', JSON.stringify({
		fileid: props.photo.fileid,
		davPath: props.photo.davPath,
	}))

	const url = generateUrl('/f/{fileid}', {
		fileid: props.photo.fileid,
	})

	window.location.href = `${url}?openfile=false&opendetails=true`
}

async function toggleFavorite(): Promise<void> {
	const favorite = !props.photo.favorite

	try {
		await filesStore.setPhotoFavorite(props.photo, favorite)
	} catch (error) {
		logger.error('Error setting the favorite state of a photo', {
			error,
			filename: props.photo.basename,
		})

		showError(favorite
			? t('photos', 'Failed to add {fileName} to the favorites', { fileName: props.photo.basename })
			: t('photos', 'Failed to remove {fileName} from the favorites', { fileName: props.photo.basename }))
	}
}

async function addToAlbum(album: Album): Promise<void> {
	albumPickerShown.value = false
	await collectionsStore.addFilesToCollection(album.root + album.path, [props.photo.fileid.toString()])
}

async function confirmDelete(): Promise<void> {
	deleteConfirmationShown.value = false

	try {
		await filesStore.deletePhoto(props.photo)
		emit('deleted', props.photo)
	} catch (error) {
		logger.error('Error deleting a photo', {
			error,
			filename: props.photo.basename,
		})
		showError(t('photos', 'Failed to delete {fileName}', { fileName: props.photo.basename }))
	}
}
</script>

<style lang="scss" scoped>
.photo-actions {
	position: absolute;
	z-index: 5;
	inset-block-start: calc(var(--default-grid-baseline) * 2);
	inset-inline-start: calc(var(--default-grid-baseline) * 2);
	opacity: 0;
	transition: opacity var(--animation-quick) ease-out;

	&--open {
		opacity: 1;
	}

	:deep(.button-vue) {
		background-color: rgba(0, 0, 0, 0.4);
		color: #fff;

		&:hover,
		&:focus-visible {
			background-color: rgba(0, 0, 0, 0.6);
		}
	}
}

@media (prefers-reduced-motion: reduce) {
	.photo-actions {
		transition: none;
	}
}
</style>
