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
