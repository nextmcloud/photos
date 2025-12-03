<!--
  - SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
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
		<FilesListViewer v-if="collection !== undefined && sortedCollectionFileIds.length > 0 "
			:container-element="appContent"
			class="collection__media"
			:file-ids="sortedCollectionFileIds"
			:base-height="isMobile ? 120 : 200"
			:loading="loading">
			<template slot-scope="{file, isHeader}">
				<h2 v-if="isHeader"
					:id="`file-picker-section-header-${file.id}`"
					class="section-header">
					<b>{{ file.id | dateMonth }}</b>
					{{ file.id | dateYear }}
				</h2>
				<File v-else
					slot-scope="{file}"
					:file="files[file.id]"
					:allow-selection="allowSelection"
					:selected="selection[file.id] === true"
					:is-collection="true"
					@click="openViewer"
					@favorite="toggleFavorite"
					@remove="removeFromCollection"
					@select-toggled="onFileSelectToggle" />
			</template>
		</FilesListViewer>
	</div>
</template>

<script>
import AlertCircle from 'vue-material-design-icons/AlertCircle.vue'
import FolderMultipleImage from 'vue-material-design-icons/FolderMultipleImage.vue'

import { NcEmptyContent, isMobile } from '@nextcloud/vue'
import { translate } from '@nextcloud/l10n'
import moment from '@nextcloud/moment'

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

	mixins: [
		FilesSelectionMixin,
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

	methods: {
		openViewer(fileId) {
			const file = this.files[fileId]

			OCA.Viewer.open({
				fileInfo: file,
				list: this.sortedCollectionFileIds.map(fileId => this.files[fileId]).filter(file => !file.sectionHeader),
				loadMore: file.loadMore ? async () => await file.loadMore(true) : () => [],
				canLoop: file.canLoop,
			})
		},

		async toggleFavorite(fileId) {
			const newState = this.$store.state.files.files[fileId].favorite ? 0 : 1
			await this.$store.dispatch('toggleFavoriteForFiles', { fileIds: [fileId], favoriteState: newState })
		},

		async removeFromCollection(fileId) {
			await this.$store.dispatch('removeFilesFromCollection', { collectionFileName: this.collection.filename, fileIdsToRemove: [fileId] })
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
