<!--
  - SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->

<template>
	<!-- Errors handlers -->
	<div v-if="errorFetchingFiles" class="timeline__empty-content">
		<NcEmptyContent
			v-if="errorFetchingFiles === 404"
			:name="t('photos', 'One of the source folders does not exist')">
			<template #icon>
				<FolderAlertOutline />
			</template>
			<template #action>
				<PhotosSourceLocationsSettings class="timeline__update_source_directory" />
			</template>
		</NcEmptyContent>
		<NcEmptyContent v-else :name="t('photos', 'An error occurred')">
			<template #icon>
				<AlertCircleOutline />
			</template>
		</NcEmptyContent>
	</div>

	<div v-else class="timeline">
		<!-- Header -->
		<HeaderNavigation
			key="navigation"
			path="/"
			:title="rootTitle"
			:rootTitle="rootTitle"
			@refresh="resetFetchFilesState">

			<template #subtitle>
				<div v-if="photosCount > 0 && filesCount > photosCount" class="album__details album__details_all">
					{{ n('photos', '%n item', '%n photos', photosCount) }} {{ t('photos', 'and') }} {{ n('photos', '%n item', '%n videos', videosCount) }} ⸱ {{ t('photos', 'Created') }} {{ dateCreated }}
				</div>

				<div v-else-if="photosCount > 0 && filesCount === photosCount" class="album__details album__details_photos">
					{{ n('photos', '%n item', '%n photos', photosCount) }} ⸱ {{ t('photos', 'Created') }} {{ dateCreated }}
				</div>

				<div v-else-if="videosCount > 0 && filesCount === videosCount" class="album__details album__details__videos">
					{{ n('photos', '%n item', '%n videos', videosCount) }} ⸱ {{ t('photos', 'Created') }} {{ dateCreated }}
				</div>
			</template>

			<template v-if="selectedFileIds.length > 0" #bulk>
				<!-- Filters -->
				<span class="photos-navigation__bulk-operations__selected">
					<span class="icon-minus"
						@click="resetSelection" />
					<span class="selected__count">
						{{ selectedFileIds.length }} {{ t('photos', 'selected') }}
					</span>
				</span>
				<NcActions :force-name="true" :inline="inlineActions">

					<NcActionButton
						:close-after-click="true"
						:aria-label="t('photos', 'Add to album')"
						data-cy-header-action="add-to-album"
						@click="showAlbumPicker = true">
						<template #icon>
							<ImageMultipleOutline />
						</template>
						{{ t('photos', 'Add to album') }}
					</NcActionButton>

					<NcActionButton
						data-cy-header-action="download-selection"
						:aria-label="t('photos', 'Download selected files')"
						@click="downloadSelectedFiles">
						<template #icon>
							<DownloadOutline />
						</template>
						{{ t('photos', 'Download') }}
					</NcActionButton>

					<NcActionButton
						:aria-label="t('photos', 'Delete selection')"
						data-cy-header-action="delete-selection"
						@click="deleteSelection">
						<template #icon>
							<DeleteOutline />
						</template>
						{{ t('photos', 'Delete') }}
					</NcActionButton>

					<NcActionButton
						:aria-label="t('photos', 'Unselect all')"
						data-cy-header-action="unselect-all"
						@click="resetSelection">
						<template #icon>
							<Close />
						</template>
						{{ t('photos', 'Unselect all') }}
					</NcActionButton>

					<ActionFavoriteButton :selected-file-ids="selectedFileIds" />
				</NcActions>
			</template>

			<template
				#right>

				<NcButton
					v-if="selectedFileIds.length === 0"
					ref="newAlbumButton"
					:aria-label="createAlbumButtonLabel"
					variant="primary"
					data-cy-header-action="create-album"
					@click="showAlbumCreationForm = true">
					<template v-if="!isMobile" #default>
						{{ createAlbumButtonLabel }}
					</template>
					<template #icon>
						<PlusBoxMultipleOutline />
					</template>
				</NcButton>
			</template>

			<template
				#buttons>
				<NcActions
					v-if="selectedFileIds.length === 0"
					:aria-label="t('photos', 'Change tile size')"
					variant="tertiary"
					data-cy-header-action="density">
					<template #icon>
						<MagnifyMinusOutline v-if="gridDensity === 'large'" :size="20" />
						<MagnifyPlusOutline v-else :size="20" />
					</template>
					<NcActionRadio
						name="photos-density"
						value="small"
						:modelValue="gridDensity"
						@update:modelValue="setGridDensity">
						{{ t('photos', 'Small tiles') }}
					</NcActionRadio>
					<NcActionRadio
						name="photos-density"
						value="medium"
						:modelValue="gridDensity"
						@update:modelValue="setGridDensity">
						{{ t('photos', 'Default') }}
					</NcActionRadio>
					<NcActionRadio
						name="photos-density"
						value="large"
						:modelValue="gridDensity"
						@update:modelValue="setGridDensity">
						{{ t('photos', 'Large tiles') }}
					</NcActionRadio>
				</NcActions>
				
				<NcButton
					v-if="selectedFileIds.length === 0"
					:aria-label="t('photos', 'Enable squared photos view')"
					variant="tertiary"
					@click="toggleCroppedLayout(!croppedLayout)">
					<template #icon>
						<ViewGridOutline v-if="croppedLayout" />
						<ViewDashboardOutline v-else />
					</template>
				</NcButton>
			</template>

			<NcUploadPicker
				v-if="selectedFileIds.length === 0 && uploadFolder !== undefined"
				:accept="mimesType"
				:content="uploadDestinationContent"
				:destination="uploadFolder"
				:label="t('photos', 'Upload')"
				:multiple="true"
				@finished="onUploadsFinished" />
		</HeaderNavigation>

		<FilesListViewer
			:containerElement="appContent"
			class="timeline__file-list"
			:fileIdsBySection="fileIdsByMonth"
			:sections="monthsList"
			:loading="loadingFiles"
			:baseHeight="tileBaseHeight"
			:emptyMessage="createAlbumButtonLabel"
			:scrollToSection="scrubberTarget"
			@add-collection="showAlbumCreationForm = $event"
      @needContent="getContent">
			<template #default="{ file, isHeader }">
        <h2
          v-if="isHeader"
          :id="`file-picker-section-header-${file.id}`"
          class="section-header">
          <b>{{ formatMonth(file.id) }}</b>
          {{ formatYear(file.id) }}
        </h2>
				<FileComponent
	v-else
	:file="files[file.id]"
	:allowSelection="true"
	:burstCount="burstCount(file.id)"
	:selected="selection[file.id] === true"
	@click="openViewer"
	@selectToggled="onFileSelectToggle"
	@deleted="onPhotoDeleted" />
			</template>
		</FilesListViewer>

		<!-- Drag-to-jump date navigation, hidden when there is only one
			month - there is nothing to scrub then. -->
		<DateScrubber
			:months="monthsList"
			:monthCounts="monthCounts"
			:currentMonth="scrubberTarget || monthsList[0]"
			@jump="onScrubberJump" />

		<NcModal
      v-if="showAlbumCreationForm"
      key="albumCreationForm"
      labelId="new-album-form"
      :lightBackdrop="true"
      :setReturnFocus="newAlbumButton?.$el"
      @close="handleAlbumCreateCancel">
      <h2 class="timeline__heading">
        {{ t('photos', 'New album') }}
      </h2>
      <AlbumForm
        :filtersValue="selectedFilters"
        @done="handleAlbumCreated"
        @closing="handleAlbumCreateCancel" />
    </NcModal>

		<NcModal
			v-if="showAlbumPicker"
			key="albumPicker"
			labelId="album-picker"
			@close="showAlbumPicker = false">
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
	</div>
