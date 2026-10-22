<!--
  - SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<form class="album-form" @submit.prevent="submit">
		<div class="form-cover">
			<img
				class="form-cover__image"
				:src="albumCreateImage"
				:alt="t('photos', 'Create album')">
		</div>

		<div class="form-inputs">
			<NcTextField
				ref="nameInput"
				v-model.trim="albumName"
				type="text"
				name="name"
				:helperText="albumNameValidationError"
				:error="albumNameValidationError !== undefined"
				:required="true"
				:label="t('photos', 'Name of the album')" />

			<NcTextField
				v-model="albumLocation"
				name="location"
				type="text"
				:label="t('photos', 'Location of the album')">
				<template #icon>
					<MapMarkerOutline :size="20" />
				</template>
			</NcTextField>
		</div>

		<div class="form-buttons">
			<span class="left-buttons">
				<NcButton
					v-if="displayBackButton"
					variant="tertiary"
					@click="back">
					{{ t('photos', 'Back') }}
				</NcButton>

				<NcButton
					variant="secondary"
					@click="cancel">
					{{ t('photos', 'Cancel') }}
				</NcButton>
			</span>

			<span class="right-buttons">
				<NcButton
					variant="primary"
					:disabled="!canSubmit"
					@click="submit">
					<template v-if="loading" #icon>
						<NcLoadingIcon :size="20" />
					</template>
					{{ editMode ? t('photos', 'Save') : t('photos', 'Create album') }}
				</NcButton>
			</span>
		</div>
	</form>
</template>

<script setup lang="ts">
import type { Collection } from '../../services/collectionFetcher.ts'
import type { Album, AlbumEditableProperties } from '../../store/albums.ts'

import { InvalidFilenameError, InvalidFilenameErrorReason, validateFilename } from '@nextcloud/files'
import { resultToNode } from '@nextcloud/files/dav'
import { t } from '@nextcloud/l10n'
import { generateRemoteUrl } from '@nextcloud/router'
import { computed, nextTick, onMounted, ref, toRaw, useTemplateRef } from 'vue'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcLoadingIcon from '@nextcloud/vue/components/NcLoadingIcon'
import NcTextField from '@nextcloud/vue/components/NcTextField'
import MapMarkerOutline from 'vue-material-design-icons/MapMarkerOutline.vue'
import SendOutline from 'vue-material-design-icons/SendOutline.vue'
import { albumsPrefix, useAlbumsStore } from '../../store/albums.ts'
import { useCollectionsStore } from '../../store/collections.ts'
import { formatMonthAndYear } from '../../utils/dateUtils.ts'

const props = withDefaults(defineProps<{
	album?: Album | null
	displayBackButton?: boolean
}>(), {
	album: null,
	displayBackButton: false,
})

const emit = defineEmits<{
	back: []
	closing: []
	done: [event: { album: Collection, changes?: string[] }]
}>()

const albumsStore = useAlbumsStore()
const collectionsStore = useCollectionsStore()

const nameInput = useTemplateRef<InstanceType<typeof NcTextField>>('nameInput')

const albumName = ref('')
const albumLocation = ref('')
const loading = ref(false)

const editMode = computed(() => props.album !== null)
const albumFileName = computed(() => albumsStore.getAlbumName(albumName.value))
const albumCreateImage = '/customapps/photos/img/album.svg'

const albumNameValidationError = computed<string | undefined>(() => {
	const existingAlbum = albumsStore.albums[albumFileName.value]

	if (existingAlbum !== undefined && props.album !== existingAlbum && !loading.value) {
		return t('files', 'This name is already in use.')
	}

	try {
		validateFilename(albumName.value)
	} catch (error) {
		if (!(error instanceof InvalidFilenameError)) {
			throw error
		}

		switch (error.reason) {
			case InvalidFilenameErrorReason.Character:
				return t('files', '"{char}" is not allowed inside a filename.', { char: error.segment })
			case InvalidFilenameErrorReason.ReservedName:
			case InvalidFilenameErrorReason.Extension:
				return undefined
			default:
				return t('files', 'Invalid filename.')
		}
	}

	return undefined
})

const canSubmit = computed(() =>
	albumName.value !== ''
	&& albumNameValidationError.value === undefined
	&& !loading.value,
)

function submit() {
	if (!canSubmit.value) {
		return
	}

	if (editMode.value) {
		void handleUpdateAlbum()
		return
	}

	void handleCreateAlbum()
}

async function handleCreateAlbum() {
	try {
		loading.value = true

		const localAlbum = resultToNode({
			basename: albumName.value,
			filename: `${albumsPrefix}/${albumName.value}`,
			lastmod: '',
			size: 0,
			type: 'directory',
			etag: null,
			props: {
				displayname: albumName.value,
				resourcetype: {},
				nbItems: 0,
				location: albumLocation.value,
				'last-photo': -1,
				date: formatMonthAndYear(new Date()),
				collaborators: [],
				source: generateRemoteUrl(`dav/${albumFileName.value}`),
			},
		}, albumsPrefix) as Collection

		let album = await collectionsStore.createCollection(localAlbum)

		if (album === undefined) {
			return
		}

		if (albumLocation.value !== '') {
			album = await collectionsStore.updateCollection(
				albumFileName.value,
				{ location: albumLocation.value },
			)
		}

		emit('done', { album })
	} finally {
		loading.value = false
	}
}

async function handleUpdateAlbum() {
	if (props.album === null) {
		return
	}

	try {
		loading.value = true

		const originalAlbum = props.album
		let album = toRaw(originalAlbum).clone() as Album
		const changes: string[] = []

		if (originalAlbum.basename !== albumName.value) {
			const renamedAlbum = await collectionsStore.renameCollection(
				originalAlbum.root + originalAlbum.path,
				albumName.value,
			) as Album

			if (renamedAlbum === originalAlbum) {
				return
			}

			album = renamedAlbum
			changes.push('name')
		}

		if (originalAlbum.attributes.location !== albumLocation.value) {
			album = await collectionsStore.updateCollection(
				album.root + album.path,
				{ location: albumLocation.value },
			) as Album

			changes.push('location')
		}

		emit('done', { album, changes })
	} finally {
		loading.value = false
	}
}

function back() {
	emit('back')
}

function cancel() {
	emit('closing')
}

onMounted(() => {
	if (props.album !== null) {
		albumName.value = props.album.basename
		albumLocation.value = props.album.attributes.location ?? ''
	}

	nextTick(() => {
		nameInput.value?.$el?.getElementsByTagName('input')[0]?.focus()
	})
})
</script>

<style lang="scss" scoped>
.album-form {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 350px;
	padding: calc(var(--default-grid-baseline) * 4);

	.form-cover {
		margin-block-end: calc(var(--default-grid-baseline) * 6);
	}

	.form-inputs {
		display: flex;
		flex-direction: column;
		gap: calc(var(--default-grid-baseline) * 4);
	}

	.form-buttons {
		display: flex;
		justify-content: space-between;
		flex-direction: column;

		.left-buttons,
		.right-buttons {
			display: flex;
			gap: calc(var(--default-grid-baseline) * 4);
		}

		.right-buttons {
			justify-content: flex-end;
		}
	}
}

.left-buttons {
	flex-grow: 1;
}

@media only screen and (max-width: 1020px) {
	.right-buttons {
		justify-content: flex-end;
		flex-direction: column;
	}
}
</style>
