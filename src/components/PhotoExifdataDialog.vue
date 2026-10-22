<!--
  - SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->

<template>
	<NcDialog
		size="large"
		class="photo-exif-container"
		content-classes="photo-exif-dialog"
		@closing="emit('close')">
		<div class="photo-exif-card">
			<div class="photo-exif-card__preview">
				<img
					v-if="srcLarge"
					:src="srcLarge"
					:alt="photo.basename"
					class="photo-exif-card__image">
				<div v-else class="photo-exif-card__placeholder">
					{{ t('photos', 'Preview not available') }}
				</div>
			</div>

			<div class="photo-exif-card__body">
				<h2 class="photo-exif-card__title">
					{{ photo.basename }}
				</h2>

				<div v-if="headlineMeta" class="photo-exif-card__meta">
					{{ headlineMeta }}
				</div>

				<dl class="photo-exif-card__details">
					<div v-if="path" class="photo-exif-card__row">
						<dt>{{ t('photos', 'Path') }}</dt>
						<dd>{{ path }}</dd>
					</div>

					<div v-if="fileSize" class="photo-exif-card__row">
						<dt>{{ t('photos', 'Size') }}</dt>
						<dd>{{ fileSize }}</dd>
					</div>

					<div v-if="creationDate" class="photo-exif-card__row">
						<dt>{{ t('photos', 'Creation Date') }}</dt>
						<dd>{{ creationDate }}</dd>
					</div>

					<div v-if="lastModifiedDate" class="photo-exif-card__row">
						<dt>{{ t('photos', 'Last Modified') }}</dt>
						<dd>{{ lastModifiedDate }}</dd>
					</div>

					<div v-if="uploadedDate" class="photo-exif-card__row">
						<dt>{{ t('photos', 'Upload Date') }}</dt>
						<dd>{{ uploadedDate }}</dd>
					</div>

					<div v-if="dimensions" class="photo-exif-card__row">
						<dt>{{ t('photos', 'Resolution') }}</dt>
						<dd>{{ dimensions }} px</dd>
					</div>
				</dl>
			</div>
		</div>
	</NcDialog>
</template>

<script setup lang="ts">
import type { Node } from '@nextcloud/files'
import type { PhotoTarget } from '../utils/fileUtils.ts'

import { formatFileSize } from '@nextcloud/files'
import { t } from '@nextcloud/l10n'
import { generateUrl } from '@nextcloud/router'
import { computed, onMounted, ref } from 'vue'
import NcDialog from '@nextcloud/vue/components/NcDialog'
import { fetchFile } from '../services/fileFetcher.ts'
import { logger } from '../services/logger.ts'

const props = defineProps<{
	photo: PhotoTarget
}>()

const emit = defineEmits<{
	close: []
}>()

const file = ref<Node | null>(null)

const srcLarge = computed(() => {
	return generateUrl(`/apps/photos/api/v1/preview/${props.photo.fileid}?x=1600&y=1200`)
})

const fileSize = computed<string | null>(() => {
	const size = file.value?.size ?? file.value?.attributes.size
	if ((size === undefined || size === null) && size !== 0) {
		return null
	}
	return formatFileSize(Number(size), true)
})

const dimensions = computed<string | null>(() => {
	const attributes = file.value?.attributes
	if (!attributes) {
		return null
	}

	const size = attributes['metadata-photos-size'] as { width?: number, height?: number } | undefined
	const width = size?.width
	const height = size?.height

	return width && height ? `${width} × ${height}` : null
})

const path = computed(() => {
	if (file.value?.path) {
		const parts = file.value.path.split('/').filter(Boolean)
		parts.pop()
		return '/' + parts.join('/')
	}

	if (props.photo.davPath) {
		const parts = props.photo.davPath.split('/').filter(Boolean)
		parts.pop()
		return '/' + parts.join('/')
	}

	return ''
})

const creationDate = computed<string | null>(() => {
	const timestamp = file.value?.attributes['metadata-photos-original_date_time']
		?? file.value?.attributes.timestamp

	if (!timestamp) {
		return null
	}

	return formatDateFromUnix(timestamp as number | string)
})

