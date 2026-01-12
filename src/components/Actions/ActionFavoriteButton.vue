<template>
	<NcButton
		v-if="shouldFavoriteSelection"
		:aria-label="t('photos', 'Add selection to favorites')"
		@click="favoriteSelection">
		<template #icon>
			<Star />
		</template>
		{{ t('photos', 'Add selection to favorites') }}
	</NcButton>
	<NcButton
		v-else
		:aria-label="t('photos', 'Remove selection from favorites')"
		@click="unFavoriteSelection">
		<template #icon>
			<Star />
		</template>
		{{ t('photos', 'Remove selection from favorites') }}
	</NcButton>
</template>

<script>
import { NcButton } from '@nextcloud/vue'
import { mapActions, mapGetters } from 'vuex'
import Star from 'vue-material-design-icons/Star.vue'
export default {
	name: 'ActionFavoriteButton',
	components: {
		Star,
		NcButton,
	},

	props: {
		selectedFileIds: {
			type: Array,
			required: true,
		},
	},

	computed: {
		...mapGetters([
			'files',
		]),

		/** @return {boolean} */
		shouldFavoriteSelection() {
			// Favorite all selection if at least one file is not in the favorites.
			return this.selectedFileIds.some((fileId) => this.files[fileId].favorite === 0)
		},
	},

	methods: {
		...mapActions([
			'toggleFavoriteForFiles',
		]),

		async favoriteSelection() {
			await this.toggleFavoriteForFiles({ fileIds: this.selectedFileIds, favoriteState: 1 })
		},

		async unFavoriteSelection() {
			await this.toggleFavoriteForFiles({ fileIds: this.selectedFileIds, favoriteState: 0 })
		},
	},
}
</script>
