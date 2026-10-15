<!--
  - SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<div class="album-container">
		<CollectionContent
			ref="collectionContent"
			:collection="album"
			:collectionFileIds="albumFileIds"
			:loading="loadingCollection || loadingCollectionFiles"
			:error="errorFetchingCollection || errorFetchingCollectionFiles">
			<!-- Header -->
			<template #header="{ selectedFileIds, resetSelection }">
				<HeaderNavigation
					key="navigation"
					:class="{ 'photos-navigation--uploading': uploader.queue?.length > 0 }"
					:loading="loadingCollectionFiles"
					:params="{ albumName }"
					:path="'/' + albumName"
					:title="albumName"
					@refresh="fetchAlbumContent">
					<template #subtitle>
						<div
							v-if="album !== undefined && album.attributes.nbItems !== 0"
							class="album__details">
							{{ n('photos', '%n item', '%n photos and videos', album.attributes.nbItems) }}
							⸱ {{ t('photos', 'Created') }} {{ album.attributes.date }}
						</div>
					</template>

					<template
						v-if="selectedFileIds.length > 0"
						#bulk>
						<span class="photos-navigation__bulk-operations__selected">
							<span class="icon-minus"
								@click="resetSelection" />
							<span class="selected__count">
								{{ selectedFileIds.length }} {{ t('photos', 'selected') }}
							</span>
						</span>

						<NcActions
							:forceName="true"
							:forceMenu="false"
							:inline="inlineActions">
							<NcActionButton
								:aria-label="t('photos', 'Unselect all')"
								data-cy-header-action="unselect-all"
								@click="resetSelection">
								<template #icon>
									<Close />
								</template>
								{{ t('photos', 'Unselect all') }}
							</NcActionButton>

							<NcActionButton
								v-if="removableSelectedFiles.length !== 0"
								:aria-label="t('photos', 'Remove selection')"
								data-cy-header-action="remove-selection"
								@click="handleRemoveFilesFromAlbum(removableSelectedFiles)">
								<template #icon>
									<DeleteOutline />
								</template>
								{{ t('photos', 'Remove selection from album') }}
							</NcActionButton>

							<ActionFavoriteButton :selectedFileIds="selectedFileIds" />
						</NcActions>
					</template>

					<template
						v-if="album !== undefined && selectedFileIds.length === 0"
						#right>
						<NcUploadPicker
							v-if="selectedFileIds.length === 0 && uploadFolder !== undefined"
							:accept="allowedMimes"
							:content="uploadDestinationContent"
							:destination="uploadFolder"
							:label="t('photos', 'Upload')"
							:multiple="true"
							@upload:finished="onUploadFinished"
							@finished="onUploadsFinished" />

						<NcButton
							variant="primary"
							@click="showAddPhotosModal = true">
							<template #icon>
								<Plus :size="20" />
							</template>
							{{ t('photos', 'Add') }}
						</NcButton>

						<NcActions
							:aria-label="t('photos', 'Change tile size')"
							variant="tertiary"
							data-cy-header-action="density">
							<template #icon>
								<MagnifyMinusOutline
									v-if="gridDensity === 'large'"
									:size="20" />
								<MagnifyPlusOutline
									v-else
									:size="20" />
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
							:aria-label="t('photos', 'Enable squared photos view')"
							variant="tertiary"
							@click="toggleCroppedLayout(!croppedLayout)">
							<template #icon>
								<ViewGridOutline v-if="croppedLayout" />
								<ViewDashboardOutline v-else />
							</template>
						</NcButton>
					</template>

					<template
						v-if="album !== undefined && selectedFileIds.length === 0"
						#buttons>

						<NcActions :aria-label="t('photos', 'Open actions menu')">
							<NcActionButton
								:closeAfterClick="true"
								:aria-label="t('photos', 'Edit album details')"
								@click="showEditAlbumForm = true">
								{{ t('photos', 'Rename album') }}
								<template #icon>
									<PencilOutline />
								</template>
							</NcActionButton>

							<NcActionButton
								v-if="sharingEnabled"
								:closeAfterClick="true"
								:aria-label="t('photos', 'Share album')"
								@click="showManageCollaboratorView = true">
								{{ t('photos', 'Share album') }}
								<template #icon>
									<ShareVariantOutline />
								</template>
							</NcActionButton>

							<NcActionButton
								:closeAfterClick="true"
								@click="handleDeleteAlbum">
								{{ t('photos', 'Delete album') }}
								<template #icon>
									<DeleteOutline />
								</template>
							</NcActionButton>
						</NcActions>
					</template>
				</HeaderNavigation>
			</template>

			<!-- No content -->
			<template #emptyContent>
				<NcEmptyContent
					v-if="album !== undefined && album.attributes.nbItems === 0 && !(loadingCollectionFiles || loadingCollection)"
					:name="t('photos', 'All that is missing are your photos')"
					:description="t('photos', 'You can add as many photos and videos as you like. A photo can also belong to more than one album.')"
					class="album__empty">
					<template #icon>
						<ImagePlusOutline />
					</template>

					<template #action>
						<NcButton
							class="album__empty__button"
							variant="primary"
							:aria-label="t('photos', 'Add photos to this album')"
							@click="showAddPhotosModal = true">
							<template #icon>
								<Plus />
							</template>
							{{ t('photos', "Add") }}
						</NcButton>
					</template>
				</NcEmptyContent>
			</template>
		</CollectionContent>

		<PhotosPicker
			v-if="album !== undefined"
			v-model:open="showAddPhotosModal"
			:blacklistIds="albumFileIds"
			:destination="album.basename"
			:name="t('photos', 'Add photos to {albumName}', { albumName: albumName }, undefined, { escape: false, sanitize: false })"
			@files-picked="handleFilesPicked" />

		<NcModal
			v-if="showManageCollaboratorView && album !== undefined"
			id="album-share"
			:lightBackdrop="true"
			@close="showManageCollaboratorView = false">
			<AlbumShare
				:albumName="album.basename"
				:collaborators="album.attributes.collaborators">
				<template #default="{ collaborators }">
					<NcButton
						:aria-label="t('photos', 'Save collaborators for this album.')"
						variant="primary"
						:disabled="loadingAddCollaborators"
						@click="handleSetCollaborators(collaborators)">
						<template #icon>
							<NcLoadingIcon v-if="loadingAddCollaborators" />
						</template>
						{{ t('photos', 'Save') }}
					</NcButton>
				</template>
			</AlbumShare>
		</NcModal>

		<NcDialog
			v-if="showEditAlbumForm"
			:name="t('photos', 'Edit album details')"
			closeOnClickOutside
			size="normal"
			@closing="showEditAlbumForm = false">
			<AlbumForm
				:album="album"
				@done="redirectToNewName"
				@closing="showEditAlbumForm = false" />
		</NcDialog>
	</div>
