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

<script setup lang="ts">
import { t } from '@nextcloud/l10n'
import { computed, ref } from 'vue'
import NcAppSettingsDialog from '@nextcloud/vue/components/NcAppSettingsDialog'
import NcAppSettingsSection from '@nextcloud/vue/components/NcAppSettingsSection'
import NcNoteCard from '@nextcloud/vue/components/NcNoteCard'
import PhotosSourceLocationsSettings from './PhotosSourceLocationsSettings.vue'
import PhotosUploadLocationSettings from './PhotosUploadLocationSettings.vue'
import { useUserConfigStore } from '../../store/userConfig.ts'

withDefaults(defineProps<{
	open?: boolean
}>(), {
	open: false,
})

const emit = defineEmits<{
	'update:open': [open: boolean]
}>()

const userConfigStore = useUserConfigStore()

const showFoldersWarning = ref(false)

const photosLocation = computed<string>(() => userConfigStore.photosLocation)

const photosSourceFolders = computed<string[]>(() => userConfigStore.photosSourceFolders)

const isPhotosLocationInPhotosSourceFolders = computed<boolean>(() => {
	if (!photosLocation.value || photosSourceFolders.value.length === 0) {
		return false
	}

	const normalizedPath = photosLocation.value.replace(/\/+$/, '')

	return photosSourceFolders.value.some((source) => {
		const normalizedSource = source.replace(/\/+$/, '')

		return normalizedPath === normalizedSource
			|| normalizedPath.startsWith(normalizedSource + '/')
	})
})

// This can only be called if the AppSettingsDialog
// is shown. So closing only
function onClose() {
	emit('update:open', false)
}

function handleFoldersUpdate(isPhotosLocationInPhotosSourceFolders: boolean) {
	showFoldersWarning.value = !isPhotosLocationInPhotosSourceFolders
}
</script>
