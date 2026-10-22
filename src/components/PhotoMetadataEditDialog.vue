<template>
	<NcDialog
		:name="t('photos', 'Edit metadata')"
		size="normal"
		@update:open="emit('close')">
		<NcLoadingIcon
			v-if="loading"
			:size="32"
			class="metadata-editor__loading" />

		<form
			v-else
			class="metadata-editor"
			@submit.prevent="save">
			<NcDateTimePickerNative
				v-model="takenAt"
				type="datetime-local"
				:label="t('photos', 'Date and time the photo was taken')" />
		</form>

		<template #actions>
			<NcButton
				variant="tertiary"
				:disabled="saving"
				@click="emit('close')">
				{{ t('photos', 'Cancel') }}
			</NcButton>

			<NcButton
				variant="primary"
				:disabled="!canSave"
				@click="save">
				<template v-if="saving" #icon>
					<NcLoadingIcon :size="20" />
				</template>
				{{ t('photos', 'Save') }}
			</NcButton>
		</template>
	</NcDialog>
</template>

<script lang="ts" setup>
import type { PhotoTarget } from '../utils/fileUtils.ts'

import { showError } from '@nextcloud/dialogs'
import { translate as t } from '@nextcloud/l10n'
import { computed, onMounted, ref } from 'vue'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcDateTimePickerNative from '@nextcloud/vue/components/NcDateTimePickerNative'
import NcDialog from '@nextcloud/vue/components/NcDialog'
import NcLoadingIcon from '@nextcloud/vue/components/NcLoadingIcon'
import { fetchPhotoExif } from '../services/exifFetcher.ts'
import { locationFeaturesEnabled } from '../services/LocationFeatures.ts'
import { logger } from '../services/logger.ts'
import { useFilesStore } from '../store/files.ts'

const props = defineProps<{
	photo: PhotoTarget
}>()

const emit = defineEmits<{
	(event: 'close'): void
}>()

const filesStore = useFilesStore()

const loading = ref(true)
const saving = ref(false)
const takenAt = ref<Date | null>(null)

onMounted(async () => {
	const metadata = await fetchPhotoExif(props.photo)

	takenAt.value = metadata.takenAt === undefined
		? new Date()
		: new Date(metadata.takenAt * 1000)

	loading.value = false
})

const canSave = computed(() =>
	!loading.value
	&& !saving.value
	&& takenAt.value !== null,
)

async function save(): Promise<void> {
	const date = takenAt.value
	if (!canSave.value || date === null) {
		return
	}

	saving.value = true

	try {
		await filesStore.updatePhotoMetadata(props.photo, {
			takenAt: Math.floor(date.getTime() / 1000),
		})

		emit('close')
	} catch (error) {
		logger.error('Error saving the metadata of a photo', {
			error,
			filename: props.photo.basename,
		})

		showError(t('photos', 'Failed to save the metadata of {fileName}', {
			fileName: props.photo.basename,
		}))
	} finally {
		saving.value = false
	}
}
</script>

<style lang="scss" scoped>
.metadata-editor {
	display: flex;
	flex-direction: column;
	gap: calc(var(--default-grid-baseline) * 4);

	&__loading {
		margin: calc(var(--default-grid-baseline) * 4) auto;
	}
}
</style>
