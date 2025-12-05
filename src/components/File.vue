<!--
 - SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 - SPDX-License-Identifier: AGPL-3.0-or-later
-->

<template>
	<div class="file-container"
		data-test="media"
		:class="{selected}">
		<a class="file"
			:href="file.source"
			:aria-label="ariaLabel"
			@click.stop.prevent="emitClick">

			<!-- image and loading placeholder -->
			<div :class="file.favorite ? 'file__images file__favorite' : 'file__images'">
				<VideoIcon v-if="file.mime.includes('video')" class="icon-overlay" :size="64" />
				<PlayCircleIcon v-else-if="file.metadataFilesLivePhoto !== undefined" class="icon-overlay" :size="64" />

				<div v-if="isCollection" class="hover-overlay">
					<span class="icon-action" :title="file.favorite ? t('photos', 'Remove from favorites') : t('photos', 'Add to favorites')" @click.stop.prevent="emitFavorite">
						<Star class="icon-overlay-action" :size="24" />
					</span>
					<div class="actions-right">
						<span class="icon-action" :title="t('photos', 'View Info')" @click.stop.prevent="showModal">
							<IconInfo class="icon-overlay-action" :size="24" />
						</span>
						<span class="icon-action" :title="t('photos', 'Remove element {imageName} from Album', {imageName: file.basename})" @click.stop.prevent="emitRemove">
							<Delete class="icon-overlay-action" :size="24" />
						</span>
					</div>
				</div>

				<!-- We have two img elements to load the small and large preview -->
				<!-- Do not show the small preview if the larger one is loaded -->
				<!-- Prioritize visible files -->
				<!-- Load small preview first, then the larger one -->
				<!-- Preload large preview for near visible files -->
				<!-- Preload small preview for further away files -->
				<template v-if="initialized">
					<canvas v-if="hasBlurhash && !loadedSmall && !loadedLarge" ref="canvas" class="file__blurhash" />

					<img v-if="!loadedLarge && (loadedSmall || (distance < 5 && !errorSmall))"
						ref="imgSmall"
						:key="`${file.basename}-small`"
						:src="srcSmall"
						:alt="file.basename"
						:decoding="loadedSmall || isVisible ? 'sync' : 'async'"
						:fetchpriority="loadedSmall || isVisible ? 'high' : 'low'"
						:loading="loadedSmall || isVisible ? 'eager' : distance < 2 ? 'auto' : 'lazy'"
						@load="onLoadSmall"
						@error="onErrorSmall">

					<img v-if="loadedLarge || ((isVisible || (distance < 2 && (loadedSmall || errorSmall))) && !errorLarge)"
						ref="imgLarge"
						:key="`${file.basename}-large`"
						:src="srcLarge"
						:alt="file.basename"
						:decoding="loadedLarge || isVisible ? 'sync' : 'async'"
						:fetchpriority="loadedLarge || isVisible ? 'high' : 'low'"
						:loading="loadedLarge || isVisible ? 'auto' : 'lazy'"
						@load="onLoadLarge"
						@error="onErrorLarge">
				</template>
			</div>
		</a>

		<NcCheckboxRadioSwitch v-if="allowSelection"
			class="selection-checkbox"
			:aria-label="t('photos', 'Select image {imageName}', {imageName: file.basename})"
			:checked="selected"
			@update:checked="onToggle" />

		<FavoriteIcon v-if="file.favorite === 1"
			v-once
			class="favorite-state" />

		<NcModal size="small"
			:show.sync="modal"
			:has-next="false"
			:has-previous="false"
			@close="closeModal"
			id="file-info-exif">
			<div class="modal__content modal__content--file">
				<div class="modal__left">
					<img :src="srcLarge"
						:alt="file.basename"
						class="modal__image"
						v-if="srcLarge && isImage" />
					<div v-else class="modal__placeholder">{{ t('photos', 'Preview not available') }}</div>
				</div>
				<div class="modal__right">
					<h2 class="modal__title">{{ file.basename }}</h2>
					<span v-if="fileSize">{{ fileSize }}</span><span v-if="fileSize && lastModifiedDate"> · </span><span v-if="lastModifiedDate"><NcDateTime :timestamp="getModifiedDate" :ignore-seconds="true" /></span>

					<ul class="modal__details">
						<li><strong>{{ t('photos', 'Path') }}</strong> <p>{{ path }}</p></li>
						<li v-if="dimensions"><strong>{{ t('photos', 'Resolution') }}</strong> <p>{{ dimensions }} px </p></li>
						<li v-if="fileSize"><strong>{{ t('photos', 'Size') }}</strong> <p>{{ fileSize }}</p></li>
						<!-- <li><strong>Kamera:</strong> {{ camera }}</li> -->
						<li v-if="creationDate"><strong>{{ t('photos', 'Creation Date') }}</strong> <p>{{ creationDate }}</p></li>
						<li v-if="lastModifiedDate"><strong>{{ t('photos', 'Last Modified') }}</strong> <p>{{ lastModifiedDate }}</p></li>
						<li v-if="uploadedDate"><strong>{{ t('photos', 'Upload Date') }}</strong> <p>{{ uploadedDate }}</p></li>
					</ul>
				</div>
			</div>
		</NcModal>
	</div>
