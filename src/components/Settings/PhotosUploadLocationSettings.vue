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
				:inverted-accent="true"
				@click="debounceSelectPhotosFolder">
				<template #icon>
					<FolderOpenOutline :size="20" />
				</template>
				{{ photosLocationName }}
			</NcFormBoxButton>
		</NcFormBox>
	</div>
</template>

<script lang="ts">
import { getFilePickerBuilder } from '@nextcloud/dialogs'
import { t } from '@nextcloud/l10n'
import debounce from 'debounce'
import { defineComponent } from 'vue'
import NcFormBox from '@nextcloud/vue/components/NcFormBox'
import NcFormBoxButton from '@nextcloud/vue/components/NcFormBoxButton'
import FolderOpenOutline from 'vue-material-design-icons/FolderOpenOutline.vue'
import logger from '../../services/logger.js'

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

export default defineComponent({
	name: 'PhotosUploadLocationSettings',

	components: {
		NcFormBox,
		NcFormBoxButton,
		FolderOpenOutline,
	},

	emits: ['folders-update'],

	computed: {
		photosLocation(): string {
			return this.$store.state.userConfig?.photosLocation ?? ''
		},

		photosSourceFolders(): string[] {
			return this.$store.state.userConfig?.photosSourceFolders ?? []
		},

		photosLocationName(): string {
			switch (this.photosLocation) {
				case '/':
					return t('photos', 'Home')
				default:
					return this.photosLocation
			}
		},

		isPhotosLocationInPhotosSourceFolders(): boolean {
			return isPathInsideSources(
				this.photosLocation,
				this.photosSourceFolders,
			)
		},
	},

	methods: {
		debounceSelectPhotosFolder: debounce(function() {
			this.selectPhotosFolder()
		}),

		async selectPhotosFolder(): Promise<void> {
			const pickedFolder = await this.openFilePicker(
				t('photos', 'Select the default upload location for your media'),
			)

			if (!pickedFolder) {
				return
			}

			await this.updatePhotosFolder(pickedFolder)
		},

		async openFilePicker(title: string): Promise<string> {
			const picker = getFilePickerBuilder(title)
				.setMultiSelect(false)
				.addMimeTypeFilter('httpd/unix-directory')
				.allowDirectories()
				.startAt(this.photosLocation)
				.addButton({
					label: t('photos', 'Pick folder'),
					callback: (nodes) => logger.debug('Picked', { nodes }),
				})
				.build()

			return picker.pick()
		},

		async updatePhotosFolder(path: string): Promise<void> {
			await this.$store.dispatch('updateUserConfig', {
				key: 'photosLocation',
				value: path,
			})

			this.$emit(
				'folders-update',
				isPathInsideSources(path, this.photosSourceFolders),
			)
		},

		t,
	},
})
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
