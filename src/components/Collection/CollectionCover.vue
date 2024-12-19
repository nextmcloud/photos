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
	<li>
		<router-link class="collection-cover" :to="link">
			<img v-if="coverUrl !== ''"
				class="collection-cover__image"
				:src="coverUrl"
				:alt="altImg">

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
<script>
import ImageMultiple from 'vue-material-design-icons/ImageMultiple.vue'

export default {
	name: 'CollectionCover',

	components: {
		ImageMultiple,
	},

	props: {
		coverUrl: {
			type: String,
			required: true,
		},
		altImg: {
			type: String,
			required: true,
		},
		link: {
			type: String,
			required: true,
		},
	},
}
</script>
<style lang="scss" scoped>

.collection-cover {
	display: flex;
	flex-direction: column;
    overflow: hidden;
    box-sizing: border-box;
	background-color: var(--color-main-background);
	border-radius: var(--border-radius-large);
	box-shadow: var(--telekom-shadow-raised-pressed);

	&:hover, &:focus {
		// background: var(--color-background-hover);
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
