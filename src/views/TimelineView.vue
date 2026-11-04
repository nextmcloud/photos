<!--
  - SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->

<template>
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
		<HeaderNavigation
			key="navigation"
			path="/"
			:title="rootTitle"
			:rootTitle="rootTitle"
			@refresh="resetFetchFilesState">
			<template #subtitle>
				<div v-if="loadingMediaCounts" class="album__details">
					{{ t('photos', 'Loading…') }}
				</div>
				<div v-else-if="photosCount > 0 && videosCount > 0" class="album__details album__details_all">
					{{ n('photos', '%n item', '%n photos', photosCount) }} {{ t('photos', 'and') }} {{ n('photos', '%n item', '%n videos', videosCount) }} ⸱ {{ t('photos', 'Created') }} {{ dateCreated }}
				</div>
				<div v-else-if="photosCount > 0" class="album__details album__details_photos">
					{{ n('photos', '%n item', '%n photos', photosCount) }} ⸱ {{ t('photos', 'Created') }} {{ dateCreated }}
				</div>
				<div v-else-if="videosCount > 0" class="album__details album__details__videos">
					{{ n('photos', '%n item', '%n videos', videosCount) }} ⸱ {{ t('photos', 'Created') }} {{ dateCreated }}
				</div>
			</template>

			<template v-if="selectedFileIds.length > 0" #bulk>
				<TimelineBulkActions
					:selected-file-ids="selectedFileIds"
					@add-to-album="showAlbumPicker = true"
					@download-selection="downloadSelectedFiles"
					@delete-selection="deleteSelection"
					@reset-selection="resetSelection" />
			</template>

			<template #right>
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

			<template #buttons>
				<TimelineDisplayActions
					v-if="selectedFileIds.length === 0 && !hasNoSourceFolders"
					:grid-density="gridDensity"
					:cropped-layout="croppedLayout"
					@update:grid-density="setGridDensity"
					@update:cropped-layout="toggleCroppedLayout" />
			</template>

			<NcUploadPicker
				v-if="selectedFileIds.length === 0 && uploadFolder !== undefined && !hasNoSourceFolders"
				:accept="mimesType"
				:content="uploadDestinationContent"
				:destination="uploadFolder"
				:label="t('photos', 'Upload')"
				:multiple="true"
				@finished="onUploadsFinished" />
		</HeaderNavigation>

		<TimelineNoSourceFolders
			v-if="hasNoSourceFolders"
			@open-settings="openPhotosSettings" />

		<template v-else>
			<FilesListViewer
				:containerElement="appContent"
				class="timeline__file-list"
				:fileIdsBySection="fileIdsByMonth"
				:sections="monthsList"
				:loading="loadingFiles"
				:baseHeight="tileBaseHeight"
				:emptyMessage="createAlbumButtonLabel"
				:scrollToSection="scrubberTarget"
				:scrollOffset="150"
				@add-collection="showAlbumCreationForm = $event"
				@needContent="getContent">
				<template #default="{ file, isHeader }">
					<h2
						v-if="isHeader"
						:id="'file-picker-section-header-' + file.id"
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

			<DateScrubber
				:months="monthsList"
				:monthCounts="monthCounts"
				:currentMonth="scrubberTarget || monthsList[0]"
				@jump="onScrubberJump" />
		</template>

		<TimelineAlbumDialogs
			v-model:show-album-creation-form="showAlbumCreationForm"
			v-model:show-album-picker="showAlbumPicker"
			:selected-file-ids="selectedFileIds"
			:return-focus="newAlbumButton?.$el" />
	</div>
</template>

<script setup lang="ts">
import { toViewerFileInfo, type PhotoTarget } from '../utils/fileUtils.ts'