const lastModifiedTimestamp = computed<number | null>(() => {
	const value = file.value?.mtime
		?? file.value?.attributes.getlastmodified
		?? file.value?.attributes.lastmod

	if (!value) {
		return null
	}

	if (value instanceof Date) {
		return value.getTime()
	}

	const parsed = Date.parse(String(value))
	return Number.isNaN(parsed) ? null : parsed
})

const lastModifiedDate = computed<string | null>(() => {
	if (lastModifiedTimestamp.value === null) {
		return null
	}
	return formatDate(new Date(lastModifiedTimestamp.value))
})

const uploadedDate = computed<string | null>(() => {
	const timestamp = file.value?.attributes.timestamp
	if (!timestamp) {
		return null
	}
	return formatDateFromUnix(timestamp as number | string)
})

const headlineMeta = computed(() => {
	const parts: string[] = []

	if (fileSize.value) {
		parts.push(fileSize.value)
	}

	const dateSource = creationDate.value ?? uploadedDate.value ?? lastModifiedDate.value
	if (dateSource) {
		const monthYear = formatMonthYearFromDisplay(dateSource)
		if (monthYear) {
			parts.push(monthYear)
		}
	}

	return parts.join(' · ')
})

function formatDate(date: Date): string {
	try {
		return new Intl.DateTimeFormat('de-DE', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
		}).format(date)
	} catch {
		return date.toString()
	}
}

function formatDateFromUnix(timestamp: number | string): string | null {
	const value = Number(timestamp)
	if (Number.isNaN(value)) {
		return null
	}

	const milliseconds = value > 1e12 ? value : value * 1000
	return formatDate(new Date(milliseconds))
}

function formatMonthYearFromDisplay(displayValue: string): string | null {
	const parsed = Date.parse(displayValue.replace(',', ''))
	if (!Number.isNaN(parsed)) {
		return new Intl.DateTimeFormat('de-DE', {
			month: 'long',
			year: 'numeric',
		}).format(new Date(parsed))
	}
	return null
}

onMounted(async () => {
	if (!props.photo.davPath) {
		return
	}

	try {
		file.value = await fetchFile(props.photo.davPath)
	} catch (error) {
		logger.error('Failed to fetch photo information', {
			error,
			fileid: props.photo.fileid,
			davPath: props.photo.davPath,
		})
	}
})
</script>

<style lang="scss" scoped>
.photo-exif-container .modal-container {
	padding: 0 !important;
}

.photo-exif-container .dialog__name,
.photo-exif-container .dialog__actions {
	display: none;
}

.photo-exif-card {
	overflow: hidden;
	border-radius: 1rem;
	background: var(--color-main-background);
}

.photo-exif-card__preview {
	width: 100%;
	background: var(--color-background-dark);
}

.photo-exif-card__image {
	display: block;
	width: 100%;
	height: 320px;
	object-fit: cover;
}

.photo-exif-card__placeholder {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 320px;
	color: var(--color-text-lighter);
}

.photo-exif-card__body {
	padding: 1.5rem;
}

.photo-exif-card__title {
	margin: 0;
	font-size: 1.75rem;
	line-height: 1.2;
	font-weight: 700;
	word-break: break-word;
}

.photo-exif-card__meta {
	margin-top: 0.5rem;
	font-size: 1rem;
	color: var(--color-text-maxcontrast);
}

.photo-exif-card__details {
	margin: 1.5rem 0 0;
	padding: 0;
}

.photo-exif-card__row dt {
	margin: 0 0 0.25rem;
	font-weight: 700;
	font-size: 1rem;
	color: var(--color-main-text);
}

.photo-exif-card__row dd {
	margin: 0;
	font-size: 1rem;
	line-height: 1.4;
	color: var(--color-main-text);
	word-break: break-word;
}

:deep(.photo-exif-dialog) {
	padding: 0 !important;
	overflow: hidden;
	border-radius: 1rem;
}

:deep(.photo-exif-dialog .modal-wrapper),
:deep(.photo-exif-dialog .modal-container) {
	padding: 0 !important;
	border-radius: 1rem;
	overflow: hidden;
	background: var(--color-main-background);
}

@media only screen and (max-width: 768px) {
	.photo-exif-card__image,
	.photo-exif-card__placeholder {
		height: 240px;
	}

	.photo-exif-card__body {
		padding: 1rem;
	}

	.photo-exif-card__title {
		font-size: 1.35rem;
	}
}
</style>
