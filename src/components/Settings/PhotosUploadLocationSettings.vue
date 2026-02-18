<!--
 - SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 - SPDX-License-Identifier: AGPL-3.0-or-later
-->

<template>
	<div class="photos-location">
		<NcButton
			:aria-label="t('photos', 'Choose default Photos upload and Albums location')"
			variant="tertiary"
			@click="debounceSelectPhotosFolder">
			<template #icon>
				<FolderOutline :size="20" />
			</template>
			{{ photosLocation }}
		</NcButton>
	</div>
</template>

<script lang='ts'>
import { getFilePickerBuilder } from '@nextcloud/dialogs'
import { t } from '@nextcloud/l10n'
import debounce from 'debounce'
import { defineComponent } from 'vue'
import NcButton from '@nextcloud/vue/components/NcButton'
import FolderOutline from 'vue-material-design-icons/FolderOutline.vue'
import HomeOutline from 'vue-material-design-icons/HomeOutline.vue'
import logger from '../../services/logger.js'

export default defineComponent({
	name: 'PhotosUploadLocationSettings',

	components: {
		NcButton,

		FolderOutline,
	},

	emits: ['folders-update'],

	data() {
		return {
			HomeOutline,
		}
	},

	computed: {
		photosLocation(): string {
			return this.$store.state.userConfig.photosLocation
		},

		photosSourceFolders(): string[] {
			return this.$store.state.userConfig.photosSourceFolders
		},

		isPhotosLocationInphotosSourceFolders(): boolean {
			const normalizedPath = this.photosLocation.replace(/\/+$/, '')
			const isPhotosLocationInphotosSourceFolders = this.photosSourceFolders.some((source) => {
				const normalizedSource = source.replace(/\/+$/, '')
				return normalizedPath === normalizedSource
					|| normalizedPath.startsWith(normalizedSource + '/')
			})
			return isPhotosLocationInphotosSourceFolders
		},
	},

	methods: {
		debounceSelectPhotosFolder: debounce(function() {
			this.selectPhotosFolder()
		}),

		async selectPhotosFolder(): Promise<void> {
			const pickedFolder = await this.openFilePicker(t('photos', 'Select the default upload location for your media'))
			this.updatePhotosFolder(pickedFolder)
		},

		async openFilePicker(title: string): Promise<string> {
			const picker = getFilePickerBuilder(title)
				.setMultiSelect(false)
				.addMimeTypeFilter('httpd/unix-directory')
				.allowDirectories()
				.startAt(this.photosLocation)
				.addButton({
					label: t('photos', 'Pick folder'),
					variant: 'primary',
					callback: (nodes) => logger.debug('Picked', { nodes }),
				})
				.build()

			return picker.pick()
		},

		updatePhotosFolder(path: string): void {
			this.$store.dispatch('updateUserConfig', { key: 'photosLocation', value: path })
			this.$emit('folders-update', this.isPhotosLocationInphotosSourceFolders)
		},

		t,
	},
})
</script>

<style lang="scss" scoped>
.photos-location {
	display: flex;
	flex-direction: column;
	width: fit-content;

	.folder {
		margin-bottom: 16px;
	}
}
</style>
