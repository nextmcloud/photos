import type { Ref } from 'vue'
import type { PhotoFile } from '../store/files.ts'

import { showError } from '@nextcloud/dialogs'
import { t } from '@nextcloud/l10n'
import { onUnmounted, ref } from 'vue'
import { allMimes } from '../services/AllowedMimes.ts'
import { logger } from '../services/logger.ts'
import { getPhotos } from '../services/PhotoSearch.ts'

const BATCH_SIZE = 2000

export function useLoadedPhotos(): {
	photos: Ref<PhotoFile[]>
	loading: Ref<boolean>
	loadPhotos: () => Promise<void>
} {
	const abortController = new AbortController()
	const loading = ref(false)
	const photos = ref<PhotoFile[]>([])

	async function loadPhotos(): Promise<void> {
		if (loading.value) {
			return
		}

		try {
			loading.value = true

			const start = performance.now()
			const loadedPhotos: PhotoFile[] = []
			let firstResult = 0
			let requests = 0

			while (true) {
				const requestStart = performance.now()

				const files = await getPhotos({
					firstResult,
					nbResults: BATCH_SIZE,
					mimesType: allMimes,
					signal: abortController.signal,
				})

				requests++

				for (const file of files) {
					if (file.attributes.hidden) {
						continue
					}

					const date = new Date(
						(file.attributes['metadata-photos-original_date_time'] * 1000)
						|| file.mtime
						|| Date.now(),
					)

					file.attributes.timestamp = Math.floor(date.getTime() / 1000)
					loadedPhotos.push(file as PhotoFile)
				}

				if (files.length < BATCH_SIZE) {
					break
				}

				firstResult += BATCH_SIZE
			}

			photos.value = loadedPhotos
		} catch (error) {
			if (error instanceof DOMException && error.name === 'AbortError') {
				return
			}

			logger.error('Error fetching files', { error })
			showError(t('photos', 'Error fetching files'))
		} finally {
			loading.value = false
		}
	}

	onUnmounted(() => abortController.abort())

	return { photos, loading, loadPhotos }
}