</template>

<script setup lang="ts">
import type { Folder, Node } from '@nextcloud/files'
import type { Collection } from '../services/collectionFetcher.ts'
import type { Album } from '../store/albums.ts'
import type { PhotoTarget } from '../utils/fileUtils.ts'

import { subscribe, unsubscribe } from '@nextcloud/event-bus'
import { FileType } from '@nextcloud/files'
import { defaultRootPath } from '@nextcloud/files/dav'
import { n, t } from '@nextcloud/l10n'
import { getViewer } from '@nextcloud/viewer'
import { useIsMobile } from '@nextcloud/vue/composables/useIsMobile'
import { storeToRefs } from 'pinia'
import { computed, onMounted, onUnmounted, ref, useTemplateRef, watch } from 'vue'
import { onBeforeRouteLeave, useRouter } from 'vue-router'
import NcActionButton from '@nextcloud/vue/components/NcActionButton'
import NcActionRadio from '@nextcloud/vue/components/NcActionRadio'
import NcActions from '@nextcloud/vue/components/NcActions'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcEmptyContent from '@nextcloud/vue/components/NcEmptyContent'
import NcModal from '@nextcloud/vue/components/NcModal'
import NcUploadPicker from '@nextcloud/vue/components/NcUploadPicker'
import AlertCircleOutline from 'vue-material-design-icons/AlertCircleOutline.vue'
import Close from 'vue-material-design-icons/Close.vue'
import FolderAlertOutline from 'vue-material-design-icons/FolderAlertOutline.vue'
import ImageMultipleOutline from 'vue-material-design-icons/ImageMultipleOutline.vue'
import MagnifyMinusOutline from 'vue-material-design-icons/MagnifyMinusOutline.vue'
import MagnifyPlusOutline from 'vue-material-design-icons/MagnifyPlusOutline.vue'
import PlusBoxMultipleOutline from 'vue-material-design-icons/PlusBoxMultipleOutline.vue'
import DeleteOutline from 'vue-material-design-icons/TrashCanOutline.vue'
import DownloadOutline from 'vue-material-design-icons/TrayArrowDown.vue'
import ViewDashboardOutline from 'vue-material-design-icons/ViewDashboardOutline.vue'
import ViewGridOutline from 'vue-material-design-icons/ViewGridOutline.vue'
import ActionFavoriteButton from '../components/Actions/ActionFavoriteButton.vue'
import AlbumForm from '../components/Albums/AlbumForm.vue'
import AlbumPicker from '../components/Albums/AlbumPicker.vue'
import DateScrubber from '../components/DateScrubber.vue'
import FileComponent from '../components/FileComponent.vue'
import FilesListViewer from '../components/FilesListViewer.vue'
import HeaderNavigation from '../components/HeaderNavigation.vue'
import PhotosPicker from '../components/PhotosPicker.vue'
import PhotosSourceLocationsSettings from '../components/Settings/PhotosSourceLocationsSettings.vue'
import { useFetchFiles } from '../composables/useFetchFiles.ts'
import { useFilesByMonth } from '../composables/useFilesByMonth.ts'
import { useFilesSelection } from '../composables/useFilesSelection.ts'
import { useGridDensity } from '../composables/useGridDensity.ts'
import { allMimes } from '../services/AllowedMimes.ts'
import { downloadFiles } from '../services/downloadFiles.ts'
import { fetchFile } from '../services/fileFetcher.ts'
import { getFolderContent } from '../services/FolderContent.ts'
import { logger } from '../services/logger.ts'
import { useCollectionsStore } from '../store/collections.ts'
import { useFilesStore } from '../store/files.ts'
import { useFilterStore } from '../store/filters.ts'
import { configChangedEvent, useUserConfigStore } from '../store/userConfig.ts'
import { formatMonth, formatYear } from '../utils/dateUtils.ts'

