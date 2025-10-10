<!--
  - SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<!-- Errors handlers-->
	<NcEmptyContent v-if="error" :name="t('photos', 'An error occurred') ">
		<AlertCircle slot="icon" />
	</NcEmptyContent>

	<div v-else class="collections">
		<!-- Collection header -->
		<slot name="header" />

		<!-- No collections -->
		<ul v-if="noCollection" class="collections__list">
			<slot name="collection-add" />
		</ul>

		<!-- List -->
		<ul v-else-if="!noCollection" class="collections__list">
			<slot name="collection-add" />
			<slot v-for="collection in collections"
				:collection="collection"
				class="collection" />
		</ul>
	</div>
</template>

<script>
import AlertCircle from 'vue-material-design-icons/AlertCircle.vue'

import { NcEmptyContent } from '@nextcloud/vue'
import { translate } from '@nextcloud/l10n'

export default {
	name: 'CollectionsList',

	components: {
		AlertCircle,
		NcEmptyContent,
	},

	props: {
		/** @type {import('vue').PropType<import('../../services/collectionFetcher').IndexedCollections>} */
		collections: {
			type: Object,
			required: true,
		},
		loading: {
			type: Boolean,
			default: false,
		},
		error: {
			type: Error,
			default: null,
		},
	},

	computed: {
		/**
		 * @return {boolean} Whether the list of collections is empty or not.
		 */
		noCollection() {
			return Object.keys(this.collections).length === 0
		},
	},

	methods: {
		t: translate,
	},
}
</script>
<style lang="scss" scoped>
.collections {
	display: flex;
	flex-direction: column;
	height: 100%;

	&__list {
		padding: 2.5rem;
		flex-grow: 1;
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
		align-items: flex-start;
		height: calc(100% - 3rem);
		overflow-x: scroll;

		@media only screen and (max-width: 480px) {
			padding: 2rem 1rem;
			justify-content: center;
		}
	}
}
</style>
