<!--
  - SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<div class="album-container">
		<AlbumHero
			v-if="album !== undefined"
			:coverFileId="coverFileId"
			:blurhash="coverBlurhash"
			:title="albumName"
			:subtitle="albumSubtitle" />

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
							<span class="icon-minus" />
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
						v-if="album !== undefined"
						#right>
						<UploadPicker
							:accept="allowedMimes"
							:context="uploadContext"
							:destination="albumAsFolder"
							:root="uploadContext.root"
							:multiple="true"
							:noMenu="true"
							@uploaded="onUpload" />

						<NcButton
							variant="primary"
							@click="showAddPhotosModal = true">
							<template #icon>
								<Plus :size="20" />
							</template>
							{{ t('photos', 'Add') }}
						</NcButton>
					</template>

					<template
						v-if="album !== undefined"
						#buttons>
						<NcButton
							:aria-label="t('photos', 'Enable squared photos view')"
							variant="tertiary"
							@click="toggleCroppedLayout(!croppedLayout)">
							<template #icon>
								<ViewGridOutline v-if="croppedLayout" />
								<ViewDashboardOutline v-else />
							</template>
						</NcButton>

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
			<template #empty-content>
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
							{{ t('photos', 'Add') }}
						</NcButton>
					</template>
				</NcEmptyContent>
			</template>
		</CollectionContent>

		<PhotosPicker
			v-if="album !== undefined"
			:open.sync="showAddPhotosModal"
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

<script lang="ts">
import type { Album } from '../store/albums.js'
import type { PhotoFile } from '../store/files.ts'

import { getCurrentUser } from '@nextcloud/auth'
import { Folder, davParsePermissions } from '@nextcloud/files'
import { translate, translatePlural } from '@nextcloud/l10n'
import { UploadPicker, getUploader } from '@nextcloud/upload'
import { useIsMobile } from '@nextcloud/vue/composables/useIsMobile'
import NcActionButton from '@nextcloud/vue/components/NcActionButton'
import NcActions from '@nextcloud/vue/components/NcActions'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcDialog from '@nextcloud/vue/components/NcDialog'
import NcEmptyContent from '@nextcloud/vue/components/NcEmptyContent'
import NcLoadingIcon from '@nextcloud/vue/components/NcLoadingIcon'
import NcModal from '@nextcloud/vue/components/NcModal'
import debounce from 'debounce'
import Close from 'vue-material-design-icons/Close.vue'
import ImagePlusOutline from 'vue-material-design-icons/ImagePlusOutline.vue'
import PencilOutline from 'vue-material-design-icons/PencilOutline.vue'
import Plus from 'vue-material-design-icons/Plus.vue'
import ShareVariantOutline from 'vue-material-design-icons/ShareVariantOutline.vue'
import DeleteOutline from 'vue-material-design-icons/TrashCanOutline.vue'
import ViewDashboardOutline from 'vue-material-design-icons/ViewDashboardOutline.vue'
import ViewGridOutline from 'vue-material-design-icons/ViewGridOutline.vue'

import ActionFavoriteButton from '../components/Actions/ActionFavoriteButton.vue'
import AlbumHero from '../components/AlbumHero.vue'
import AlbumForm from '../components/Albums/AlbumForm.vue'
import AlbumShare from '../components/Albums/AlbumShare.vue'
import CollectionContent from '../components/Collection/CollectionContent.vue'
import HeaderNavigation from '../components/HeaderNavigation.vue'
import PhotosPicker from '../components/PhotosPicker.vue'
import FetchCollectionContentMixin from '../mixins/FetchCollectionContentMixin.js'
import FetchFilesMixin from '../mixins/FetchFilesMixin.js'
import allowedMimes from '../services/AllowedMimes.ts'
import { logger } from '../services/logger.ts'
import { albumFilesExtraProps, albumsExtraProps, useAlbumsStore } from '../store/albums.ts'
import { useCollectionsStore } from '../store/collections.ts'
import { useFilesStore } from '../store/files.ts'
import { pickAlbumCover } from '../utils/albumCover.ts'