const props = withDefaults(defineProps<{
	onlyFavorites?: boolean
	mimesType?: string[]
	onThisDay?: boolean
	rootTitle: string
}>(), {
	onlyFavorites: false,
	mimesType: () => allMimes,
	onThisDay: false,
})

const router = useRouter()
const isMobile = useIsMobile()

const collectionsStore = useCollectionsStore()
const filesStore = useFilesStore()
const filtersStore = useFilterStore()
const userConfigStore = useUserConfigStore()
const { selectedFilters, filtersQuery } = storeToRefs(filtersStore)

const { gridDensity, tileBaseHeight, setGridDensity } = useGridDensity()
const { fetchFiles, resetFetchFilesState, fetchedFileIds, loadingFiles, errorFetchingFiles } = useFetchFiles()
const { selection, selectedFileIds, onUncheckFiles, resetSelection } = useFilesSelection()

const newAlbumButton = useTemplateRef<InstanceType<typeof NcButton>>('newAlbumButton')

const showAlbumCreationForm = ref(false)
const showAlbumPicker = ref(false)
const showPhotosPicker = ref(false)

const blacklistIds = ref<string[]>([])
const destination = ref('')
const collection = ref('')
const allowEmpty = true

const appContent = document.getElementById('app-content-vue')

// Month section the user picked in the DateScrubber, forwarded to
// FilesListViewer's `scrollToSection`. Empty means no override.
const scrubberTarget = ref('')

const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 0)

const uploadFolder = ref<Folder | undefined>()

const files = computed(() => filesStore.files)

// Photos taken in one go are shown as a single tile of the timeline, and are
// reachable from the viewer it opens.
const { fileIdsByMonthUngrouped, burstStacks, fileIdsByMonth, monthsList } = useFilesByMonth(fetchedFileIds, files, true)

