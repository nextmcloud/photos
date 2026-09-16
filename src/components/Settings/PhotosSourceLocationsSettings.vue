<!--
 - SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 - SPDX-License-Identifier: AGPL-3.0-or-later
-->

<template>
	<div class="photos-locations">
		<div class="photos-locations__description">
			{{ t('photos', 'Choose the folders from where photos and videos are shown.') }}
		</div>

		<ul class="photos-locations__list">
			<li
				v-for="source in photosSourceFolders"
				:key="source">
				<PhotosFolder
					:path="source"
					can-delete
					:root-folder-label="t('photos', 'Entire MagentaCLOUD')"
					:root-folder-icon="FolderMultipleOutline"
					@remove-folder="removeSourceFolder(source)" />
			</li>
		</ul>

		<NcButton
			:aria-label="t('photos', 'Add a Photos source for the timelines')"
			variant="tertiary"
			:wide="true"
			@click="debounceAddSourceFolder">
			<template #icon>
				<Plus :size="20" />
			</template>
			{{ t('photos', 'Add folder') }}
		</NcButton>
	</div>
</template>

<script lang="ts">
import { getFilePickerBuilder } from '@nextcloud/dialogs'
import { t } from '@nextcloud/l10n'
import debounce from 'debounce'
import { defineComponent } from 'vue'
import NcButton from '@nextcloud/vue/components/NcButton'
import FolderMultipleOutline from 'vue-material-design-icons/FolderMultipleOutline.vue'
import Plus from 'vue-material-design-icons/Plus.vue'
import PhotosFolder from './PhotosFolder.vue'
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
	name: 'PhotosSourceLocationsSettings',

	components: {
		NcButton,
		PhotosFolder,
		Plus,
	},

	emits: ['folders-update'],

	data() {
		return {
			FolderMultipleOutline,
		}
	},

	computed: {
		photosLocation(): string {
			return this.$store.state.userConfig?.photosLocation ?? ''
		},

		photosSourceFolders(): string[] {
			return this.$store.state.userConfig?.photosSourceFolders ?? []
		},

		isPhotosLocationInPhotosSourceFolders(): boolean {
			return isPathInsideSources(
				this.photosLocation,
				this.photosSourceFolders,
			)
		},
	},

	methods: {
		debounceAddSourceFolder: debounce(function() {
			this.addSourceFolder()
		}, 200, { immediate: false }),

		async openFilePicker(title: string): Promise<string> {
			const picker = getFilePickerBuilder(title)
				.setMultiSelect(false)
				.addMimeTypeFilter('httpd/unix-directory')
				.allowDirectories()
				.addButton({
					label: t('photos', 'Pick folder'),
					variant: 'primary',
					callback: (nodes) => logger.debug('Picked', { nodes }),
				})
				.build()

			return picker.pick()
		},

		async addSourceFolder(): Promise<void> {
			const pickedFolder = await this.openFilePicker(
				t('photos', 'Select a source folder for your media'),
			)

			if (!pickedFolder) {
				return
			}

			const normalizedPickedFolder = normalizePath(pickedFolder)

			const folderAlreadyExists = this.photosSourceFolders.some((source) => {
				return normalizePath(source) === normalizedPickedFolder
			})

			if (folderAlreadyExists) {
				return
			}

			const folders = [
				...this.photosSourceFolders,
				pickedFolder,
			]

			await this.$store.dispatch('updateUserConfig', {
				key: 'photosSourceFolders',
				value: folders,
			})

			this.$emit(
				'folders-update',
				isPathInsideSources(this.photosLocation, folders),
			)
		},

		async removeSourceFolder(sourceToRemove: string): Promise<void> {
			const normalizedSourceToRemove = normalizePath(sourceToRemove)

			const folders = this.photosSourceFolders.filter((source) => {
				return normalizePath(source) !== normalizedSourceToRemove
			})

			await this.$store.dispatch('updateUserConfig', {
				key: 'photosSourceFolders',
				value: folders,
			})

			this.$emit(
				'folders-update',
				isPathInsideSources(this.photosLocation, folders),
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
	}

	&__list {
		padding-inline-start: 12px;
		margin: 16px 0 0;

		li {
			list-style: none;
		}
	}
}
</style>
