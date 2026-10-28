<!--
  - SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->

<template>
	<NcModal
		v-if="showAlbumCreationForm"
		key="albumCreationForm"
		labelId="new-album-form"
		:lightBackdrop="true"
		:setReturnFocus="returnFocus"
		@close="closeAlbumCreationForm">
		<h2 class="timeline-album-dialogs__heading">
			{{ t('photos', 'New album') }}
		</h2>

		<AlbumForm
			@done="handleAlbumCreated"
			@closing="closeAlbumCreationForm" />
	</NcModal>

	<NcModal
		v-if="showAlbumPicker"
		key="albumPicker"
		labelId="album-picker"
		@close="closeAlbumPicker">
		<AlbumPicker @albumPicked="addSelectionToAlbum" />
	</NcModal>

	<PhotosPicker
		v-model:open="showPhotosPicker"
		:blacklist-ids="blacklistIds"
		:destination="destination"
		:name="t('photos', 'Add photos to {albumName}', { albumName: destination })"
		:allowempty="allowEmpty"
		@closed="handlePickerClose"
		@files-picked="handleFilesPicked" />
</template>

<script setup lang="ts">
import type { Collection } from '../../services/collectionFetcher.ts'
import type { Album } from '../../store/albums.ts'

import { t } from '@nextcloud/l10n'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import NcModal from '@nextcloud/vue/components/NcModal'
import AlbumForm from '../Albums/AlbumForm.vue'
import AlbumPicker from '../Albums/AlbumPicker.vue'
import PhotosPicker from '../PhotosPicker.vue'
import { useCollectionsStore } from '../../store/collections.ts'

const props = defineProps<{
	showAlbumCreationForm: boolean
	showAlbumPicker: boolean
	selectedFileIds: string[]
	returnFocus?: HTMLElement
}>()

const emit = defineEmits<{
	'update:show-album-creation-form': [value: boolean]
	'update:show-album-picker': [value: boolean]
}>()

const router = useRouter()
const collectionsStore = useCollectionsStore()

const showPhotosPicker = ref(false)
const destination = ref('')
const collection = ref('')
const navigateOnPickerClose = ref(false)

const blacklistIds: string[] = []
const allowEmpty = true

function closeAlbumCreationForm(): void {
	emit('update:show-album-creation-form', false)
}

function closeAlbumPicker(): void {
	emit('update:show-album-picker', false)
}

function handleAlbumCreated({ album }: { album: Collection }): void {
	closeAlbumCreationForm()

	destination.value = album.basename
	collection.value = album.root + album.path
	navigateOnPickerClose.value = true
	showPhotosPicker.value = true
}

function handlePickerClose(): void {
	if (!navigateOnPickerClose.value || destination.value === '') {
		return
	}

	navigateOnPickerClose.value = false
	void router.push(`/albums/${destination.value}`)
}

async function handleFilesPicked(fileIds: string[]): Promise<void> {
	await collectionsStore.addFilesToCollection(collection.value, fileIds)

	navigateOnPickerClose.value = false
	showPhotosPicker.value = false

	await router.push(`/albums/${destination.value}`)
}

async function addSelectionToAlbum(album: Album): Promise<void> {
	closeAlbumPicker()

	await collectionsStore.addFilesToCollection(
		album.root + album.path,
		props.selectedFileIds,
	)
}
</script>

<style lang="scss" scoped>
.timeline-album-dialogs__heading {
	padding: calc(var(--default-grid-baseline) * 4);
	margin-bottom: 0;
	padding-bottom: 0;
}
</style>
