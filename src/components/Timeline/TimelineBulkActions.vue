<!--
  - SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->

<template>
	<span class="photos-navigation__bulk-operations__selected">
		<span class="icon-minus" @click="emit('reset-selection')" />
		<span class="selected__count">
			{{ selectedFileIds.length }} {{ t('photos', 'selected') }}
		</span>
	</span>

	<NcActions :force-name="true" :inline="inlineActions">
		<NcActionButton
			:close-after-click="true"
			:aria-label="t('photos', 'Add to album')"
			data-cy-header-action="add-to-album"
			@click="emit('add-to-album')">
			<template #icon>
				<ImageMultipleOutline />
			</template>
			{{ t('photos', 'Add to album') }}
		</NcActionButton>

		<NcActionButton
			:close-after-click="true"
			:aria-label="favoriteActionLabel"
			data-cy-header-action="toggle-favorite"
			@click="toggleFavoriteSelection">
			<template #icon>
				<Star v-if="shouldUnfavoriteSelection" :size="20" />
				<StarOutline v-else :size="20" />
			</template>
			{{ favoriteActionLabel }}
		</NcActionButton>

		<NcActionButton
			:close-after-click="true"
			:aria-label="t('photos', 'Download selected files')"
			data-cy-header-action="download-selection"
			@click="emit('download-selection')">
			<template #icon>
				<DownloadOutline />
			</template>
			{{ t('photos', 'Download') }}
		</NcActionButton>

		<NcActionButton
			:close-after-click="true"
			:aria-label="t('photos', 'Delete selection')"
			data-cy-header-action="delete-selection"
			@click="emit('delete-selection')">
			<template #icon>
				<DeleteOutline />
			</template>
			{{ t('photos', 'Delete') }}
		</NcActionButton>

		<NcActionButton
			:close-after-click="true"
			:aria-label="t('photos', 'Unselect all')"
			data-cy-header-action="unselect-all"
			@click="emit('reset-selection')">
			<template #icon>
				<Close />
			</template>
			{{ t('photos', 'Unselect all') }}
		</NcActionButton>
	</NcActions>
</template>

<script setup lang="ts">
import type { PhotoFile } from '../../store/files.ts'

import { showError } from '@nextcloud/dialogs'
import { t } from '@nextcloud/l10n'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import NcActionButton from '@nextcloud/vue/components/NcActionButton'
import NcActions from '@nextcloud/vue/components/NcActions'
import Close from 'vue-material-design-icons/Close.vue'
import ImageMultipleOutline from 'vue-material-design-icons/ImageMultipleOutline.vue'
import Star from 'vue-material-design-icons/Star.vue'
import StarOutline from 'vue-material-design-icons/StarOutline.vue'
import DeleteOutline from 'vue-material-design-icons/TrashCanOutline.vue'
import DownloadOutline from 'vue-material-design-icons/TrayArrowDown.vue'
import { logger } from '../../services/logger.ts'
import { useFilesStore } from '../../store/files.ts'
import { toPhotoTarget } from '../../utils/fileUtils.ts'

const props = defineProps<{
	selectedFileIds: string[]
}>()

const emit = defineEmits<{
	'add-to-album': []
	'download-selection': []
	'delete-selection': []
	'reset-selection': []
}>()

const filesStore = useFilesStore()
const windowWidth = ref(0)

const inlineActions = computed(() => {
	if (windowWidth.value < 512) {
		return 0
	}
	if (windowWidth.value < 768) {
		return 1
	}
	if (windowWidth.value < 1024) {
		return 2
	}
	return 3
})

const shouldUnfavoriteSelection = computed(() =>
	props.selectedFileIds.length > 0
	&& props.selectedFileIds.every((fileId) =>
		Boolean(filesStore.files[fileId]?.attributes.favorite),
	),
)

const favoriteActionLabel = computed(() =>
	shouldUnfavoriteSelection.value
		? t('photos', 'Remove selection from favorites')
		: t('photos', 'Add selection to favorites'),
)

async function toggleFavoriteSelection(): Promise<void> {
	const favorite = !shouldUnfavoriteSelection.value

	const photos = props.selectedFileIds
		.map((fileId) => filesStore.files[fileId])
		.filter((file): file is PhotoFile => file !== undefined)
		.map((file) => toPhotoTarget(file))

	if (photos.length === 0) {
		return
	}

	try {
		await Promise.all(
			photos.map((photo) => filesStore.setPhotoFavorite(photo, favorite)),
		)
	} catch (error) {
		logger.error('Error setting favorite state for selection', { error })

		showError(favorite
			? t('photos', 'Failed to add selection to favorites')
			: t('photos', 'Failed to remove selection from favorites'))
	}
}

function handleResize(): void {
	windowWidth.value = window.innerWidth
}

onMounted(() => {
	handleResize()
	window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
	window.removeEventListener('resize', handleResize)
})
</script>
