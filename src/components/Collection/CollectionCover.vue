<!--
  - SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<li>
		<router-link class="collection-cover" :to="link">
			<img v-if="coverUrl !== '' && coverLoadingError === false"
				class="collection-cover__image"
				:src="coverUrl"
				:alt="altImg"
				@error="coverLoadingError = true">

			<div v-else class="collection-cover__image collection-cover__image--placeholder">
				<ImageMultiple :size="128" />
			</div>
			<div class="collection-cover__details">
				<div class="collection-cover__details__title">
					<slot name="default" />
				</div>
				<div class="collection-cover__details__subtitle">
					<slot name="subtitle" />
				</div>
			</div>
		</router-link>
	</li>
</template>
<script setup>
import { computed, ref } from 'vue'
import ImageMultiple from 'vue-material-design-icons/ImageMultiple.vue'

const props = defineProps({
	coverUrl: String,
	altImg: String,
	parentRoute: String,
	collectionName: String
})

const coverLoadingError = ref(false)
const link = computed(() => `${props.parentRoute}/${encodeURIComponent(props.collectionName)}`)
</script>
<style lang="scss" scoped>
.collection-cover {
	display: flex;
	flex-direction: column;
	border-radius: var(--border-radius-large);
	overflow: hidden;
    box-sizing: border-box;
	background-color: var(--color-main-background);
	box-shadow: var(--telekom-shadow-raised-pressed);

	&:hover, &:focus {
		box-shadow: var(--telekom-shadow-raised-standard);
	}

	&__image {
		width: 300px;
		height: 230px;
		object-fit: cover;

		@media only screen and (max-width: 1200px) {
			width: 270px;
			height: 230px;
		}

		&--placeholder {
			background: var(--color-primary-element-light);

			:deep .material-design-icon {
				width: 100%;
				height: 100%;

				.material-design-icon__svg {
					fill: var(--color-primary-element);
				}
			}
		}
	}

	&__details {
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 300px;

		@media only screen and (max-width: 1200px) {
			width: 270px;
		}

		&__title {
			display: flex;
		}

		&__subtitle {
			display: flex;
			color: var(--color-main-text);
		}
	}
}
</style>
