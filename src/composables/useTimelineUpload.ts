/*!
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { Folder, Node } from '@nextcloud/files'
import type { Ref } from 'vue'

import { FileType } from '@nextcloud/files'
import { defaultRootPath } from '@nextcloud/files/dav'
import { computed, ref, watch } from 'vue'
import { fetchFile } from '../services/fileFetcher.ts'
import { getFolderContent } from '../services/FolderContent.ts'
import { logger } from '../services/logger.ts'
import { useUserConfigStore } from '../store/userConfig.ts'

export function useTimelineUpload(hasNoSourceFolders: Readonly<Ref<boolean>>) {
	const userConfigStore = useUserConfigStore()
	const uploadFolder = ref<Folder | undefined>()

	let requestId = 0

	const photosLocation = computed<string>(() => userConfigStore.photosLocation || '/')

	const uploadFolderPath = computed<string>(() => {
		const location = photosLocation.value
			.replace(/^\/+/, '')
			.replace(/\/+$/, '')

		if (location === '') {
			return defaultRootPath
		}

		return `${defaultRootPath.replace(/\/+$/, '')}/${location}`
	})

	async function fetchUploadFolder(): Promise<void> {
		const currentRequestId = ++requestId

		if (hasNoSourceFolders.value) {
			uploadFolder.value = undefined
			return
		}

		const path = photosLocation.value
		const davPath = uploadFolderPath.value

		try {
			const node = await fetchFile(davPath)

			if (currentRequestId !== requestId) {
				return
			}

			if (node === null || node === undefined || node.type !== FileType.Folder || !node.source) {
				uploadFolder.value = undefined

				logger.error('Invalid Photos upload folder', {
					path,
					davPath,
					node,
				})
				return
			}

			uploadFolder.value = node as Folder

			logger.debug('Photos upload folder resolved', {
				path,
				source: node.source,
			})
		} catch (error) {
			if (currentRequestId !== requestId) {
				return
			}

			uploadFolder.value = undefined

			logger.error('Failed to fetch Photos upload folder', {
				error,
				path,
				davPath,
			})
		}
	}

	async function uploadDestinationContent(): Promise<Node[]> {
		const { folders, files } = await getFolderContent(photosLocation.value)
		return [...folders, ...files]
	}

	watch(
		[photosLocation, hasNoSourceFolders],
		() => {
			void fetchUploadFolder()
		},
		{ immediate: true },
	)

	return {
		uploadFolder,
		uploadDestinationContent,
	}
}
