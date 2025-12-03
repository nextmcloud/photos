<!--
  - SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<div>
		<CollectionsList :collections="albums"
			:loading="loadingCollections"
			:error="errorFetchingCollections"
			class="albums-list">
			<HeaderNavigation key="navigation"
				slot="header"
				:loading="loadingCollections"
				:title="t('photos', 'Albums')"
				:root-title="t('photos', 'Albums')"
				@refresh="fetchAlbums" />
			<!--
				<NcButton :aria-label="isMobile ? t('photos', 'New album') : undefined"
					@click="showAlbumCreationForm = true">
					<template #icon>
						<Plus :size="20" />
					</template>
					<template v-if="!isMobile" #default>
						{{ t('photos', 'New album') }}
					</template>
				</NcButton>
			</HeaderNavigation>
			-->

			<CollectionCover :key="collection.basename"
				slot-scope="{collection}"
				parent-route="/albums"
				:collection-name="collection.basename"
				:alt-img="t('photos', 'Cover photo for album {albumName}', { albumName: collection.basename })"
				:cover-url="collection.lastPhoto | coverUrl">
				<span class="album__name">
					{{ collection.basename }}
					<ExportVariant v-if="isShared(collection)" :size="20" />
				</span>

				<div slot="subtitle" class="album__details">
					{{ n('photos', '%n element', '%n elements', collection.nbItems,) }} ⸱ {{ t('photos', 'Created') }} {{ collection.date }}
				</div>
			</CollectionCover>

			<CollectionAdd slot="collection-add">
				<NcButton :aria-label="t('photos', 'Create new album')"
					@click="showAlbumCreationForm = true">
					<template #icon>
						<Plus :size="20" />
					</template>
					<template #default>
						{{ t('photos', 'Create new album') }}
					</template>
				</NcButton>
			</CollectionAdd>

			<NcEmptyContent slot="empty-collections-list" :name="t('photos', 'There is no album yet!')">
				<FolderMultipleImage slot="icon" />
			</NcEmptyContent>
		</CollectionsList>

		<NcModal v-if="showAlbumCreationForm"
			@close="handleAlbumCreateCancel"
			key="albumCreationForm"
			:name="t('photos', 'New album')">
			<h2 class="album-creation__heading">
				{{ t('photos', 'New album') }}
			</h2>
			<AlbumForm @done="handleAlbumCreated" @closing="handleAlbumCreateCancel" />
		</NcModal>

		<PhotosPicker :open.sync="showPhotosPicker"
			:blacklist-ids="blacklistIds"
			:destination="destination"
			:name="t('photos', 'Add photos to {albumName}', {albumName: destination})"
			:allowempty="allowEmpty"
			@closed="handlePickerClose"
			@files-picked="handleFilesPicked" />
	</div>
</template>

<script>
import { mapActions } from 'vuex'
import Plus from 'vue-material-design-icons/Plus.vue'
import ExportVariant from 'vue-material-design-icons/ExportVariant.vue'
import FolderMultipleImage from 'vue-material-design-icons/FolderMultipleImage.vue'

import { generateUrl } from '@nextcloud/router'
import { NcModal, NcButton, NcEmptyContent, useIsSmallMobile } from '@nextcloud/vue'
import { translate, translatePlural } from '@nextcloud/l10n'
import { getCurrentUser } from '@nextcloud/auth'

import CollectionsList from '../components/Collection/CollectionsList.vue'
import CollectionAdd from '../components/Collection/CollectionAdd.vue'
import CollectionCover from '../components/Collection/CollectionCover.vue'
import HeaderNavigation from '../components/HeaderNavigation.vue'
import PhotosPicker from '../components/PhotosPicker.vue'
import AlbumForm from '../components/Albums/AlbumForm.vue'
import FetchCollectionsMixin from '../mixins/FetchCollectionsMixin.js'

export default {
	name: 'Albums',
	components: {
		Plus,
		ExportVariant,
		FolderMultipleImage,
		NcModal,
		NcButton,
		NcEmptyContent,
		CollectionsList,
		CollectionAdd,
		CollectionCover,
		HeaderNavigation,
		PhotosPicker,
		AlbumForm,
	},

	filters: {
		/**
		 * @param {string} lastPhoto The album's last photos.
		 */
		coverUrl(lastPhoto) {
			if (lastPhoto === -1) {
				return ''
			}

			return generateUrl(`/apps/photos/api/v1/preview/${lastPhoto}?x=${512}&y=${512}`)
		},
	},

	mixins: [
		FetchCollectionsMixin,
	],

	setup() {
		const isMobile = useIsSmallMobile()
		return {
			isMobile,
		}
	},

	data() {
		return {
			showAlbumCreationForm: false,
			showPhotosPicker: false,
			createdAlbum: null,
			blacklistIds: [],
			destination: '',
			collection: '',
			allowEmpty: true,
		}
	},

	computed: {
		/**
		 * @return {import('../services/Albums').IndexedAlbums}
		 */
		albums() {
			return this.$store.getters.albums
		},
	},

	async beforeMount() {
		this.fetchAlbums()
	},

	methods: {
		...mapActions([
			'addFilesToCollection',
			'deleteCollection',
		]),

		fetchAlbums() {
			this.fetchCollections(
				`/photos/${getCurrentUser()?.uid}/albums`,
				['<nc:location />', '<nc:dateRange />', '<nc:collaborators />']
			)
		},

		handleAlbumCreated({ album }) {
			this.showAlbumCreationForm = false
			// this.$router.push(`albums/${album.basename}`)
			this.destination = album.basename
			this.collection = album.filename
			this.showPhotosPicker = true
		},

		handleAlbumCreateCancel() {
			this.showAlbumCreationForm = false
			this.createdAlbum = null
		},

		handlePickerClose() {
			this.$router.push(`/albums/${this.destination}`)
		},

		async handleFilesPicked(fileIds) {
			// Add picked files
			await this.addFilesToCollection({ collectionFileName: this.collection, fileIdsToAdd: fileIds })
			// Close the PhotosPicker
			this.showPhotosPicker = false
			// Re-fetch album to have the proper collection
			this.$router.push(`/albums/${this.destination}`)
		},

		async handleDeleteAlbum() {
			await this.deleteCollection({ collectionFileName: this.collection })
			this.$router.push('/albums')
		},

		/**
		 * @param {object} album
		 * @return {boolean}
		 */
		isShared(album) {
			if (album.collaborators.length === 0) {
				return false
			}
			return true
		},

		t: translate,
		n: translatePlural,
	},
}
</script>
<style lang="scss" scoped>
.albums-list {
	display: flex;
	flex-direction: column;

	.album__name {
		font-weight: bold;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 1.25rem;
		line-height: 1.5rem;
		color: var(--color-main-text);

		.material-design-icon {
			display: inline-flex;
			vertical-align: text-top;
		}
	}

	.album__details {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
}

.album-creation__heading {
	font-size: 1.5rem;
	height: unset;
	line-height: unset;
	margin-block: 1.5rem 1rem;
	min-height: unset;
	text-align: center;
}
</style>