</template>

<script setup lang="ts">
import type { Folder, Node } from '@nextcloud/files'
import type { IUpload } from '@nextcloud/files/upload'
import type { Collection } from '../services/collectionFetcher.ts'
import type { Collaborator } from '../store/albums.ts'
import type { PhotoFile } from '../store/files.ts'

import { FileType } from '@nextcloud/files'
import { defaultRootPath } from '@nextcloud/files/dav'
import { getUploader } from '@nextcloud/files/upload'
import { n, t } from '@nextcloud/l10n'
import { computed, onMounted, onUnmounted, ref, useTemplateRef, watch } from 'vue'
import { useRouter } from 'vue-router'
import NcActionButton from '@nextcloud/vue/components/NcActionButton'
import NcActions from '@nextcloud/vue/components/NcActions'
import NcActionRadio from '@nextcloud/vue/components/NcActionRadio'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcDialog from '@nextcloud/vue/components/NcDialog'
import NcEmptyContent from '@nextcloud/vue/components/NcEmptyContent'
import NcLoadingIcon from '@nextcloud/vue/components/NcLoadingIcon'
import NcModal from '@nextcloud/vue/components/NcModal'
import NcUploadPicker from '@nextcloud/vue/components/NcUploadPicker'
import Close from 'vue-material-design-icons/Close.vue'
import ImagePlusOutline from 'vue-material-design-icons/ImagePlusOutline.vue'
import MagnifyMinusOutline from 'vue-material-design-icons/MagnifyMinusOutline.vue'
import MagnifyPlusOutline from 'vue-material-design-icons/MagnifyPlusOutline.vue'
import PencilOutline from 'vue-material-design-icons/PencilOutline.vue'
import Plus from 'vue-material-design-icons/Plus.vue'
import ShareVariantOutline from 'vue-material-design-icons/ShareVariantOutline.vue'
import DeleteOutline from 'vue-material-design-icons/TrashCanOutline.vue'
import ViewDashboardOutline from 'vue-material-design-icons/ViewDashboardOutline.vue'
import ViewGridOutline from 'vue-material-design-icons/ViewGridOutline.vue'

