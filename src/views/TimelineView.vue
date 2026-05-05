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
			<FolderAlertOutline slot="icon" />
			<PhotosSourceLocationsSettings
				slot="action"
				class="timeline__update_source_directory" />
		</NcEmptyContent>
		<NcEmptyContent v-else :name="t('photos', 'An error occurred')">
			<AlertCircleOutline slot="icon" />
		</NcEmptyContent>
	</div>

	<div v-else class="timeline">
		<!-- Header -->
		<HeaderNavigation
			key="navigation"
			:loading="loadingCount > 0"
			path="/"
			:title="rootTitle"
			:root-title="rootTitle"
			@refresh="resetFetchFilesState">

			<div v-if="photosCount > 0 && filesCount > photosCount" slot="subtitle" class="album__details album__details_all">
				{{ n('photos', '%n item', '%n photos', photosCount) }} {{ t('photos', 'and') }} {{ n('photos', '%n item', '%n videos', videosCount) }} ⸱ {{ t('photos', 'Created') }} {{ dateCreated }}
			</div>

			<div v-else-if="photosCount > 0 && filesCount == photosCount" slot="subtitle" class="album__details album__details_photos">
				{{ n('photos', '%n item', '%n photos', photosCount) }} ⸱ {{ t('photos', 'Created') }} {{ dateCreated }}
			</div>

			<div v-else-if="videosCount > 0 && filesCount == videosCount" slot="subtitle" class="album__details album__details__videos">
				{{ n('photos', '%n item', '%n videos', videosCount) }} ⸱ {{ t('photos', 'Created') }} {{ dateCreated }}
			</div>

			<div class="timeline__header__left">
				<!-- TODO: UploadPicker -->
				<NcButton
					v-if="true"
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

				<template v-else>
					<NcButton
						:close-after-click="true"
						variant="primary"
						:aria-label="t('photos', 'Add to album')"
						data-cy-header-action="add-to-album"
						@click="showAlbumPicker = true">
						<template #icon>
							<Plus />
						</template>
						<template v-if="!isMobile" #default>
							{{ t('photos', 'Add to album') }}
						</template>
					</NcButton>

					<NcButton
						v-if="selectedFileIds.length > 0"
						:aria-label="t('photos', 'Unselect all')"
						data-cy-header-action="unselect-all"
						@click="resetSelection">
						<template #icon>
							<Close />
						</template>
						<template v-if="!isMobile" #default>
							{{ t('photos', 'Unselect all') }}
						</template>
					</NcButton>

					<NcActions :aria-label="t('photos', 'Open actions menu')">
						<NcActionButton
							data-cy-header-action="download-selection"
							:close-after-click="true"
							:aria-label="t('photos', 'Download selected files')"
							@click="downloadSelectedFiles">
							{{ t('photos', 'Download selected files') }}

							<template #icon>
								<DownloadOutline />
							</template>
						</NcActionButton>

						<ActionFavorite :selected-file-ids="selectedFileIds" />

						<NcActionButton
							:close-after-click="true"
							:aria-label="t('photos', 'Delete selection')"
							data-cy-header-action="delete-selection"
							@click="deleteSelection">
							{{ t('photos', 'Delete selection') }}
							<template #icon>
								<DeleteOutline />
							</template>
						</NcActionButton>
					</NcActions>
				</template>
			</div>

			<template slot="buttons">
				<NcButton
					:aria-label="t('photos', 'Enable squared photos view')"
					variant="tertiary"
					@click="toggleCroppedLayout(!croppedLayout)">
					<template #icon>
						<ViewGridOutline v-if="croppedLayout" />
						<ViewDashboardOutline v-else />
					</template>
				</NcButton>
			</template>

			<template v-if="selectedFileIds.length > 0" slot="bulk">
				<!-- Filters -->
				<span class="photos-navigation__bulk-operations__selected">
					<span class="icon-minus" />
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
		</HeaderNavigation>

		<FilesListViewer
			ref="filesListViewer"
			:container-element="appContent"
			class="timeline__file-list"
			:file-ids-by-section="fileIdsByMonth"
			:sections="monthsList"
			:loading="loadingFiles"
			:base-height="isMobile ? 120 : 200"
			:empty-message="createAlbumButtonLabel"
			@add-collection="showAlbumCreationForm = $event"
			@need-content="getContent">
			<template slot-scope="{ file, isHeader, distance }">
				<h2
					v-if="isHeader"
					:id="`file-picker-section-header-${file.id}`"
					class="section-header">
					{{ file.id | dateMonth }} {{ file.id | dateYear }}
				</h2>
				<FileComponent
					v-else
					:file="files[file.id]"
					:allow-selection="true"
					:selected="selection[file.id] === true"
					:distance="distance"
					:is-collection="true"
					@click="openViewer"
					@favorite="toggleFavorite"
					@remove="handleFileDeleted"
					@select-toggled="onFileSelectToggle" />
			</template>
		</FilesListViewer>

		<NcModal
			v-if="showAlbumPicker"
			key="albumPicker"
			label-id="album-picker"
			@close="showAlbumPicker = false">
			<AlbumPicker @album-picked="addSelectionToAlbum" />
		</NcModal>

		<NcModal
			v-if="showAlbumCreationForm"
			key="albumCreationForm"
			label-id="new-album-form"
			:name="t('photos', 'New album')"
			:lightBackdrop="true"
			@close="handleAlbumCreateCancel">
			<h2 class="album-creation__heading">
				{{ t('photos', 'New album') }}
			</h2>
			<AlbumForm @done="handleAlbumCreated" @closing="handleAlbumCreateCancel" />
		</NcModal>

		<PhotosPicker
			:open.sync="showPhotosPicker"
			:blacklist-ids="blacklistIds"
			:destination="destination"
			:name="t('photos', 'Add photos to {albumName}', { albumName: destination })"
			:allowempty="allowEmpty"
			@closed="handlePickerClose"
			@files-picked="handleFilesPicked" />
	</div>