// Photo count per month, drives the density ticks of the scrubber. Counted
// before the folding, so a month of bursts reads as dense as it is.
const monthCounts = computed<Record<string, number>>(() => {
	const entries = Object.entries(fileIdsByMonthUngrouped.value)
	return Object.fromEntries(entries.map(([month, fileIds]) => [month, fileIds.length]))
})

const createAlbumButtonLabel = computed(() => {
	if (Object.values(selectedFilters.value).some((values) => values.length > 0)) {
		return t('photos', 'Create new album from filters')
	}

	return t('photos', 'Create new album')
})

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

const filesCount = computed<number>(() => Object.values(fileIdsByMonth.value)
	.reduce((sum, ids) => sum + ids.length, 0))

const photosCount = computed<number>(() => Object.values(fileIdsByMonth.value)
	.flat()
	.filter((fileId) => files.value[fileId]?.mime?.startsWith('image/'))
	.length)

const videosCount = computed<number>(() => Object.values(fileIdsByMonth.value)
	.flat()
	.filter((fileId) => files.value[fileId]?.mime?.startsWith('video/'))
	.length)

const dateCreated = computed<string>(() => {
	const months = Object.keys(fileIdsByMonth.value).sort()

	if (months.length === 0) {
		return ''
	}

	const firstMonth = months[0]
	const lastMonth = months[months.length - 1]

	const firstFormatted = `${formatMonth(firstMonth)} ${formatYear(firstMonth)}`
	const lastFormatted = `${formatMonth(lastMonth)} ${formatYear(lastMonth)}`

	if (firstFormatted === lastFormatted) {
		return firstFormatted
	}

	return `${firstFormatted} ${t('photos', 'to')} ${lastFormatted}`
})

const croppedLayout = computed(() => userConfigStore.croppedLayout)

const photosLocation = computed<string>(() => userConfigStore.photosLocation || '/')

const uploadFolderPath = computed<string>(() => {
	const location = photosLocation.value
		.replace(/^\/+/, '')
		.replace(/\/+$/, '')

	if (location === '') {
		return defaultRootPath
	}

	return `${defaultRootPath.replace(/\/+$/, '')}/${location}`
})

// Photos of the timeline that are loaded, in the order they are shown.
const timelinePhotos = computed(() => fetchedFileIds.value
	.map((fileId) => files.value[fileId])
	.filter((file) => file !== undefined))

watch(filtersQuery, () => {
	resetFetchFilesState()
	getContent()
})

watch(photosLocation, () => {
	fetchUploadFolder()
})

function handleResize(): void {
	windowWidth.value = window.innerWidth
}

function getContent() {
	return fetchFiles({
		mimesType: props.mimesType,
		onThisDay: props.onThisDay,
		onlyFavorites: props.onlyFavorites,
		extraFilters: filtersQuery.value,
	})
}

// FilesListViewer scrolls on its `scrollToSection` prop, so stashing
// the month is all there is to do.
function onScrubberJump(month: string) {
	scrubberTarget.value = month
}

// Selecting the tile of a run selects every photo of it: the photos folded
// into it have no tile of their own to be picked from, and favoriting,
// downloading or deleting a part of a burst would silently leave the rest
// behind.
function onFileSelectToggle({ id, value }: { id: number, value: boolean }): void {
	const fileIds = burstStacks.value[id]?.memberIds ?? [String(id)]

	for (const fileId of fileIds) {
		selection.value[fileId] = value
	}
}

// How many photos the tile of a photo stands for, one being itself.
function burstCount(fileId: string): number {
	return burstStacks.value[fileId]?.memberIds.length ?? 1
}

function openViewer(fileId: number): void {
	// A tile standing for a run of photos hands the viewer that run alone, so
	// flipping through it stays inside the burst rather than leaving it for the
	// rest of the timeline. Every other tile hands it the whole grid.
	const fileIds = burstStacks.value[fileId]?.memberIds
		?? Object.values(fileIdsByMonth.value).flat()

	getViewer().open(
		fileIds
			.map((id) => files.value[id])
			.filter((file) => file !== undefined),
		files.value[fileId],
	)
}

function startSlideshow(): void {
	getViewer().open(
		timelinePhotos.value,
		timelinePhotos.value[0],
		{ startSlideshow: true },
	)
}

function handleAlbumCreated({ album }: { album: Collection }): void {
	showAlbumCreationForm.value = false
	destination.value = album.basename
	collection.value = album.root + album.path
	showPhotosPicker.value = true
}