</template>

<script>
import VideoIcon from 'vue-material-design-icons/Video.vue'
import PlayCircleIcon from 'vue-material-design-icons/PlayCircle.vue'
import { decode } from 'blurhash'

import { generateUrl } from '@nextcloud/router'
import { NcCheckboxRadioSwitch /** , NcButton */ } from '@nextcloud/vue'

import FavoriteIcon from './FavoriteIcon.vue'
import { isCachedPreview } from '../services/PreviewService.js'

import Star from 'vue-material-design-icons/Star.vue'
import Delete from 'vue-material-design-icons/Delete.vue'
import IconInfo from 'vue-material-design-icons/Information.vue'
import NcModal from '@nextcloud/vue/dist/Components/NcModal.js'
import NcDateTime from '@nextcloud/vue/dist/Components/NcDateTime.js'
import { formatFileSize } from '@nextcloud/files'

export default {
	name: 'File',
	components: {
		FavoriteIcon,
		NcCheckboxRadioSwitch,
		// NcButton,
		VideoIcon,
		PlayCircleIcon,
		Star,
		Delete,
		IconInfo,
		NcModal,
		NcDateTime,
	},
	inheritAttrs: false,
	props: {
		file: {
			type: Object,
			required: true,
		},
		selected: {
			type: Boolean,
			default: false,
		},
		allowSelection: {
			type: Boolean,
			default: true,
		},
		distance: {
			type: Number,
			default: 0,
		},
		isCollection: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		return {
			initialized: false,
			loadedSmall: false,
			errorSmall: false,
			loadedLarge: false,
			errorLarge: false,
			modal: false,
		}
	},

	computed: {
		/** @return {string} */
		ariaLabel() {
			if (this.file.favorite) {
				return t('photos', 'Favorite image, open the full size "{name}" image', { name: this.file.basename })
			}
			return t('photos', 'Open the full size "{name}" image', { name: this.file.basename })
		},
		/** @return {boolean} */
		isImage() {
			return this.file.mime && this.file.mime.startsWith('image')
		},
		/** @return {string} */
		decodedEtag() {
			return (this.file.etag || '').replace('&quot;', '').replace('&quot;', '')
		},
		/** @return {string} */
		srcLarge() {
			return this.getItemURL(512)
		},
		/** @return {string} */
		srcSmall() {
			return this.getItemURL(64)
		},
		/** @return {boolean} */
		isVisible() {
			return this.distance === 0
		},
		hasBlurhash() {
			return this.file.metadataBlurhash !== undefined
		},
		fileSize() {
			const size = this.file.size
			if ((size === undefined || size === null) && size !== 0) {
				return null
			}
			return formatFileSize(size, true)
		},
		dimensions() {
			const sizeObj = this.file.metadataPhotosSize || this.file.metadataPhotos || this.file.metadataPhotos || null
			let w = null
			let h = null
			if (sizeObj) {
				w = (sizeObj.width || sizeObj.imageWidth) || (sizeObj.get && sizeObj.get.width)
				h = (sizeObj.height || sizeObj.imageHeight) || (sizeObj.get && sizeObj.get.height)
			}
			// fallbacks
			w = w || this.file.metadataWidth || this.file.width || this.file.imageWidth
			h = h || this.file.metadataHeight || this.file.height || this.file.imageHeight
			if (w && h) {
				return `${w} × ${h}`
			}
			return null
		},
		path() {
			return this.file.filename.substring(0, this.file.filename.lastIndexOf('/'))
		},
		camera() {
			// if EXIF camera fields exist
			return this.file.metadataCamera || this.file.metadataPhotosCamera || this.file.exifCamera || 'nc standard'
		},
		creationDate() {
			const timestamp = this.file.metadataPhotosOriginalDateTime || this.file.timestamp
			if (!timestamp) return null
			return this.formatDateFromUnix(timestamp)
		},
		lastModifiedDate() {
			const lm = this.file.getlastmodified || this.file.lastmod
			if (!lm) return null
			const parsed = Date.parse(lm)
			if (isNaN(parsed)) return null
			return this.formatDate(new Date(parsed))
		},
		getModifiedDate() {
			return Date.parse(this.file.getlastmodified)
		},
		uploadedDate() {
			const timestamp = this.file.timestamp || null
			if (!timestamp) return null
			return this.formatDateFromUnix(timestamp)
		},
	},

	watch: {
		async file() {
			this.initialized = false
			this.loadedSmall = false
			this.errorSmall = false
			this.loadedLarge = false
			this.errorLarge = false

			await this.init()
		},
	},

	async mounted() {
		await this.init()
	},

	beforeDestroy() {
		// cancel any pending load
		if (this.$refs.imgSmall !== undefined) {
			this.$refs.imgSmall.src = ''
		}
		if (this.$refs.srcLarge !== undefined) {
			this.$refs.srcLarge.src = ''
		}
	},

	methods: {
		async init() {
			[this.loadedSmall, this.loadedLarge] = await Promise.all([
				await isCachedPreview(this.srcSmall),
				await isCachedPreview(this.srcLarge),
			])

			this.initialized = true

			await this.$nextTick() // Wait for next tick to have the canvas in the DOM

			this.drawBlurhash()
		},

		emitClick() {
			this.$emit('click', this.file.fileid)
		},

		emitFavorite() {
			this.$emit('favorite', this.file.fileid)
		},

		emitRemove() {
			this.$emit('remove', this.file.fileid)
		},

		showModal() {
			this.modal = true
		},

		closeModal() {
			this.modal = false
		},

		onLoadSmall() {
			this.loadedSmall = true
		},

		onLoadLarge() {
			this.loadedLarge = true
		},

		onErrorSmall() {
			this.errorSmall = true
		},

		onErrorLarge() {
			this.errorLarge = true
		},

		onToggle(value) {
			this.$emit('select-toggled', { id: this.file.fileid, value })
		},

		getItemURL(size) {
			const token = this.$route?.params.token
			if (token) {
				return generateUrl(`/apps/photos/api/v1/publicPreview/${this.file.fileid}?etag=${this.decodedEtag}&x=${size}&y=${size}&token=${token}`)
			} else {
				return generateUrl(`/apps/photos/api/v1/preview/${this.file.fileid}?etag=${this.decodedEtag}&x=${size}&y=${size}`)
			}
		},

		formatDate(date) {
			try {
				return new Intl.DateTimeFormat('de-DE', {
					year: 'numeric',
					month: '2-digit',
					day: '2-digit',
					hour: '2-digit',
					minute: '2-digit',
					timeZone: 'UTC'
				}).format(date)
			} catch (e) {
				return date.toString()
			}
		},

		formatDateFromUnix(timestamp) {
			const t = Number(timestamp)
			if (isNaN(t)) return null
			const maybeMillis = t > 1e12 ? t : t * 1000
			return this.formatDate(new Date(maybeMillis))
		},

		drawBlurhash() {
			if (!this.hasBlurhash || !this.$refs.canvas) {
				return
			}

			const width = this.$refs.canvas.width
			const height = this.$refs.canvas.height

			const pixels = decode(this.file.metadataBlurhash, width, height)

			const ctx = this.$refs.canvas.getContext('2d')
			const imageData = ctx.createImageData(width, height)
			imageData.data.set(pixels)
			ctx.putImageData(imageData, 0, 0)
		},
		formatFileSize,
	},

}
</script>

