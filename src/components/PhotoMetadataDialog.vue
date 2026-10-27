<template>
	<NcDialog
		:name="t('photos', 'Media metadata')"
		@update:open="emit('close')">
		<NcLoadingIcon v-if="exifEntries === undefined" :size="32" class="photo-metadata__loading" />
		<template v-else>
			<dl class="photo-metadata">
				<div class="photo-metadata__entry">
					<dt>{{ t('photos', 'Filename') }}</dt>
					<dd>{{ photo.basename }}</dd>
				</div>
				<div v-if="takenAt" class="photo-metadata__entry">
					<dt>{{ t('photos', 'Taken at Date and time') }}</dt>
					<dd>{{ takenAt }}</dd>
				</div>
				<div v-for="entry in exifEntries" :key="entry.label" class="photo-metadata__entry">
					<dt>{{ entry.label }}</dt>
					<dd>{{ entry.value }}</dd>
				</div>
				<div v-if="locationFeaturesEnabled && metadata?.place" class="photo-metadata__entry">
					<dt>{{ t('photos', 'Place') }}</dt>
					<dd>{{ metadata.place }}</dd>
				</div>
				<div v-if="locationFeaturesEnabled && location !== null" class="photo-metadata__entry">
					<dt>{{ t('photos', 'Location') }}</dt>
					<dd>{{ formatCoordinates(location) }}</dd>
				</div>
			</dl>
			<div v-if="locationFeaturesEnabled && location !== null" class="photo-metadata__map">
				<LocationMap
					height="200px"
					:latitude="location.latitude"
					:longitude="location.longitude"
					:name="metadata?.place || photo.basename" />
			</div>
			<p v-if="exifEntries.length === 0 && location === null" class="photo-metadata__empty">
				{{ t('photos', 'No camera metadata available.') }}
			</p>
		</template>
	</NcDialog>
</template>

<script lang="ts" setup>
import type { PhotoExif } from '../utils/exif.ts'
import type { PhotoTarget } from '../utils/fileUtils.ts'

import { getCanonicalLocale, translate as t } from '@nextcloud/l10n'
import { computed, defineAsyncComponent, onMounted, ref } from 'vue'
import NcDialog from '@nextcloud/vue/components/NcDialog'
import NcLoadingIcon from '@nextcloud/vue/components/NcLoadingIcon'
import { fetchPhotoExif } from '../services/exifFetcher.ts'
import { locationFeaturesEnabled } from '../services/LocationFeatures.ts'
import { formatCoordinates, getExifSummary, getPhotoLocation } from '../utils/exif.ts'

const props = defineProps<{
	photo: PhotoTarget
}>()

const emit = defineEmits<{
	(event: 'close'): void
}>()

const LocationMap = defineAsyncComponent(() => import('./LocationMap.vue'))
const metadata = ref<PhotoExif | undefined>()
const exifEntries = computed(() => metadata.value === undefined ? undefined : getExifSummary(metadata.value))
const location = computed(() => !locationFeaturesEnabled || metadata.value === undefined ? null : getPhotoLocation(metadata.value.gps))
const takenAt = computed(() => {
	if (metadata.value?.takenAt === undefined) {
		return null
	}
	return new Intl.DateTimeFormat(getCanonicalLocale(), {
		dateStyle: 'medium',
		timeStyle: 'short',
	}).format(new Date(metadata.value.takenAt * 1000))
})

onMounted(async () => {
	metadata.value = await fetchPhotoExif(props.photo)
})
</script>

<style lang="scss" scoped>
.photo-metadata {
	margin: 0;

	&__loading {
		margin: calc(var(--default-grid-baseline) * 4) auto;
	}

	&__entry {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: calc(var(--default-grid-baseline) * 4);
	}

	dt {
		color: var(--color-text-maxcontrast);
	}

	dd {
		margin: 0;
		font-variant-numeric: tabular-nums;
		word-break: break-all;
	}

	&__map {
		margin-block-start: calc(var(--default-grid-baseline) * 4);

		:deep(.location-map) {
			margin: 0;
		}
	}

	&__empty {
		color: var(--color-text-maxcontrast);
	}
}
</style>