function handleAlbumCreateCancel(): void {
	showAlbumCreationForm.value = false
}

function handlePickerClose(): void {
	if (destination.value !== '') {
		router.push(`/albums/${destination.value}`)
	}
}

async function handleFilesPicked(fileIds: string[]): Promise<void> {
	await collectionsStore.addFilesToCollection(
		collection.value,
		fileIds,
	)

	showPhotosPicker.value = false
	await router.push(`/albums/${destination.value}`)
}

async function addSelectionToAlbum(album: Album): Promise<void> {
	showAlbumPicker.value = false

	await collectionsStore.addFilesToCollection(
		album.root + album.path,
		selectedFileIds.value,
	)
}

// The photo is already gone from the store, it only has to leave the
// list of the photos this timeline fetched.
function onPhotoDeleted(photo: PhotoTarget): void {
	onUncheckFiles([photo.fileid.toString()])
	fetchedFileIds.value = fetchedFileIds.value.filter((fileId) => fileId !== photo.fileid)
}

async function deleteSelection(): Promise<void> {
	// Need to store the file ids so it is not changed before the deleteFiles call.
	const fileIds = selectedFileIds.value

	onUncheckFiles(fileIds)
	fetchedFileIds.value = fetchedFileIds.value.filter(
		(fileId) => !fileIds.includes(fileId.toString()),
	)

	await filesStore.deleteFiles(fileIds)
}

function downloadSelectedFiles(): void {
	const fileIds = selectedFileIds.value

	onUncheckFiles(fileIds)
	downloadFiles(fileIds.map((fileId) => files.value[fileId]))
}

function handleUserConfigChange({ key }: { key: string }): void {
	if (key === 'photosSourceFolders') {
		resetFetchFilesState()
	}
}

function toggleCroppedLayout(value: boolean): void {
	userConfigStore.updateUserConfig('croppedLayout', value)
}

async function fetchUploadFolder(): Promise<void> {
	try {
		const node = await fetchFile(uploadFolderPath.value)

		if (
			node === null
			|| node === undefined
			|| node.type !== FileType.Folder
			|| !node.source
		) {
			uploadFolder.value = undefined

			logger.error('Invalid Photos upload folder', {
				path: photosLocation.value,
				davPath: uploadFolderPath.value,
				node,
			})
			return
		}

		uploadFolder.value = node as Folder

		logger.debug('Photos upload folder resolved', {
			path: photosLocation.value,
			source: node.source,
		})
	} catch (error) {
		uploadFolder.value = undefined

		logger.error('Failed to fetch Photos upload folder', {
			error,
			path: photosLocation.value,
			davPath: uploadFolderPath.value,
		})
	}
}

async function uploadDestinationContent(): Promise<Node[]> {
	const { folders, files } = await getFolderContent(photosLocation.value)

	return [
		...folders,
		...files,
	]
}

async function onUploadsFinished(): Promise<void> {
	try {
		resetFetchFilesState()
		await getContent()
	} catch (error) {
		logger.error('Failed to refresh timeline after upload', {
			error,
		})
	}
}

onBeforeRouteLeave(() => {
	appContent?.scrollTo(0, 0)

	Object.keys(selectedFilters.value).forEach((key) => {
		selectedFilters.value[key] = []
	})
})

onMounted(async () => {
	subscribe(configChangedEvent, handleUserConfigChange)
	window.addEventListener('resize', handleResize)

	await fetchUploadFolder()
})

onUnmounted(() => {
	unsubscribe(configChangedEvent, handleUserConfigChange)
	window.removeEventListener('resize', handleResize)
})
</script>

<style lang="scss" scoped>
.timeline {
	display: flex;
	flex-direction: column;

	&__empty-content {
		height: 100%;

		.empty-content {
			height: 100%;
		}

		.timeline__update_source_directory {
			align-items: center;

			:deep(.folder) {
				min-width: unset;
			}
		}
	}

	&__header {
		&__left {
			display: flex;
			gap: 1rem;
		}
	}

	&__filters {
		padding: 16px 64px;
	}

	&__heading {
		padding: calc(var(--default-grid-baseline) * 4);
		margin-bottom: 0px;
		padding-bottom: 0px;
	}

	&__file-list {
		padding: 0 64px;

		@media only screen and (max-width: 1200px) {
			padding: 0 4px;
		}

		:deep(.files-list-viewer__section-header) {
			top: var(--photos-navigation-height);
		}
	}
}
</style>
