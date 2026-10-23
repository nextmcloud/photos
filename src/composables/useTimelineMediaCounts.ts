/*!
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { Ref } from 'vue'

import { t } from '@nextcloud/l10n'
import { computed, onUnmounted, ref } from 'vue'
import { logger } from '../services/logger.ts'
import { getPhotos } from '../services/PhotoSearch.ts'
import { formatMonth, formatYear, toMonthKey } from '../utils/dateUtils.ts'

type GetPhotosOptions = Parameters<typeof getPhotos>[0]
type TimelineFilters = GetPhotosOptions['extraFilters']

const MEDIA_COUNT_BATCH_SIZE = 2000

export function useTimelineMediaCounts(options: {
	mimesType: Readonly<Ref<string[]>>
	onThisDay: Readonly<Ref<boolean>>
	onlyFavorites: Readonly<Ref<boolean>>
	filtersQuery: Readonly<Ref<TimelineFilters>>
	hasNoSourceFolders: Readonly<Ref<boolean>>
}) {
	const mediaCounts = ref<{
		photos: number
		videos: number
		firstMonth: string
		lastMonth: string
	} | null>(null)

	const loadingMediaCounts = ref(false)
	let abortController: AbortController | undefined

	const photosCount = computed(() => mediaCounts.value?.photos ?? 0)
	const videosCount = computed(() => mediaCounts.value?.videos ?? 0)

	const dateCreated = computed<string>(() => {
		const firstMonth = mediaCounts.value?.firstMonth ?? ''
		const lastMonth = mediaCounts.value?.lastMonth ?? ''

		if (firstMonth === '' || lastMonth === '') {
			return ''
		}

		const firstFormatted = `${formatMonth(firstMonth)} ${formatYear(firstMonth)}`
		const lastFormatted = `${formatMonth(lastMonth)} ${formatYear(lastMonth)}`

		return firstFormatted === lastFormatted
			? firstFormatted
			: `${firstFormatted} ${t('photos', 'to')} ${lastFormatted}`
	})

	async function loadMediaCounts(): Promise<void> {
		abortController?.abort()

		if (options.hasNoSourceFolders.value) {
			abortController = undefined
			mediaCounts.value = null
			loadingMediaCounts.value = false
			return
		}

		abortController = new AbortController()
		const signal = abortController.signal

		mediaCounts.value = null
		loadingMediaCounts.value = true

		let firstResult = 0
		let photos = 0
		let videos = 0
		let firstTimestamp: number | null = null
		let lastTimestamp: number | null = null

		try {
			while (true) {
				const result = await getPhotos({
					firstResult,
					nbResults: MEDIA_COUNT_BATCH_SIZE,
					mimesType: options.mimesType.value,
					onThisDay: options.onThisDay.value,
					onlyFavorites: options.onlyFavorites.value,
					extraFilters: options.filtersQuery.value,
					signal,
				})

				for (const file of result) {
					if (file.mime?.startsWith('image/')) {
						photos++
					} else if (file.mime?.startsWith('video/')) {
						videos++
					} else {
						continue
					}

					const date = new Date(
						(file.attributes['metadata-photos-original_date_time'] * 1000)
						|| file.mtime
						|| Date.now(),
					)
					const timestamp = date.getTime()

					if (firstTimestamp === null || timestamp < firstTimestamp) {
						firstTimestamp = timestamp
					}

					if (lastTimestamp === null || timestamp > lastTimestamp) {
						lastTimestamp = timestamp
					}
				}

				if (result.length < MEDIA_COUNT_BATCH_SIZE) {
					break
				}

				firstResult += MEDIA_COUNT_BATCH_SIZE
			}

			if (!signal.aborted) {
				mediaCounts.value = {
					photos,
					videos,
					firstMonth: firstTimestamp === null
						? ''
						: toMonthKey(new Date(firstTimestamp)),
					lastMonth: lastTimestamp === null
						? ''
						: toMonthKey(new Date(lastTimestamp)),
				}
			}
		} catch (error) {
			if (error instanceof DOMException && error.name === 'AbortError') {
				return
			}

			logger.error('Failed to count timeline media', { error })
		} finally {
			if (!signal.aborted) {
				loadingMediaCounts.value = false
			}
		}
	}

	function resetMediaCounts(): void {
		abortController?.abort()
		abortController = undefined
		mediaCounts.value = null
		loadingMediaCounts.value = false
	}

	onUnmounted(() => {
		abortController?.abort()
		abortController = undefined
	})

	return {
		photosCount,
		videosCount,
		dateCreated,
		loadingMediaCounts,
		loadMediaCounts,
		resetMediaCounts,
	}
}
