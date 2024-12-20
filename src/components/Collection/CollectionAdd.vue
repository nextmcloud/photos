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
	<li id="collection-add">
		<slot name="default" />
	</li>
</template>
<script>

export default {
	name: 'CollectionAdd',

	props: {
		link: {
			type: String,
			required: false,
		},
	},
}
</script>
<style lang="scss" scoped>
#collection-add {

	.button-vue {
		display: flex;
		flex-direction: column;
		overflow: hidden;
		box-sizing: border-box;
		background-color: var(--color-main-background);
		border-radius: var(--border-radius-large);
		box-shadow: var(--telekom-shadow-raised-pressed);

		width: 300px;
		height: 308px;
		margin: 0;
		border: unset;

		@media only screen and (max-width: 1200px) {
			width: 270px;
		}

		&:hover, &:focus {
			background: var(--color-background-hover);
			box-shadow: var(--telekom-shadow-raised-standard);
		}
	}

	.button-vue__wrapper {
		flex-direction: column;
	}
}
</style>
