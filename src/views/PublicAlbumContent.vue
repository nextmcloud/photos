
<template>
	<div class="album-container">
		<CollectionContent ref="collectionContent"
			:collection="album"
			:collection-file-ids="albumFileIds"
			:allow-selection="false"
			:loading="loadingCollection || loadingCollectionFiles"
			:error="errorFetchingCollection || errorFetchingCollectionFiles">

			<!-- Header -->
			<HeaderNavigation v-if="albumOriginalName !== ''"
				key="navigation"
				slot="header"
				slot-scope="{selectedFileIds}"
				:loading="loadingCollection || loadingCollectionFiles"
				:params="{ token }"
				path="/"
				:root-title="albumOriginalName"
				:title="albumOriginalName"
				@refresh="fetchAlbumContent">

				<div v-if="album !== undefined && album.nbItems !== 0" slot="subtitle" class="album__details">
					{{ n('photos', '%n item', '%n photos and videos', album.nbItems,) }} ⸱ {{ t('photos', 'Created') }} {{ album.date }}
				</div>
			</HeaderNavigation>

			<!-- No content -->
			<NcEmptyContent slot="empty-content"
				:name="t('photos', 'This album does not have any photos or videos yet!')"
				class="album__empty">
				<ImageOff slot="icon" />
			</NcEmptyContent>
		</CollectionContent>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
import { createClient, getPatcher } from 'webdav'

import ImageOff from 'vue-material-design-icons/ImageOff.vue'
import ViewGridOutline from 'vue-material-design-icons/ViewGridOutline.vue'
import ViewDashboardOutline from 'vue-material-design-icons/ViewDashboardOutline.vue'

import axios from '@nextcloud/axios'
import { NcActions, NcButton, NcEmptyContent } from '@nextcloud/vue'
import { generateUrl, generateRemoteUrl } from '@nextcloud/router'
import { translate } from '@nextcloud/l10n'

import CollectionContent from '../components/Collection/CollectionContent.vue'
import HeaderNavigation from '../components/HeaderNavigation.vue'
import FetchCollectionContentMixin from '../mixins/FetchCollectionContentMixin.js'

const publicRootPath = 'dav'

// force our axios
const patcher = getPatcher()
patcher.patch('request', axios)

// init webdav client on default dav endpoint
const remote = generateRemoteUrl(publicRootPath)
const publicRemote = remote

export default {
	name: 'PublicAlbumContent',
	components: {
		ImageOff,
		ViewGridOutline,
		ViewDashboardOutline,
		NcEmptyContent,
		NcActions,
		NcButton,
		CollectionContent,
		HeaderNavigation,
	},

	mixins: [
		FetchCollectionContentMixin,
	],

	props: {
		token: {
			type: String,
			required: true,
		},
	},

	data() {
		return {
			showAddPhotosModal: false,
			loadingCount: 0,
			loadingAddFilesToAlbum: false,
			albumOriginalName: '',
			publicClient: createClient(publicRemote, {
				username: this.token,
				password: null,
			}),
		}
	},

	computed: {
		/**
		 * @return {import('../store/publicAlbums.js').PublicAlbum} The album information for the current albumName.
		 */
		album() {
			return this.$store.getters.getPublicAlbum(this.albumName)
		},

		/**
		 * @return {string} The album's name is the token.
		 */
		albumName() {
			return this.token
		},

		/**
		 * @return {string[]} The list of files for the current albumName.
		 */
		albumFileIds() {
			return this.$store.getters.getPublicAlbumFiles(this.albumName)
		},

		/**
		 * @return {string} The album's filename based on its name. Useful to fetch the location information and content.
		 */
		publicAlbumFileName() {
			return this.$store.getters.getPublicAlbumName(this.albumName)
		},

		isCroppedLayout() {
			return this.croppedLayout
		},
	},

	async beforeMount() {
		await this.fetchAlbumInfo()
		await this.fetchAlbumContent()
	},

	methods: {
		...mapActions([
			'appendFiles',
			'addCollection',
			'addFilesToCollection',
			'removeFilesFromCollection',
		]),

		toggleCroppedLayout({ }) {
			this.croppedLayout = !this.croppedLayout
		},

		async fetchAlbumInfo() {
			const album = await this.fetchCollection(
				`/photospublic/${this.token}`,
				['<nc:location />', '<nc:dateRange />', '<nc:collaborators />', '<nc:original-name />'],
				this.publicClient,
			)

			this.albumOriginalName = album.originalName
		},

		async fetchAlbumContent() {
			await this.fetchCollectionFiles(
				`/photospublic/${this.token}`,
				['<nc:location />', '<nc:dateRange />', '<nc:collaborators />', '<nc:original-name />'],
				this.publicClient,
				[
					file => ({
						...file,
						// Use custom preview URL to avoid authentication prompt
						previewUrl: generateUrl(`/apps/photos/api/v1/publicPreview/${file.fileid}?x=2048&y=2048&token=${this.token}`),
						// Disable use of generic file previews for public albums - for older versions of the Viewer app
						hasPreview: false,
					}),
				]
			)
		},

		t: translate,
	},
}
</script>
<style lang="scss" scoped>
.album-container {
	height: 100%;

	:deep(.collection) {
		height: 100%;
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

	&__location {
		margin-left: -4px;
		display: flex;
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
			left: 64px;
			margin: 0;
		}
		.upload-picker__cancel {
			position: absolute;
			bottom: -24px;
			right: 50px;
		}
	}
}
</style>
