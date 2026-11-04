/**
 * SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { File } from '@nextcloud/files'
import type { Ref } from 'vue'
import type { WebDAVClientError } from 'webdav'
import type { PhotoSearchOptions } from '../services/PhotoSearch.ts'

import { showError } from '@nextcloud/dialogs'
import { defaultRootPath } from '@nextcloud/files/dav'
import { t } from '@nextcloud/l10n'
import { join } from '@nextcloud/paths'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { davClient } from '../services/DavClient.ts'
import { getErrorBody } from '../services/DavResponse.ts'
import { logger } from '../services/logger.ts'
import { getPhotos } from '../services/PhotoSearch.ts'
import { useFilesStore } from '../store/files.ts'
import { useUserConfigStore } from '../store/userConfig.ts'
import { SemaphoreWithPriority } from '../utils/semaphoreWithPriority.ts'
import { useAbortController } from './useAbortController.ts'

const numberOfImagesPerBatch = 200

export function useFetchFiles(): {
	fetchFiles: (options?: Partial<PhotoSearchOptions>, filter?: (file: File) => boolean, force?: boolean) => Promise<number[]>
	resetFetchFilesState: () => void
	fetchedFileIds: Ref<number[]>
	loadingFiles: Ref<boolean>
	doneFetchingFiles: Ref<boolean>
	errorFetchingFiles: Ref<null | number | Error>
} {
	const route = useRoute()
	const filesStore = useFilesStore()
	const userConfigStore = useUserConfigStore()
	const { abortSignal, abortPendingRequest } = useAbortController()

	const fetchSemaphore = new SemaphoreWithPriority(1)
	const fetchedFileIds = ref<number[]>([])
	const loadingFiles = ref(false)
	const doneFetchingFiles = ref(false)
	const errorFetchingFiles = ref<null | number | Error>(null)

	async function fetchFiles(
		options: Partial<PhotoSearchOptions> = {},
		filter?: (file: File) => boolean,
		force: boolean = false,
	): Promise<number[]> {
		if ((doneFetchingFiles.value && !force) || loadingFiles.value) {
			return []
		}

		const signal = abortSignal.value
		const fetchSemaphoreSymbol = await fetchSemaphore.acquire()

		try {
			errorFetchingFiles.value = null
			loadingFiles.value = true

			let fetchedFiles = await getPhotos({
				firstResult: fetchedFileIds.value.length,
				nbResults: numberOfImagesPerBatch,
				...options,
				signal,
			})

			if (fetchedFiles.length !== numberOfImagesPerBatch) {
				doneFetchingFiles.value = true
			}

			if (filter !== undefined) {
				fetchedFiles = fetchedFiles.filter(filter)
			}

			const fileIds = fetchedFiles
				.map((file) => file.fileid as number)
				.filter((fileId) => !fetchedFileIds.value.includes(fileId))

			fetchedFileIds.value.push(...fileIds)
			filesStore.appendFiles(fetchedFiles)

			logger.debug(`[useFetchFiles] Fetched ${fileIds.length} new files: `, { fileIds })

			return fileIds
		} catch (error) {
			if ((error as WebDAVClientError).response?.status === 404) {
				const { photosLocation, photosSourceFolders } = userConfigStore
				const errorBody = await getErrorBody(error)
				const missingFolder = photosSourceFolders.find(
					(source) => errorBody.includes(`File with name ${source} could not be located`),
				)

				if (missingFolder !== undefined) {
					if (missingFolder === photosLocation) {
						logger.debug(`The ${missingFolder} folder does not exist, creating it.`)

						try {
							await davClient.createDirectory(join(defaultRootPath, missingFolder))
							resetFetchFilesState()
							return []
						} catch (createError) {
							errorFetchingFiles.value = 404
							logger.error('Fail to create source directory', { error: createError })
						}
					} else {
						logger.info(`The ${missingFolder} media folder does not exist. Removing it from media folders.`)

						const updatedSourceFolders = photosSourceFolders.filter(
							(source) => source !== missingFolder,
						)

						try {
							await userConfigStore.updateUserConfig('photosSourceFolders', updatedSourceFolders)
							return []
						} catch (updateError) {
							errorFetchingFiles.value = updateError as Error
							logger.error('Failed to remove missing media folder from Photos settings', {
								error: updateError,
								folder: missingFolder,
							})
						}
					}
				} else {
					errorFetchingFiles.value = error as Error
				}
			} else if (error instanceof DOMException && error.code === error.ABORT_ERR) {
				return []
			} else {
				errorFetchingFiles.value = error as Error
			}

			showError(t('photos', 'Error fetching files'))
			logger.error(t('photos', 'Error fetching files'), { error })
		} finally {
			loadingFiles.value = false
			fetchSemaphore.release(fetchSemaphoreSymbol)
		}

		return []
	}

	function resetFetchFilesState(): void {
		abortPendingRequest()
		doneFetchingFiles.value = false
		errorFetchingFiles.value = null
		loadingFiles.value = false
		fetchedFileIds.value = []
	}

	watch(() => route.path, resetFetchFilesState)

	return {
		fetchFiles,
		resetFetchFilesState,
		fetchedFileIds,
		loadingFiles,
		doneFetchingFiles,
		errorFetchingFiles,
	}
}