export default {
	name: 'AlbumContent',

	components: {
		ActionFavoriteButton,
		AlbumForm,
		AlbumHero,
		AlbumShare,
		Close,
		CollectionContent,
		DeleteOutline,
		HeaderNavigation,
		ImagePlusOutline,
		NcActionButton,
		NcActions,
		NcButton,
		NcDialog,
		NcEmptyContent,
		NcLoadingIcon,
		NcModal,
		PencilOutline,
		PhotosPicker,
		Plus,
		ShareVariantOutline,
		UploadPicker,
		ViewDashboardOutline,
		ViewGridOutline,
	},

	mixins: [
		FetchCollectionContentMixin,
		FetchFilesMixin,
	],

	props: {
		albumName: {
			type: String,
			default: '/',
		},
	},

	setup() {
		const isMobile = useIsMobile()

		return {
			albumsStore: useAlbumsStore(),
			collectionsStore: useCollectionsStore(),
			filesStore: useFilesStore(),
			isMobile,
		}
	},

	data() {
		return {
			showAddPhotosModal: false,
			showManageCollaboratorView: false,
			showEditAlbumForm: false,
			loadingAddCollaborators: false,
			allowedMimes,
			uploader: getUploader(),
			windowWidth: typeof window !== 'undefined' ? window.innerWidth : 0,
		}
	},

	computed: {
		album(): Album | undefined {
			return this.albumsStore.getAlbum(this.albumName)
		},

		albumFileIds(): string[] {
			return this.albumsStore.getAlbumFiles(this.albumName)
		},

		sharingEnabled(): boolean {
			return OC.Share !== undefined
		},

		albumFileName(): string {
			return this.albumsStore.getAlbumName(this.albumName)
		},

		albumPhotos(): PhotoFile[] {
			return this.albumFileIds
				.map((fileId) => this.filesStore.files[fileId])
				.filter((file): file is PhotoFile => file !== undefined)
		},

		coverPhoto(): PhotoFile | undefined {
			return pickAlbumCover(
				this.albumPhotos,
				this.album?.attributes['last-photo'] ?? -1,
			)
		},

		coverFileId(): number {
			return this.coverPhoto?.fileid
				?? this.album?.attributes['last-photo']
				?? -1
		},

		coverBlurhash(): string | undefined {
			return this.coverPhoto?.attributes['metadata-blurhash']
		},

		albumSubtitle(): string {
			if (this.album === undefined) {
				return ''
			}

			return [
				this.album.attributes.location,
				translatePlural(
					'photos',
					'%n photo',
					'%n photos',
					this.album.attributes.nbItems,
				),
			].filter((part) => part !== '').join(' · ')
		},

		removableSelectedFiles(): string[] {
			return ((this.$refs.collectionContent?.selectedFileIds ?? []) as string[])
				.map((fileId) => this.filesStore.files[fileId])
				.filter((file): file is PhotoFile => file !== undefined)
				.filter((file) => file.attributes['photos-album-file-origin'] !== 'filters')
				.map((file) => file.fileid.toString())
		},

		inlineActions(): number {
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

		croppedLayout(): boolean {
			return this.$store.state.userConfig.croppedLayout
		},

		uploadContext() {
			return {
				...this.album,
				route: this.$route.name,
				root: `dav/photos/${getCurrentUser()?.uid}/albums`,
			}
		},

		albumAsFolder() {
			if (this.album === undefined) {
				return undefined
			}

			return new Folder({
				...this.album,
				owner: getCurrentUser()?.uid ?? '',
				source: this.album.source ?? '',
				permissions: davParsePermissions(this.album.permissions),
			})
		},
	},

	async mounted() {
		this.fetchAlbum()
		this.fetchAlbumContent()
		window.addEventListener('resize', this.handleResize)
	},

	destroyed() {
		window.removeEventListener('resize', this.handleResize)
	},

	methods: {
		handleResize() {
			this.windowWidth = window.innerWidth
		},

		async fetchAlbum() {
			await this.fetchCollection(
				this.albumFileName,
				albumsExtraProps,
			)
		},

		async fetchAlbumContent() {
			await this.fetchCollectionFiles(
				this.albumFileName,
				albumFilesExtraProps,
			)
		},

		async handleAlbumUpdate({ album, changes }) {
			this.showEditAlbumForm = false

			if (changes.includes('name')) {
				await this.$router.push(`/albums/${album.basename}`)
			}

			if (changes.includes('filters')) {
				this.fetchAlbumContent()
			}
		},

		redirectToNewName(payload) {
			return this.handleAlbumUpdate(payload)
		},

		async handleFilesPicked(fileIds: string[]) {
			this.showAddPhotosModal = false

			await this.collectionsStore.addFilesToCollection(
				this.album?.root + this.album?.path,
				fileIds,
			)

			// Re-fetch album content to have the proper filenames.
			await this.fetchAlbumContent()
		},

		async handleRemoveFilesFromAlbum(fileIds: string[]) {
			this.$refs.collectionContent?.onUncheckFiles(fileIds)

			await this.collectionsStore.removeFilesFromCollection(
				this.album?.root + this.album?.path,
				fileIds,
			)
		},

		async handleDeleteAlbum() {
			const isDeleted = await this.collectionsStore.deleteCollection(
				this.album?.root + this.album?.path,
			)

			if (isDeleted) {
				this.$router.push('/albums')
			}
		},

		async handleSetCollaborators(collaborators) {
			try {
				this.loadingAddCollaborators = true
				this.showManageCollaboratorView = false

				await this.collectionsStore.updateCollection(
					this.album?.root + this.album?.path,
					{ collaborators },
				)
			} catch (error) {
				logger.error('Error while setting album collaborators', { error })
			} finally {
				this.loadingAddCollaborators = false
			}
		},

		async handleFiltersChange(filters) {
			await this.collectionsStore.updateCollection(
				this.album?.root + this.album?.path,
				{ filters },
			)

			this.fetchAlbumContent()
		},

		toggleCroppedLayout(value: boolean) {
			this.$store.dispatch('updateUserConfig', {
				key: 'croppedLayout',
				value,
			})
		},

		onUpload: debounce(function() {
			this.fetchAlbumContent()
		}, 300),

		t: translate,
		n: translatePlural,
	},
}
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
</style>