import ActionFavoriteButton from '../components/Actions/ActionFavoriteButton.vue'
import AlbumForm from '../components/Albums/AlbumForm.vue'
import AlbumShare from '../components/Albums/AlbumShare.vue'
import CollectionContent from '../components/Collection/CollectionContent.vue'
import HeaderNavigation from '../components/HeaderNavigation.vue'
import PhotosPicker from '../components/PhotosPicker.vue'
import { useFetchCollectionContent } from '../composables/useFetchCollectionContent.ts'
import { useGridDensity } from '../composables/useGridDensity.ts'
import { allMimes as allowedMimes } from '../services/AllowedMimes.ts'
import { fetchFile } from '../services/fileFetcher.ts'
import { getFolderContent } from '../services/FolderContent.ts'
import { logger } from '../services/logger.ts'
import { albumFilesExtraProps, albumsExtraProps, useAlbumsStore } from '../store/albums.ts'
import { useCollectionsStore } from '../store/collections.ts'
import { useFilesStore } from '../store/files.ts'
import { useUserConfigStore } from '../store/userConfig.ts'

const props = withDefaults(defineProps<{
	albumName?: string
}>(), {
	albumName: '/',
})

const router = useRouter()
const albumsStore = useAlbumsStore()
const collectionsStore = useCollectionsStore()
const filesStore = useFilesStore()
const userConfigStore = useUserConfigStore()
const {
	fetchCollection,
	fetchCollectionFiles,
	loadingCollection,
	loadingCollectionFiles,
	errorFetchingCollection,
	errorFetchingCollectionFiles,
} = useFetchCollectionContent()
const {
	gridDensity,
	setGridDensity,
} = useGridDensity()

const collectionContent = useTemplateRef<InstanceType<typeof CollectionContent>>('collectionContent')

const showAddPhotosModal = ref(false)
const showManageCollaboratorView = ref(false)
const showEditAlbumForm = ref(false)
const loadingAddCollaborators = ref(false)
const uploader = getUploader()
const uploadFolder = ref<Folder | undefined>()
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 0)
const pendingUploadSources = new Set<string>()

const album = computed(() => albumsStore.getAlbum(props.albumName))

const albumFileIds = computed(() => albumsStore.getAlbumFiles(props.albumName))

const sharingEnabled = computed(() => OC.Share !== undefined)

const albumFileName = computed(() => albumsStore.getAlbumName(props.albumName))

const removableSelectedFiles = computed(() => (collectionContent.value?.selectedFileIds ?? [])
	.map((fileId) => filesStore.files[fileId])
	.filter((file): file is PhotoFile => file !== undefined)
	.filter((file) => file.attributes['photos-album-file-origin'] !== 'filters')
	.map((file) => file.fileid.toString()))

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

const croppedLayout = computed(() => userConfigStore.croppedLayout)

const photosLocation = computed(() => userConfigStore.photosLocation || '/')

const uploadFolderPath = computed(() => {
	const location = photosLocation.value
		.replace(/^\/+/, '')
		.replace(/\/+$/, '')

	if (location === '') {
		return defaultRootPath
	}

	return `${defaultRootPath.replace(/\/+$/, '')}/${location}`
})

function handleResize(): void {
	windowWidth.value = window.innerWidth
}

async function fetchAlbum(): Promise<void> {
	await fetchCollection(
		albumFileName.value,
		albumsExtraProps,
	)
}

async function fetchAlbumContent(): Promise<void> {
	await fetchCollectionFiles(
		albumFileName.value,
		albumFilesExtraProps,
	)
}

async function handleAlbumUpdate({ album: updatedAlbum, changes = [] }: { album: Collection, changes?: string[] }): Promise<void> {
	showEditAlbumForm.value = false

	if (changes.includes('name')) {
		await router.push(`/albums/${updatedAlbum.basename}`)
	}

	if (changes.includes('filters')) {
		fetchAlbumContent()
	}
}

function redirectToNewName(payload: { album: Collection, changes?: string[] }): Promise<void> {
	return handleAlbumUpdate(payload)
}

async function handleFilesPicked(fileIds: string[]): Promise<void> {
	showAddPhotosModal.value = false

	if (album.value === undefined) {
		return
	}

	await collectionsStore.addFilesToCollection(
		album.value.root + album.value.path,
		fileIds,
	)

	// Re-fetch album content to have the proper filenames.
	await fetchAlbumContent()
}

async function handleRemoveFilesFromAlbum(fileIds: string[]): Promise<void> {
	if (album.value === undefined) {
		return
	}

	collectionContent.value?.onUncheckFiles(fileIds)

	await collectionsStore.removeFilesFromCollection(
		album.value.root + album.value.path,
		fileIds,
	)
}

