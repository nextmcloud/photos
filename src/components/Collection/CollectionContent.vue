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
	<!-- Errors handlers-->
	<NcEmptyContent v-if="(collection === undefined && !loading) || error === 404"
		class="empty-content-with-illustration"
		:name="t('photos', 'This collection does not exist')">
		<FolderMultipleImage slot="icon" />
	</NcEmptyContent>
	<NcEmptyContent v-else-if="error" :name="t('photos', 'An error occurred')">
		<AlertCircle slot="icon" />
	</NcEmptyContent>

	<div v-else class="collection">
		<!-- Header -->
		<slot class="collection__header"
			name="header"
			:selected-file-ids="selectedFileIds"
			:reset-selection="resetSelection" />

		<!-- No content -->
		<slot v-if="sortedCollectionFileIds.length === 0 && !loading" name="empty-content" />

		<!-- Media list -->
		<FilesListViewer v-if="collection !== undefined"
			:container-element="appContent"
			class="timeline__file-list"
			:file-ids-by-section="collectionFileIdsByMonth"
			:sections="collectionMonthsList"
			:loading="loading"
			:base-height="isMobile ? 120 : 200"
			:empty-message="t('photos', 'No photos or videos in here')">
			<template slot-scope="{file, isHeader, distance}">
				<h2 v-if="isHeader"
					:id="`file-picker-section-header-${file.id}`"
					class="section-header">
					<b>{{ file.id | dateMonth }}</b>
					{{ file.id | dateYear }}
				</h2>
				<File v-else
					:file="files[file.id]"
					:allow-selection="true"
					:is-collection="true"
					:selected="selection[file.id] === true"
					:distance="distance"
					@click="openViewer"
					@favorite="toggleFavorite"
					@remove="removeFromCollection"
					@select-toggled="onFileSelectToggle" />
			</template>
		</FilesListViewer>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

import AlertCircle from 'vue-material-design-icons/AlertCircle.vue'
import FolderMultipleImage from 'vue-material-design-icons/FolderMultipleImage.vue'

import { NcEmptyContent, isMobile } from '@nextcloud/vue'
import { translate } from '@nextcloud/l10n'

import FetchFilesMixin from '../../mixins/FetchFilesMixin.js'
import FilesByMonthMixin from '../../mixins/FilesByMonthMixin.js'
import FilesSelectionMixin from '../../mixins/FilesSelectionMixin.js'
import FilesListViewer from '.././FilesListViewer.vue'
import File from '.././File.vue'

export default {
	name: 'CollectionContent',

	components: {
		AlertCircle,
		FolderMultipleImage,
		NcEmptyContent,
		FilesListViewer,
		File,
	},

	mixins: [
		FetchFilesMixin,
		FilesSelectionMixin,
		FilesByMonthMixin,
		isMobile,
	],

	props: {
		/** @type {import('vue').PropType<import('../../services/collectionFetcher').Collection>} */
		collection: {
			type: Object,
			default: () => undefined,
		},

		/** @type {import('vue').PropType<string[]>} */
		collectionFileIds: {
			type: Array,
			required: true,
		},

		loading: {
			type: Boolean,
			default: false,
		},

		allowSelection: {
			type: Boolean,
			default: true,
		},

		error: {
			type: [Error, Number],
			default: null,
		},
	},

	data() {
		return {
			appContent: document.getElementById('app-content-vue'),
		}
	},

	computed: {
		/** @return {import('../../services/collectionFetcher').IndexedCollectionFiles} */
		files() {
			return this.$store.getters.files
		},

		sortedCollectionFileIds() {
			return this.collectionFileIds.toSorted((fileId1, fileId2) => this.files[fileId1].timestamp < this.files[fileId2].timestamp ? -1 : 1)
		},
	},

	filters: {
		/**
		 * @param {string} date - In the following format: YYYYMM
		 */
		dateMonth(date) {
			return moment(date, 'YYYYMM').format('MMMM')
		},
		/**
		 * @param {string} date - In the following format: YYYYMM
		 */
		dateYear(date) {
			return moment(date, 'YYYYMM').format('YYYY')
		},
	},

	methods: {
		...mapActions([
			'removeFileFromCollection',
		]),

		openViewer(fileId) {
			const file = this.files[fileId]
			OCA.Viewer.open({
				fileInfo: file,
				list: Object.values(this.collectionFileIdsByMonth).flat().map(fileId => this.files[fileId]),
				loadMore: file.loadMore ? async () => await file.loadMore(true) : () => [],
				canLoop: file.canLoop,
			})
		},

		async toggleFavorite(fileId) {
			let newState = this.$store.state.files.files[fileId].favorite ? 0 : 1
			console.log(newState)
			await this.$store.dispatch('toggleFavoriteForFiles', { fileIds: [ fileId ], favoriteState: newState })
		},

		async removeFromCollection(fileId) {
			await this.$store.dispatch('removeFilesFromCollection', { collectionFileName: this.collection.filename, fileIdsToRemove: [ fileId ] })
		},

		getContent() {
			this.fetchFiles('', {
				mimesType: this.mimesType,
				onThisDay: this.onThisDay,
				onlyFavorites: this.onlyFavorites,
			})
		},

		t: translate,
	},
}
</script>
<style lang="scss" scoped>
.collection {
	display: flex;
	flex-direction: column;

	&__media {
		padding: 0 64px;

		@media only screen and (max-width: 1200px) {
			padding: 0 4px;
		}
	}
}
</style>
