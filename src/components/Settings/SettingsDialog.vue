<!--
 - SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
 - SPDX-License-Identifier: AGPL-3.0-or-later
-->

<template>
	<NcAppSettingsDialog
		:open="open"
		:name="t('photos', 'Photos settings')"
		:legacy="false"
		:noVersion="true"
		:show-navigation="false"
		@update:open="onClose">

		<NcAppSettingsSection 
			id="source-directories-settings" 
			:name="t('photos', 'Media folders')">
			<PhotosSourceLocationsSettings @folders-update="handleFoldersUpdate" />
		</NcAppSettingsSection>
		
		<NcAppSettingsSection 
			id="upload-directory-settings" 
			:name="t('photos', 'Upload folder')">
			<PhotosUploadLocationSettings @folders-update="handleFoldersUpdate" />
		</NcAppSettingsSection>

		<NcNoteCard
			v-if="showFoldersWarning || !isPhotosLocationInPhotosSourceFolders"
			class="notecard"
			type="warning"
			:show-alert="true"
			:heading="t('photos', 'Upload folder not part of media folder')">
			{{ t('photos', 'Uploaded items will not appear in the Photos & Videos section.') }}
		</NcNoteCard>
	</NcAppSettingsDialog>
</template>

<script lang="ts">
import { t } from '@nextcloud/l10n'
import { defineComponent } from 'vue'
import NcAppSettingsDialog from '@nextcloud/vue/components/NcAppSettingsDialog'
import NcAppSettingsSection from '@nextcloud/vue/components/NcAppSettingsSection'
import NcNoteCard from '@nextcloud/vue/components/NcNoteCard'
import CroppedLayoutSettings from './CroppedLayoutSettings.vue'
import KeyboardShortcutsSettings from './KeyboardShortcutsSettings.vue'
import PhotosSourceLocationsSettings from './PhotosSourceLocationsSettings.vue'
import PhotosUploadLocationSettings from './PhotosUploadLocationSettings.vue'

export default defineComponent({
	name: 'SettingsDialog',

	components: {
		NcAppSettingsDialog,
		NcAppSettingsSection,
		NcNoteCard,
		CroppedLayoutSettings,
		KeyboardShortcutsSettings,
		PhotosSourceLocationsSettings,
		PhotosUploadLocationSettings,
	},

	props: {
		open: {
			type: Boolean,
			default: false,
		},
	},

	emits: ['update:open'],

	data() {
		return {
			showFoldersWarning: false,
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
			if (!this.photosLocation || this.photosSourceFolders.length === 0) {
				return false
			}

			const normalizedPath = this.photosLocation.replace(/\/+$/, '')

			return this.photosSourceFolders.some((source: string) => {
				const normalizedSource = source.replace(/\/+$/, '')

				return normalizedPath === normalizedSource
					|| normalizedPath.startsWith(normalizedSource + '/')
			})
		},
	},

	methods: {
		// This can only be called if the AppSettingsDialog
		// is shown. So closing only
		onClose() {
			this.$emit('update:open', false)
		},

		handleFoldersUpdate(isPhotosLocationInPhotosSourceFolders: boolean) {
			this.showFoldersWarning = !isPhotosLocationInPhotosSourceFolders
		},

		t,
	},
})
</script>