import { subscribe, unsubscribe } from '@nextcloud/event-bus'
import { defaultRemoteURL } from '@nextcloud/files/dav'
import { n, t } from '@nextcloud/l10n'
import { generateUrl } from '@nextcloud/router'
import { useIsMobile } from '@nextcloud/vue/composables/useIsMobile'
import { storeToRefs } from 'pinia'
import { computed, onMounted, onUnmounted, ref, toRef, useTemplateRef, watch } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcEmptyContent from '@nextcloud/vue/components/NcEmptyContent'
import NcUploadPicker from '@nextcloud/vue/components/NcUploadPicker'
import AlertCircleOutline from 'vue-material-design-icons/AlertCircleOutline.vue'
import FolderAlertOutline from 'vue-material-design-icons/FolderAlertOutline.vue'
import PlusBoxMultipleOutline from 'vue-material-design-icons/PlusBoxMultipleOutline.vue'
import DateScrubber from '../components/DateScrubber.vue'
import FileComponent from '../components/FileComponent.vue'
import FilesListViewer from '../components/FilesListViewer.vue'
import HeaderNavigation from '../components/HeaderNavigation.vue'
import PhotosSourceLocationsSettings from '../components/Settings/PhotosSourceLocationsSettings.vue'
import TimelineAlbumDialogs from '../components/Timeline/TimelineAlbumDialogs.vue'
import TimelineBulkActions from '../components/Timeline/TimelineBulkActions.vue'
import TimelineDisplayActions from '../components/Timeline/TimelineDisplayActions.vue'
import TimelineNoSourceFolders from '../components/Timeline/TimelineNoSourceFolders.vue'
import { useFetchFiles } from '../composables/useFetchFiles.ts'
import { useFilesByMonth } from '../composables/useFilesByMonth.ts'
import { useFilesSelection } from '../composables/useFilesSelection.ts'
import { useGridDensity } from '../composables/useGridDensity.ts'
import { useTimelineMediaCounts } from '../composables/useTimelineMediaCounts.ts'
import { useTimelineUpload } from '../composables/useTimelineUpload.ts'
import { allMimes } from '../services/AllowedMimes.ts'
import { downloadFiles } from '../services/downloadFiles.ts'
import { logger } from '../services/logger.ts'
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

const emit = defineEmits<{
	'open-settings': []
}>()

const isMobile = useIsMobile()

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
const appContent = document.getElementById('app-content-vue')
const scrubberTarget = ref('')
const files = computed(() => filesStore.files)
const hasNoSourceFolders = computed(() => (userConfigStore.photosSourceFolders?.length ?? 0) === 0)
const { uploadFolder, uploadDestinationContent } = useTimelineUpload(hasNoSourceFolders)

const { fileIdsByMonthUngrouped, burstStacks, fileIdsByMonth, monthsList } = useFilesByMonth(fetchedFileIds, files, true)

const monthCounts = computed<Record<string, number>>(() => {
	const entries = Object.entries(fileIdsByMonthUngrouped.value)
	return Object.fromEntries(entries.map(([month, fileIds]) => [month, fileIds.length]))
})

const createAlbumButtonLabel = computed(() => t('photos', 'Create new album'))

const {
	photosCount,
	videosCount,
	dateCreated,
	loadingMediaCounts,
	loadMediaCounts,
	resetMediaCounts,
} = useTimelineMediaCounts({
	mimesType: toRef(props, 'mimesType'),
	onThisDay: toRef(props, 'onThisDay'),
	onlyFavorites: toRef(props, 'onlyFavorites'),
	filtersQuery,
	hasNoSourceFolders,
})

const croppedLayout = computed(() => userConfigStore.croppedLayout)

const timelineQueryKey = computed(() => JSON.stringify({
	mimesType: [...props.mimesType].sort(),
	onlyFavorites: props.onlyFavorites,
	onThisDay: props.onThisDay,
	extraFilters: filtersQuery.value,
}))

watch(
	timelineQueryKey,
	(_query, previousQuery) => {
		if (previousQuery !== undefined) {
			resetFetchFilesState()

			if (!hasNoSourceFolders.value) {
				void getContent()
			}
		}

		void loadMediaCounts()
	},
	{ immediate: true },
)

