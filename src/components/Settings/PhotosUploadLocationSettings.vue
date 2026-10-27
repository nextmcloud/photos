<!--
 - SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 - SPDX-License-Identifier: AGPL-3.0-or-later
-->

<template>
	<div class="photos-locations">
		<div class="photos-locations__description">
			{{ t('photos', 'Choose the folder where photos and albums are uploaded to.') }}
		</div>

		<NcFormBox>
			<NcFormBoxButton
				:invertedAccent="true"
				@click="debounceSelectPhotosFolder">
				<template #icon>
					<FolderOpenOutline :size="20" />
				</template>
				{{ photosLocationName }}
			</NcFormBoxButton>
		</NcFormBox>
	</div>
</template>

<script setup lang="ts">
import { getFilePickerBuilder } from '@nextcloud/dialogs'
import { t } from '@nextcloud/l10n'
import debounce from 'debounce'
import { computed } from 'vue'
import NcFormBox from '@nextcloud/vue/components/NcFormBox'
import NcFormBoxButton from '@nextcloud/vue/components/NcFormBoxButton'
import FolderOpenOutline from 'vue-material-design-icons/FolderOpenOutline.vue'
import { logger } from '../../services/logger.ts'
import { useUserConfigStore } from '../../store/userConfig.ts'

const emit = defineEmits<{
	'folders-update': [photosLocationInsideSources: boolean]
}>()

const userConfigStore = useUserConfigStore()

const photosLocation = computed<string>(() => userConfigStore.photosLocation)

const photosSourceFolders = computed<string[]>(() => userConfigStore.photosSourceFolders)

const photosLocationName = computed<string>(() => {
	switch (photosLocation.value) {
		case '/':
			return t('photos', 'Home')
		default:
			return photosLocation.value
	}
})

const debounceSelectPhotosFolder = debounce(selectPhotosFolder)

async function selectPhotosFolder(): Promise<void> {
	const pickedFolder = await openFilePicker(
		t('photos', 'Select the default upload location for your media'),
	)

	if (!pickedFolder) {
		return
	}

	await updatePhotosFolder(pickedFolder)
}

async function openFilePicker(title: string): Promise<string> {
	const picker = getFilePickerBuilder(title)
		.setMultiSelect(false)
		.addMimeTypeFilter('httpd/unix-directory')
		.allowDirectories()
		.startAt(photosLocation.value)
		.addButton({
			label: t('photos', 'Pick folder'),
			variant: 'primary',
			callback: (nodes) => logger.debug('Picked', { nodes }),
		})
		.build()

	return picker.pick()
}

async function updatePhotosFolder(path: string): Promise<void> {
	await userConfigStore.updateUserConfig('photosLocation', path)

	emit(
		'folders-update',
		isPathInsideSources(path, photosSourceFolders.value),
	)
}

function normalizePath(path: string): string {
	return path.replace(/\/+$/, '')
}

function isPathInsideSource(path: string, source: string): boolean {
	const normalizedPath = normalizePath(path)
	const normalizedSource = normalizePath(source)

	return normalizedPath === normalizedSource
		|| normalizedPath.startsWith(normalizedSource + '/')
}

function isPathInsideSources(path: string, sources: string[]): boolean {
	if (!path || sources.length === 0) {
		return false
	}

	return sources.some((source) => isPathInsideSource(path, source))
}
</script>

<style lang="scss" scoped>
.photos-locations {
	&__title {
		padding-inline-start: 12px;
		font-weight: bold;
	}

	&__description {
		padding-inline-start: 12px;
		color: var(--color-text-lighter);
		margin: 0 0 16px;
	}

	.folder {
		margin-bottom: 16px;
	}
}
</style>