</template>

<script lang='ts'>
import type { PropType } from 'vue'
import type { Album } from '../store/albums.ts'

import { subscribe, unsubscribe } from '@nextcloud/event-bus'
import { t, translatePlural } from '@nextcloud/l10n'
import moment from '@nextcloud/moment'
import { useIsMobile } from '@nextcloud/vue/composables/useIsMobile'
import { storeToRefs } from 'pinia'
import NcActionButton from '@nextcloud/vue/components/NcActionButton'
import NcActions from '@nextcloud/vue/components/NcActions'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcEmptyContent from '@nextcloud/vue/components/NcEmptyContent'
import NcModal from '@nextcloud/vue/components/NcModal'
import AlertCircleOutline from 'vue-material-design-icons/AlertCircleOutline.vue'
import Close from 'vue-material-design-icons/Close.vue'
import FolderAlertOutline from 'vue-material-design-icons/FolderAlertOutline.vue'
import ImageMultipleOutline from 'vue-material-design-icons/ImageMultipleOutline.vue'
import Plus from 'vue-material-design-icons/Plus.vue'
import DeleteOutline from 'vue-material-design-icons/TrashCanOutline.vue'
import DownloadOutline from 'vue-material-design-icons/TrayArrowDown.vue'
import ViewDashboardOutline from 'vue-material-design-icons/ViewDashboardOutline.vue'
import ViewGridOutline from 'vue-material-design-icons/ViewGridOutline.vue'
import ActionFavorite from '../components/Actions/ActionFavorite.vue'
import ActionFavoriteButton from '../components/Actions/ActionFavoriteButton.vue'
import AlbumForm from '../components/Albums/AlbumForm.vue'
import AlbumPicker from '../components/Albums/AlbumPicker.vue'
import FileComponent from '../components/FileComponent.vue'
import FilesListViewer from '../components/FilesListViewer.vue'
import HeaderNavigation from '../components/HeaderNavigation.vue'
import PhotosPicker from '../components/PhotosPicker.vue'
import PhotosSourceLocationsSettings from '../components/Settings/PhotosSourceLocationsSettings.vue'
import FetchFilesMixin from '../mixins/FetchFilesMixin.ts'
import FilesByMonthMixin from '../mixins/FilesByMonthMixin.ts'
import FilesSelectionMixin from '../mixins/FilesSelectionMixin.ts'
import { allMimes } from '../services/AllowedMimes.ts'
import { downloadFiles } from '../services/downloadFiles.ts'
import useFilterStore from '../store/filters.ts'
import { configChangedEvent } from '../store/userConfig.ts'
import { toViewerFileInfo } from '../utils/fileUtils.ts'