function getContent(): Promise<number[]> {
	if (hasNoSourceFolders.value) {
		return Promise.resolve([])
	}

	return fetchFiles({
		mimesType: props.mimesType,
		onThisDay: props.onThisDay,
		onlyFavorites: props.onlyFavorites,
		extraFilters: filtersQuery.value,
	})
}

function openPhotosSettings(): void {
	emit('open-settings')
}

function onScrubberJump(month: string): void {
	scrubberTarget.value = month
}

function onFileSelectToggle({ id, value }: { id: number, value: boolean }): void {
	const fileIds = burstStacks.value[id]?.memberIds ?? [String(id)]

	for (const fileId of fileIds) {
		selection.value[fileId] = value
	}
}

function burstCount(fileId: string): number {
	return burstStacks.value[fileId]?.memberIds.length ?? 1
}

function openViewer(fileId: number): void {
	const fileIds = burstStacks.value[fileId]?.memberIds
		?? Object.values(fileIdsByMonth.value).flat()

	const file = files.value[fileId]

	if (file === undefined) {
		return
	}

	const viewer = window.OCA.Viewer

	if (viewer === undefined) {
		logger.error('Legacy viewer is not available')
		return
	}

	viewer.open({
		fileInfo: toViewerFileInfo(file),
		list: fileIds
			.map((id) => files.value[id])
			.filter((file) => file !== undefined)
			.map(toViewerFileInfo),
		enableSidebar: true,
	})
}

function onPhotoDeleted(photo: PhotoTarget): void {
	onUncheckFiles([photo.fileid.toString()])
	fetchedFileIds.value = fetchedFileIds.value.filter((fileId) => fileId !== photo.fileid)
}

async function deleteSelection(): Promise<void> {
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
	if (key !== 'photosSourceFolders') {
		return
	}

	resetFetchFilesState()
	resetSelection()
	scrubberTarget.value = ''
	resetMediaCounts()

	if (hasNoSourceFolders.value) {
		return
	}

	void getContent()
	void loadMediaCounts()
}

function toggleCroppedLayout(value: boolean): void {
	void userConfigStore.updateUserConfig('croppedLayout', value)
}

async function onUploadsFinished(): Promise<void> {
	try {
		resetFetchFilesState()
		await Promise.all([getContent(), loadMediaCounts()])
	} catch (error) {
		logger.error('Failed to refresh timeline after upload', { error })
	}
}

onBeforeRouteLeave(() => {
	appContent?.scrollTo(0, 0)

	Object.keys(selectedFilters.value).forEach((key) => {
		selectedFilters.value[key] = []
	})
})

function handleViewerSidebarOpen(node: Node): void {
	const davPath = node.source.startsWith(defaultRemoteURL)
		? node.source.slice(defaultRemoteURL.length)
		: undefined

	if (!davPath) {
		logger.error('Could not determine DAV path for viewer share action', {
			fileid: node.fileid,
			source: node.source,
		})
		return
	}

	sessionStorage.setItem('nmcsharing:pending-share', JSON.stringify({
		fileid: node.fileid,
		davPath,
	}))

	const url = generateUrl('/f/{fileid}', {
		fileid: node.fileid,
	})

	window.location.href = `${url}?openfile=false&opendetails=true`
}

onMounted(() => {
	subscribe(configChangedEvent, handleUserConfigChange)
	subscribe('viewer:sidebar:open', handleViewerSidebarOpen)
})

onUnmounted(() => {
	unsubscribe(configChangedEvent, handleUserConfigChange)
	unsubscribe('viewer:sidebar:open', handleViewerSidebarOpen)
})
</script>

<style lang="scss" scoped>
.timeline {
	display: flex;
	flex-direction: column;
	height: 100%;

	&__empty-content {
		height: 100%;
		flex: 1 1 auto;
		min-height: 0;

		.timeline__update_source_directory {
			align-items: center;

			:deep(.folder) {
				min-width: unset;
			}
		}
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
