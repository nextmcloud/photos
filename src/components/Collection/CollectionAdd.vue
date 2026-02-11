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