<style lang="scss" scoped>
.file-container {
	contain: strict;
	background: var(--color-primary-element-light);
	position: relative;
	height: 100%;
	width: 100%;
	border: 2px solid var(--color-main-background); // Use border so create a separation between images.
	box-sizing: border-box;

	// Selection border.
	&.selected,
	&:focus-within,
	&:has(:focus) {
		&::after {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 2;
			width: 100%;
			height: 100%;
			content: '';
			outline: var(--color-info) solid 4px;
			outline-offset: -4px;
			pointer-events: none;
		}

		.selection-checkbox {
			opacity: 1;
		}
	}

	.file {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		outline: none; // Override global focus state.
		display: flex; // Fill parent size

		&__blurhash {
			position: absolute;
			top: 0;
			height: 100%;
			width: 100%;
			object-fit: cover;
		}

		&__images {
			width: 100%;
			height: 100%;

			.icon-overlay {
				position: absolute;
				top: 0px;
				right: 0px;
				width: 100%;
				height: 100%;
				z-index: 1;
				opacity: 0.8;

				:deep .material-design-icon__svg {
					fill: var(--color-main-background);
				}
			}

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				position: absolute;
				color: transparent; /// Hide alt='' text when loading.
			}

			.star-icon {
				position: absolute;
				z-index: 1000;
				left: 0;
				bottom: 0;
				width: 2.5rem;
				height: 2.5rem;
				svg {
					color: #fff;
				}
			}

			.delete-icon {
				position: absolute;
				z-index: 1000;
				right: 0;
				bottom: 0;
				width: 2.5rem;
				height: 2.5rem;
				svg {
					color: #fff;
				}
			}
		}
	}

	.hover-overlay {
		bottom: 0;
		cursor: unset;
		display: none;
		position: absolute;
		height: 2.5rem;
		width: 100%;
		z-index: 900;
		background-color: rgba(0,0,0,0.5);
	}

	// Reveal checkbox on hover.
	&:hover, &.selected, &:focus-within {
		.selection-checkbox {
			opacity: 1;
		}

		.favorite-state {
			display: none;
		}

		.hover-overlay {
			display: flex;
		}
	}

	.selection-checkbox {
		opacity: 0;
		position: absolute;
		top: 8px;
		// Fancy calculation to render the checkbox in the middle of narrow images.
		right: min(22px, calc(50% - 7px));
		z-index: 1;
		width: fit-content;

		:deep .checkbox-radio-switch__input:focus-visible + .checkbox-radio-switch__content,
		.checkbox-radio-switch__input:focus-visible {
			outline: 2px solid var(--color-main-text);
			box-shadow: 0 0 0 3px var(--color-main-background);
			outline-offset: 0px;
		}

		:deep .checkbox-radio-switch__content {
			padding: 10px;
			box-sizing: border-box;
			background: var(--color-main-background);

			// Add a background to the checkbox so we do not see the image through it.
			&::after {
				content: '';
				width: 16px;
				height: 16px;
				position: absolute;
				left: 14px;
				z-index: -1;
			}

			.checkbox-radio-switch__icon {
				margin: 0;
			}
		}

		.input-label {
			position: fixed;
			z-index: -1;
			top: -5000px;
			left: -5000px;
		}
	}

	.favorite-state {
		position: absolute;
		top: 2px;
		// Fancy calculation to render the start in the middle of narrow images.
		right: min(2px, calc(50% - 7px));
	}
}

/* Modal layout for EXIF */
.modal__content--file {
	display: block;
	gap: 16px;
}

.modal__left {
	flex: 1 1 60%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.modal__right {
	flex: 1 1 40%;
	padding: 8px 0;
}

.modal__image {
	max-width: 100%;
	max-height: 40vh;
	object-fit: contain;
	border-radius: 4px;
	min-height: 30vh;
}

.modal__details {
	list-style: none;
	padding: 0;
	margin: 8px 0;
}

.modal__details li {
	margin-bottom: 6px;
}

.modal__title {
	font-size: 20px;
	margin: unset;
	line-height: initial;
}

.modal__placeholder {
	color: var(--color-text-lighter);
}
</style>
