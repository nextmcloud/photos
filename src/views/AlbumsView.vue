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
					:rootTitle="t('photos', 'Albums')"
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
					parentRoute="/albums"
					:collectionName="collection.basename"
					:altImg="t('photos', 'Cover photo for album {albumName}', { albumName: collection.basename })"
					:coverUrl="coverUrl(collection.attributes['last-photo'])">
					<template #default>
						<span class="album__name">
							{{ collection.basename }}
							<ExportVariant v-if="isShared(collection)" :size="20" />
						</span>
					</template>

					<template #subtitle>
						<div class="album__details">
							{{ n('photos', '%n element', '%n elements', collection.attributes.nbItems) }} ⸱ {{ t('photos', 'Created') }} {{ collection.attributes.date }}
						</div>
					</template>
				</CollectionCover>
			</template>

			<template #empty-collections-list>
				<div class="albums__empty-content">
					<div class="empty-collection-content">
						<div class="empty-content__wrapper">
							<div class="empty-content__image empty-collection-content__image" />
						</div>
						<div class="empty-content__name">
							{{ t('photos', 'Create Albums for your Photos and Videos') }}
						</div>
						<div class="empty-content__action">
							{{ t('photos', 'You can organize all your photos in as many albums as you like. You have not created an album yet.') }}
						</div>
						<NcButton
							:aria-label="isMobile ? t('photos', 'New album') : undefined"
							variant="primary"
							@click="showAlbumCreationForm = true">
							<template #icon>
								<Plus :size="20" />
							</template>
							{{ t('photos', 'New album') }}
						</NcButton>
					</div>
				</div>
			</template>
		</CollectionsList>

		<NcModal
			v-if="showAlbumCreationForm"
			key="albumCreationForm"
			labelId="new-album-form"
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
import NcModal from '@nextcloud/vue/components/NcModal'
import ExportVariant from 'vue-material-design-icons/ExportVariant.vue'
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
		NcModal,
		NcButton,
		CollectionsList,
		CollectionCover,
		HeaderNavigation,
		AlbumForm,
		ExportVariant,
		PhotosPicker,
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
			const albums = this.albumsStore.albums

			if (!albums || typeof albums !== 'object') {
				return []
			}

			const list = Array.isArray(albums)
				? [...albums]
				: Object.values(albums)

			return list.sort((a, b) =>
				a.basename.localeCompare(b.basename, 'de', { sensitivity: 'base' })
			)
		},
	},

	async beforeMount() {
		this.fetchAlbums()
	},

	methods: {
		coverUrl(lastPhoto: number): string {
			if (lastPhoto === -1) {
				return ''
			}

			return generateUrl(`/apps/photos/api/v1/preview/${lastPhoto}?x=${512}&y=${512}`)
		},

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
		font-weight: bold;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 1.25rem;
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
