<template>
	<NcModal
		v-if="show"
		:title="t('photos', 'View Info')"
		@close="$emit('close')">

		<div class="modal__content modal__content--file">
			<div class="modal__left">
				<img
					v-if="srcLarge && isImage"
					:src="srcLarge"
					:alt="file.basename"
					class="modal__image" />
				<div v-else class="modal__placeholder">
					{{ t('photos', 'Preview not available') }}
				</div>
			</div>

			<div class="modal__right">
				<h2 class="modal__title">{{ file.basename }}</h2>
				<span v-if="fileSize">{{ fileSize }}</span>
				<span v-if="fileSize && lastModifiedDate"> · </span>
				<span v-if="lastModifiedDate">
					<NcDateTime :timestamp="getModifiedDate" :ignore-seconds="true" />
				</span>

				<ul class="modal__details">
					<li><strong>{{ t('photos', 'Path') }}</strong> <p>{{ path }}</p></li>
					<li v-if="dimensions"><strong>{{ t('photos', 'Resolution') }}</strong> <p>{{ dimensions }} px</p></li>
					<li v-if="fileSize"><strong>{{ t('photos', 'Size') }}</strong> <p>{{ fileSize }}</p></li>
					<li v-if="creationDate"><strong>{{ t('photos', 'Creation Date') }}</strong> <p>{{ creationDate }}</p></li>
					<li v-if="lastModifiedDate"><strong>{{ t('photos', 'Last Modified') }}</strong> <p>{{ lastModifiedDate }}</p></li>
					<li v-if="uploadedDate"><strong>{{ t('photos', 'Upload Date') }}</strong> <p>{{ uploadedDate }}</p></li>
				</ul>
			</div>
		</div>
	</NcModal>
</template>


<script lang="ts">
import type { PropType } from 'vue'
import type { PhotoFile } from '../store/files.js'

import { t } from '@nextcloud/l10n'
import NcModal from '@nextcloud/vue/dist/Components/NcModal.js'
import NcDateTime from '@nextcloud/vue/dist/Components/NcDateTime.js'
import { formatFileSize } from '@nextcloud/files'

export default {
	name: 'FileInfoExifModal',

	components: {
		NcModal,
		NcDateTime,
	},

	props: {
		show: {
			type: Boolean,
			required: true,
		},
		file: {
			type: Object as PropType<PhotoFile>,
			required: true,
		},
		srcLarge: {
			type: String,
			required: true,
		},
		isImage: {
			type: Boolean,
			required: true,
		},
	},

	computed: {
		fileSize() {
			const size = this.file.attributes.size
			if ((size === undefined || size === null) && size !== 0) {
				return null
			}
			return formatFileSize(size, true)
		},

		dimensions() {
			const sizeObj =
				this.file.attributes.metadataPhotosSize ||
				this.file.attributes.metadataPhotos ||
				null

			let w = null
			let h = null

			if (sizeObj) {
				w = sizeObj.width || sizeObj.imageWidth || sizeObj.get?.width
				h = sizeObj.height || sizeObj.imageHeight || sizeObj.get?.height
			}

			w = w || this.file.attributes.metadataWidth || this.file.attributes.width || this.file.attributes.imageWidth
			h = h || this.file.attributes.metadataHeight || this.file.attributes.height || this.file.attributes.imageHeight

			return w && h ? `${w} × ${h}` : null
		},

		path() {
			return this.file.attributes.filename.substring(
				0,
				this.file.attributes.filename.lastIndexOf('/')
			)
		},

		creationDate() {
			const ts = this.file.attributes.metadataPhotosOriginalDateTime || this.file.attributes.timestamp
			if (!ts) return null
			return this.formatDateFromUnix(ts)
		},

		lastModifiedDate() {
			const lm = this.file.attributes.getlastmodified || this.file.attributes.lastmod
			if (!lm) return null

			const parsed = Date.parse(lm)
			return isNaN(parsed) ? null : this.formatDate(new Date(parsed))
		},

		getModifiedDate() {
			return Date.parse(this.file.attributes.getlastmodified)
		},

		uploadedDate() {
			if (!this.file.attributes.timestamp) return null
			return this.formatDateFromUnix(this.file.attributes.timestamp)
		},
	},

	methods: {
		formatDate(date: Date) {
			try {
				return new Intl.DateTimeFormat('de-DE', {
					year: 'numeric',
					month: '2-digit',
					day: '2-digit',
					hour: '2-digit',
					minute: '2-digit',
					timeZone: 'UTC',
				}).format(date)
			} catch {
				return date.toString()
			}
		},

		formatDateFromUnix(timestamp: number | string) {
			const t = Number(timestamp)
			if (isNaN(t)) return null
			const millis = t > 1e12 ? t : t * 1000
			return this.formatDate(new Date(millis))
		},

		t,
	},
}
</script>

<style lang="scss" scoped>
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
