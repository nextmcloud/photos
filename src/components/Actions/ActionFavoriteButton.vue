<template>
	<NcActionButton
		v-if="shouldFavoriteSelection"
		:aria-label="t('photos', 'Add selection to favorites')"
		@click="favoriteSelection">
		<template #icon>
			<Star />
		</template>
		{{ t('photos', 'Add selection to favorites') }}
	</NcActionButton>
	<NcActionButton
		v-else
		:aria-label="t('photos', 'Remove selection from favorites')"
		@click="unFavoriteSelection">
		<template #icon>
			<Star />
		</template>
		{{ t('photos', 'Remove selection from favorites') }}
	</NcActionButton>
</template>

<script lang="ts">
import { translate } from '@nextcloud/l10n'
import NcActionButton from '@nextcloud/vue/components/NcActionButton'
import Star from 'vue-material-design-icons/Star.vue'
import { useFilesStore } from '../../store/files.ts'

export default {
	name: 'ActionFavoriteButton',

	components: {
		Star,
		NcActionButton,
	},

	props: {
		selectedFileIds: {
			type: Array,
			required: true,
		},
	},

	setup() {
		return {
			filesStore: useFilesStore(),
		}
	},

	computed: {
		/** @return {boolean} */
		shouldFavoriteSelection() {
			// Favorite all selection if at least one file is not in the favorites.
			return this.selectedFileIds.some((fileId) => this.filesStore.files[fileId]?.attributes.favorite === 0)
		},
	},

	methods: {
		async favoriteSelection() {
			await this.filesStore.toggleFavoriteForFiles(this.selectedFileIds, 1)
		},

		async unFavoriteSelection() {
			await this.filesStore.toggleFavoriteForFiles(this.selectedFileIds, 0)
		},

		t: translate,
	},
}
</script>