export default {
	name: 'TimelineView',
	components: {
		DeleteOutline,
		DownloadOutline,
		Close,
		Plus,
		FolderAlertOutline,
		NcEmptyContent,
		NcModal,
		NcActions,
		NcActionButton,
		NcButton,
		AlbumForm,
		AlbumPicker,
		FilesListViewer,
		FileComponent,
		ActionFavorite,
		ActionFavoriteButton,
		HeaderNavigation,
		PhotosSourceLocationsSettings,
		AlertCircleOutline,
		ViewGridOutline,
		ViewDashboardOutline,
		ImageMultipleOutline,
		PhotosPicker,
	},

	filters: {
		dateMonth(date: string): string {
			return moment(date, 'YYYYMM').format('MMMM')
		},

		dateYear(date: string): string {
			return moment(date, 'YYYYMM').format('YYYY')
		},
	},

	mixins: [
		FetchFilesMixin,
		FilesSelectionMixin,
		FilesByMonthMixin,
	],

	beforeRouteLeave(to, from, next) {
		this.appContent?.scrollTo(0, 0)
		next()
		Object.keys(this.selectedFilters).forEach((key) => {
			this.selectedFilters[key] = []
		})
	},

	props: {
		onlyFavorites: {
			type: Boolean,
			default: false,
		},

		mimesType: {
			type: Array as PropType<string[]>,
			default: () => allMimes,
		},

		onThisDay: {
			type: Boolean,
			default: false,
		},

		rootTitle: {
			type: String,
			required: true,
		},
	},

	setup() {
		const isMobile = useIsMobile()

		const filtersStore = useFilterStore()
		const { selectedFilters, filtersQuery } = storeToRefs(filtersStore)

		return {
			isMobile,
			selectedFilters,
			filtersQuery,
		}
	},

	data() {
		return {
			loadingCount: 0,
			showAlbumPicker: false,
			showAlbumCreationForm: false,
			showPhotosPicker: false,
			createdAlbum: null,
			blacklistIds: [],
			destination: '',
			collection: '',
			allowEmpty: true,
			appContent: document.getElementById('app-content-vue'),
			showFilters: false,
			windowWidth: typeof window !== 'undefined' ? window.innerWidth : 0,
		}
	},

	computed: {
		inlineActions() {
			if (this.windowWidth < 512) {
				return 0
			}
			if (this.windowWidth < 768) {
				return 1
			}
			if (this.windowWidth < 1024) {
				return 2
			}
			return 3
		},
		files() {
			return this.$store.state.files.files
		},

		createAlbumButtonLabel() {
			return this.t('photos', 'Create new album')
		},

		croppedLayout() {
			return this.$store.state.userConfig.croppedLayout
		},

		filesCount(): number {
			return Object.values(this.fileIdsByMonth)
				.reduce((sum, ids) => sum + ids.length, 0)
		},

		photosCount(): number {
			return Object.values(this.fileIdsByMonth).flat().filter((fileId) => {
				const file = this.files[fileId]
				return file?.mime?.startsWith('image/')
			}).length
		},

		videosCount(): number {
			return Object.values(this.fileIdsByMonth).flat().filter((fileId) => {
				const file = this.files[fileId]
				return file?.mime?.startsWith('video/')
			}).length
		},

		dateCreated(): string {
			const fileIds = Object.values(this.fileIdsByMonth).flat()
			if (fileIds.length === 0) {
				return ''
			}

			const mtimes = fileIds
				.map((fileId) => this.files[fileId]?.mtime)
				.filter((mtime) => mtime !== undefined && mtime > 0)

			if (mtimes.length === 0) {
				return ''
			}

			const minTime = Math.min(...mtimes)
			const maxTime = Math.max(...mtimes)

			const minFormatted = moment(minTime).format('MMMM YYYY')
			const maxFormatted = moment(maxTime).format('MMMM YYYY')

			const to = this.t('photos', 'to')

			return minFormatted === maxFormatted ? minFormatted : `${minFormatted} ${to} ${maxFormatted}`
		},
	},

	watch: {
		filtersQuery() {
			this.resetFetchFilesState()
			this.getContent()
		},
	},

	mounted() {
		subscribe(configChangedEvent, this.handleUserConfigChange)
		window.addEventListener('resize', this.handleResize)
	},

	destroyed() {
		unsubscribe(configChangedEvent, this.handleUserConfigChange)
		window.removeEventListener('resize', this.handleResize)
	},

	methods: {
		getContent() {
			this.fetchFiles({
				mimesType: this.mimesType,
				onThisDay: this.onThisDay,
				onlyFavorites: this.onlyFavorites,
				extraFilters: this.filtersQuery,
			})
		},

		openViewer(fileId: string) {
			window.OCA.Viewer.open({
				fileInfo: toViewerFileInfo(this.files[fileId]),
				list: Object.values(this.fileIdsByMonth).flat().map((fileId) => toViewerFileInfo(this.files[fileId])),
			})
		},

		openUploader() {
			// TODO: finish when implementing upload
		},

		toggleCroppedLayout(value) {
			this.$store.dispatch('updateUserConfig', { key: 'croppedLayout', value })
		},

		handleAlbumCreated({ album }) {
			this.showAlbumCreationForm = false
			this.destination = album.basename
			this.collection = album.attributes.filename
			this.showPhotosPicker = true
		},

		handlePickerClose() {
			this.$router.push(`/albums/${this.destination}`)
		},

		async handleFilesPicked(fileIds) {
			// Add picked files
			await this.$store.dispatch('addFilesToCollection', { collectionFileName: this.collection, fileIdsToAdd: fileIds })
			// Close the PhotosPicker
			this.showPhotosPicker = false
			// Re-fetch album to have the proper collection
			this.$router.push(`/albums/${this.destination}`)
		},

		handleAlbumCreateCancel() {
			this.showAlbumCreationForm = false
			this.createdAlbum = null
		},

		async addSelectionToAlbum(album: Album) {
			this.showAlbumPicker = false
			await this.$store.dispatch('addFilesToCollection', { collectionFileName: album.root + album.path, fileIdsToAdd: this.selectedFileIds })
		},

		async deleteSelection() {
			// Need to store the file ids so it is not changed before the deleteFiles call.
			const fileIds = this.selectedFileIds
			this.onUncheckFiles(fileIds)
			this.fetchedFileIds = this.fetchedFileIds.filter((fileid) => !fileIds.includes(fileid))
			await this.$store.dispatch('deleteFiles', fileIds)
		},

		handleUserConfigChange({ key }) {
			if (key === 'photosSourceFolders') {
				this.resetFetchFilesState()
			}
		},

		handleFormCreationDone({ album }: { album: Album }) {
			this.showAlbumCreationForm = false
			this.$router.push(`/albums/${album.basename}`)
		},

		handleResize() {
			this.windowWidth = window.innerWidth
		},

		downloadSelectedFiles() {
			const fileIds = this.selectedFileIds
			this.onUncheckFiles(fileIds)
			downloadFiles(fileIds.map((fileId) => this.files[fileId]))
		},

		async handleFileDeleted({ fileid }: File) {
			await this.$store.dispatch('deleteFiles', fileid ? [fileid.toString()] : [])
		},

		async toggleFavorite(fileId) {
			const newState = this.$store.state.files.files[fileId].attributes.favorite ? 0 : 1
			await this.$store.dispatch('toggleFavoriteForFiles', { fileIds: [fileId], favoriteState: newState })
		},

		t,
		n: translatePlural,
	},
}
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