async function handleDeleteAlbum(): Promise<void> {
	if (album.value === undefined) {
		return
	}

	const isDeleted = await collectionsStore.deleteCollection(
		album.value.root + album.value.path,
	)

	if (isDeleted) {
		router.push('/albums')
	}
}

async function handleSetCollaborators(collaborators: Collaborator[]): Promise<void> {
	if (album.value === undefined) {
		return
	}

	try {
		loadingAddCollaborators.value = true
		showManageCollaboratorView.value = false

		await collectionsStore.updateCollection(
			album.value.root + album.value.path,
			{ collaborators },
		)
	} catch (error) {
		logger.error('Error while setting album collaborators', { error })
	} finally {
		loadingAddCollaborators.value = false
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

function collectUploadedFileSources(upload: IUpload): void {
	if (upload.children.length > 0) {
		for (const child of upload.children) {
			collectUploadedFileSources(child)
		}
		return
	}

	if (upload.source) {
		pendingUploadSources.add(upload.source)
	}
}

function onUploadFinished(upload: IUpload): void {
	collectUploadedFileSources(upload)
}

async function onUploadsFinished(): Promise<void> {
	if (album.value === undefined) {
		pendingUploadSources.clear()
		return
	}

	const sources = [...pendingUploadSources]

	// Direkt leeren, damit der nächste Upload-Batch sauber beginnt.
	pendingUploadSources.clear()

	if (sources.length === 0) {
		return
	}

	try {
		const nodes = await Promise.all(
			sources.map(async (source) => {
				try {
					const davMarker = '/remote.php/dav'
					const davIndex = source.indexOf(davMarker)

					if (davIndex === -1) {
						logger.error('Could not extract DAV path from uploaded file', {
							source,
						})
						return undefined
					}

					const davPath = decodeURI(
						source.slice(davIndex + davMarker.length),
					)

					logger.debug('Resolving uploaded file', {
						source,
						davPath,
					})

					const uploadedNode = await fetchFile(davPath)

					if (
						!uploadedNode?.id
						|| uploadedNode.type !== FileType.File
					) {
						logger.debug('Ignoring uploaded non-file node', {
							source,
							davPath,
							uploadedNode,
						})
						return undefined
					}

					return uploadedNode
				} catch (error) {
					logger.error('Could not resolve uploaded file', {
						error,
						source,
					})
					return undefined
				}
			}),
		)

		const nodesById = new Map<string, Node>()

		for (const node of nodes) {
			if (node?.id) {
				nodesById.set(String(node.id), node)
			}
		}

		if (nodesById.size === 0) {
			return
		}

		await fetchAlbumContent()

		const existingFileIds = new Set(albumFileIds.value)

		const newNodes = [...nodesById.values()].filter(
			(node) => !existingFileIds.has(String(node.id)),
		)

		if (newNodes.length === 0) {
			logger.debug('Uploaded files are already part of the album')
			return
		}

		const fileIds = newNodes.map((node) => String(node.id))

		logger.debug('Adding uploaded files to album', {
			album: album.value.basename,
			fileIds,
		})

		filesStore.appendFiles(newNodes)

		await collectionsStore.addFilesToCollection(
			album.value.root + album.value.path,
			fileIds,
		)

		await fetchAlbumContent()
		await fetchAlbum()
	} catch (error) {
		logger.error('Failed to add uploaded files to album', {
			error,
			sources,
		})
	}
}

watch(photosLocation, () => {
	fetchUploadFolder()
})

onMounted(async () => {
	fetchAlbum()
	fetchAlbumContent()
	await fetchUploadFolder()

	window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
	window.removeEventListener('resize', handleResize)
})
</script>

<style lang="scss" scoped>
.album-container {
	height: 100%;

	:deep(.collection) {
		height: 100%;
	}

	&__filters {
		display: flex;
		gap: 8px;
	}
}

.album {
	&__title {
		width: 100%;
	}

	&__name {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	&__details {
		color: var(--color-text-lighter);
	}
}

.photos-navigation {
	position: relative;

	// Add space at the bottom for the progress bar.
	&--uploading {
		margin-bottom: 30px;
	}

	:deep(.upload-picker) {
		.upload-picker__progress {
			position: absolute;
			bottom: -30px;
			inset-inline-start: 64px;
			margin: 0;
		}

		.upload-picker__cancel {
			position: absolute;
			bottom: -24px;
			inset-inline-end: 50px;
		}
	}
}
</style>
