<!--
 - @copyright Copyright (c) 2022 Louis Chemineau <louis@chmn.me>
 -
 - @author Louis Chemineau <louis@chmn.me>
 -
 - @license AGPL-3.0-or-later
 -
 - This program is free software: you can redistribute it and/or modify
 - it under the terms of the GNU Affero General Public License as
 - published by the Free Software Foundation, either version 3 of the
 - License, or (at your option) any later version.
 -
 - This program is distributed in the hope that it will be useful,
 - but WITHOUT ANY WARRANTY; without even the implied warranty of
 - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 - GNU Affero General Public License for more details.
 -
 - You should have received a copy of the GNU Affero General Public License
 - along with this program. If not, see <http://www.gnu.org/licenses/>.
 -
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
				@refresh="fetchAlbums">
			</HeaderNavigation>

			<CollectionCover :key="collection.basename"
				slot-scope="{collection}"
				:link="`/albums/${collection.basename}`"
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
			key="albumCreationForm"
			:name="t('photos', 'New album')"
			@close="handleAlbumCreateCancel">
			<h2 class="album-creation__heading">
				{{ t('photos', 'New album') }}
			</h2>
			<AlbumForm @done="handleAlbumCreated" 
			@cancel="handleAlbumCreateCancel" />
		</NcModal>

		<PhotosPicker
			:open.sync="showPhotosPicker"
			:blacklist-ids="blacklistIds"
			:destination="destination"
			:name="t('photos', 'Add photos to {albumName}', {albumName: destination})"
			:allowempty="allowEmpty"
			@closed="handlePickerClose"
			@files-picked="handleFilesPicked" />
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Plus from 'vue-material-design-icons/Plus.vue'
import FolderMultipleImage from 'vue-material-design-icons/FolderMultipleImage.vue'
import ExportVariant from 'vue-material-design-icons/ExportVariant.vue'

import { getCurrentUser } from '@nextcloud/auth'
import { translate, translatePlural } from '@nextcloud/l10n'
import { generateUrl } from '@nextcloud/router'
import { NcModal, NcButton, NcEmptyContent, useIsSmallMobile } from '@nextcloud/vue'

import CollectionAdd from '../components/Collection/CollectionAdd.vue'
import CollectionCover from '../components/Collection/CollectionCover.vue'
import CollectionsList from '../components/Collection/CollectionsList.vue'
import HeaderNavigation from '../components/HeaderNavigation.vue'
import AlbumForm from '../components/Albums/AlbumForm.vue'
import PhotosPicker from '../components/PhotosPicker.vue'
import FetchCollectionsMixin from '../mixins/FetchCollectionsMixin.js'


export default {
	name: 'Albums',
	components: {
		Plus,
		FolderMultipleImage,
		NcModal,
		NcButton,
		NcEmptyContent,
		CollectionsList,
		CollectionAdd,
		CollectionCover,
		HeaderNavigation,
		AlbumForm,
		PhotosPicker,
		ExportVariant
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

		handleAlbumCreateCancel() {
			this.showAlbumCreationForm = false
			this.createdAlbum = null
		},

		handleAlbumCreated({ album }) {
			this.showAlbumCreationForm = false
			this.destination = album.basename
			this.collection = album.filename
			this.showPhotosPicker = true
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
	padding: calc(var(--default-grid-baseline) * 4);
	margin-bottom: 0px;
	padding-bottom: 0px;
}
</style>
