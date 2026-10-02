<!--
 - SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
 - SPDX-License-Identifier: AGPL-3.0-or-later
-->

<template>
	<NcAppSettingsDialog
		:open="open"
		:name="t('photos', 'Photos settings')"
		:legacy="false"
		@update:open="onClose">
		<NcAppSettingsSection id="layout-settings" :name="t('photos', 'General')">
			<PhotosSourceLocationsSettings @folders-update="handleFoldersUpdate" />
			<PhotosUploadLocationSettings @folders-update="handleFoldersUpdate" />

			<NcNoteCard
				v-if="showFoldersWarning || !isPhotosLocationInPhotosSourceFolders"
				class="notecard"
				type="warning"
				:showAlert="true"
				:heading="t('photos', 'Upload folder not part of media folder')">
				{{ t('photos', 'Uploaded items will not appear in the Photos & Videos section.') }}
			</NcNoteCard>

			<CroppedLayoutSettings />
		</NcAppSettingsSection>
		<KeyboardShortcutsSettings />
	</NcAppSettingsDialog>
</template>

<script lang='ts'>
import { t } from '@nextcloud/l10n'
import NcAppSettingsDialog from '@nextcloud/vue/components/NcAppSettingsDialog'
import NcAppSettingsSection from '@nextcloud/vue/components/NcAppSettingsSection'
import NcNoteCard from '@nextcloud/vue/components/NcNoteCard'
import CroppedLayoutSettings from './CroppedLayoutSettings.vue'
import KeyboardShortcutsSettings from './KeyboardShortcutsSettings.vue'
import PhotosSourceLocationsSettings from './PhotosSourceLocationsSettings.vue'
import PhotosUploadLocationSettings from './PhotosUploadLocationSettings.vue'
import { useUserConfigStore } from '../../store/userConfig.ts'

export default {
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

	setup() {
		return {
			userConfigStore: useUserConfigStore(),
		}
	},

	data() {
		return {
			showFoldersWarning: false,
		}
	},

	computed: {
		photosLocation(): string {
			return this.userConfigStore.photosLocation
		},

		photosSourceFolders(): string[] {
			return this.userConfigStore.photosSourceFolders
		},

		isPhotosLocationInPhotosSourceFolders(): boolean {
			const normalizedPath = this.photosLocation.replace(/\/+$/, '')

			return this.photosSourceFolders.some((source) => {
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
}
</script>
