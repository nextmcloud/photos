<!--
 - SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
 - SPDX-License-Identifier: AGPL-3.0-or-later
-->

<template>
	<NcAppSettingsDialog
		:open="open"
		:show-navigation="false"
		:name="t('photos', 'Photos settings')"
		:no-version="true"
		@update:open="onClose">
		<NcAppSettingsSection id="layout-settings" :name="t('photos', 'View')">
			<CroppedLayoutSettings />
		</NcAppSettingsSection>

		<NcAppSettingsSection id="source-directories-settings" :name="t('photos', 'Media folders')">
			<div class="setting-section-subline">
				{{ t('photos', 'Choose the folders from where photos and videos are shown.') }}
			</div>

			<PhotosSourceLocationsSettings @folders-update="handleFoldersUpdate" />
		</NcAppSettingsSection>

		<NcAppSettingsSection id="upload-directory-settings" :name="t('photos', 'Upload folder')">
			<div class="setting-section-subline">
				{{ t('photos', 'Choose the folder where photos and albums are uploaded to.') }}
			</div>

			<PhotosUploadLocationSettings @folders-update="handleFoldersUpdate" />
		</NcAppSettingsSection>

		<NcNoteCard
			v-if="showFoldersWarning || !isPhotosLocationInphotosSourceFolders"
			class="notecard"
			type="warning"
			:show-alert="true"
			:heading="t('photos', 'Upload folder not part of media folder')">
			{{ t('photos', 'Uploaded items will not appear in the Photos & Videos section.') }}
		</NcNoteCard>
	</NcAppSettingsDialog>
</template>

<script lang='ts'>
import { t } from '@nextcloud/l10n'
import NcAppSettingsDialog from '@nextcloud/vue/components/NcAppSettingsDialog'
import NcAppSettingsSection from '@nextcloud/vue/components/NcAppSettingsSection'
import NcNoteCard from '@nextcloud/vue/components/NcNoteCard'
import CroppedLayoutSettings from './CroppedLayoutSettings.vue'
import PhotosSourceLocationsSettings from './PhotosSourceLocationsSettings.vue'
import PhotosUploadLocationSettings from './PhotosUploadLocationSettings.vue'

export default {
	name: 'SettingsDialog',

	components: {
		NcAppSettingsDialog,
		NcAppSettingsSection,
		NcNoteCard,
		CroppedLayoutSettings,
		PhotosSourceLocationsSettings,
		PhotosUploadLocationSettings,
	},

	props: {
		open: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		return {
			showFoldersWarning: false,
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
		// This can only be called if the AppSettingsDialog
		// is shown. So closing only
		onClose() {
			this.$emit('update:open', false)
		},

		handleFoldersUpdate(isPhotosLocationInphotosSourceFolders) {
			this.showFoldersWarning = !isPhotosLocationInphotosSourceFolders
		},

		t,
	},
}
</script>

<style lang="scss">
.app-settings {
	.setting-section-subline {
		color: var(--color-text-lighter);
		margin-bottom: 8px;
	}
}
</style>
