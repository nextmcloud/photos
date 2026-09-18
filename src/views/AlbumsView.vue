<!--
  - SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<div>
		<CollectionsList
			:collections="albums"
			:loading="loadingCollections"
			:error="errorFetchingCollections"
			class="albums-list">
			<template #header>
				<HeaderNavigation
					key="navigation"
					:loading="loadingCollections"
					:title="t('photos', 'Albums')"
					:root-title="t('photos', 'Albums')"
					@refresh="fetchAlbums">
					<NcButton
						:aria-label="isMobile ? t('photos', 'Create new album') : undefined"
						variant="primary"
						@click="showAlbumCreationForm = true">
						<template #icon>
							<Plus :size="20" />
						</template>
						<template v-if="!isMobile" #default>
							{{ t('photos', 'Create new album') }}
						</template>
					</NcButton>
				</HeaderNavigation>
			</template>

			<template #default="{ collection }">
				<CollectionCover
					:key="collection.basename"
					parent-route="/albums"
					:collection-name="collection.basename"
					:alt-img="t('photos', 'Cover photo for album {albumName}', { albumName: collection.basename })"
					:cover-url="collection.attributes['last-photo'] | coverUrl">
					<template #default>
						<span class="album__name">
							{{ collection.basename }}
						</span>
					</template>

					<template #subtitle>
						<div class="album__details">
							{{ collection.attributes.date }} ⸱ {{ n('photos', '%n item', '%n photos and videos', collection.attributes.nbItems) }}
						</div>
					</template>
				</CollectionCover>
			</template>

			<template #empty-collections-list>
				<NcEmptyContent :name="t('photos', 'There is no album yet!')">
					<template #icon>
						<ImageMultipleOutline />
					</template>
				</NcEmptyContent>
			</template>
		</CollectionsList>

		<NcModal
			v-if="showAlbumCreationForm"
			key="albumCreationForm"
			label-id="new-album-form"
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
import { translate, translatePlural } from '@nextcloud/l10n'
import { generateUrl } from '@nextcloud/router'
import { useIsSmallMobile } from '@nextcloud/vue/composables/useIsMobile'
import { defineComponent } from 'vue'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcEmptyContent from '@nextcloud/vue/components/NcEmptyContent'
import NcModal from '@nextcloud/vue/components/NcModal'
import ImageMultipleOutline from 'vue-material-design-icons/ImageMultipleOutline.vue'
import Plus from 'vue-material-design-icons/Plus.vue'
import AlbumForm from '../components/Albums/AlbumForm.vue'
import CollectionCover from '../components/Collection/CollectionCover.vue'
import CollectionsList from '../components/Collection/CollectionsList.vue'
import HeaderNavigation from '../components/HeaderNavigation.vue'
import PhotosPicker from '../components/PhotosPicker.vue'
import FetchCollectionsMixin from '../mixins/FetchCollectionsMixin.js'
import { albumsExtraProps, albumsPrefix } from '../store/albums.js'
import { useAlbumsStore } from '../store/albums.ts'
import { useCollectionsStore } from '../store/collections.ts'

export default defineComponent({
	name: 'AlbumsView',
	components: {
		Plus,
		ImageMultipleOutline,
		NcModal,
		NcButton,
		NcEmptyContent,
		CollectionsList,
		CollectionCover,
		HeaderNavigation,
		AlbumForm,
		PhotosPicker,
	},

	filters: {
		coverUrl(lastPhoto: number): string {
			if (lastPhoto === -1) {
				return ''
			}

			return generateUrl(`/apps/photos/api/v1/preview/${lastPhoto}?x=${512}&y=${512}`)
		},
	},

	mixins: [FetchCollectionsMixin],

	setup() {
		const isMobile = useIsSmallMobile()
		return {
			isMobile,
			albumsStore: useAlbumsStore(),
			collectionsStore: useCollectionsStore(),
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
		albums() {
			return this.albumsStore.albums
		},
	},

	async beforeMount() {
		this.fetchAlbums()
	},

	methods: {		
		fetchAlbums() {
			this.fetchCollections(
				albumsPrefix,
				albumsExtraProps,
			)
		},

		handleAlbumCreated({ album }) {
			this.showAlbumCreationForm = false
			this.destination = album.basename
			this.collection = album.root + album.path
			this.showPhotosPicker = true
		},

		handleAlbumCreateCancel() {
			this.showAlbumCreationForm = false
			this.createdAlbum = null
		},

		handlePickerClose() {
			this.$router.push(`/albums/${this.destination}`)
		},

		async handleFilesPicked(fileIds: string[]) {
			await this.collectionsStore.addFilesToCollection(
				this.collection,
				fileIds,
			)

			this.showPhotosPicker = false
			this.$router.push(`/albums/${this.destination}`)
		},

		async handleDeleteAlbum() {
			await this.collectionsStore.deleteCollection(this.collection)

			this.$router.push('/albums')
		},

		/**
		 * @param {object} album
		 * @return {boolean}
		 */
		isShared(album) {
			if (album.attributes.collaborators.length === 0) {
				return false
			}
			return true
		},

		t: translate,
		n: translatePlural,
	},
})
</script>

<style lang="scss" scoped>
.albums-list {
	display: flex;
	flex-direction: column;

	.album__name {
		font-weight: normal;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 20px;
		color: var(--color-main-text);
	}
}

.album-creation__heading {
	padding: calc(var(--default-grid-baseline) * 4);
	margin-bottom: 0px;
	padding-bottom: 0px;
}
</style>
