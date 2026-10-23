<!--
 - SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
 - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<div class="files-list-viewer">
		<div
			v-if="emptyMessage !== '' && photosCount === 0 && !loading"
			:key="routeName"
			class="timeline__empty-content">
			<div class="empty-collection-content" :data-title="routeName">
				<div class="empty-content__wrapper">
					<div class="empty-content__image" />
				</div>
				<div class="empty-content__name">
					{{ emptyName }}
				</div>
				<div class="empty-content__action">
					{{ emptyAction }}
				</div>
				<NcButton
					ref="newAlbumButton"
					:aria-label="emptyMessage"
					data-cy-header-action="create-album"
					variant="primary"
					@click="emit('add-collection', true)">
					{{ emptyMessage }}
					<template #icon>
						<PlusBoxMultipleOutline />
					</template>
				</NcButton>
			</div>
		</div>

		<TiledLayout
			:baseHeight="baseHeight"
			:sections="itemsBySections"
			:fixedSize="croppedLayout">
			<template #default="{ tiledSections }">
				<VirtualScrolling
					:useWindow="useWindow"
					:containerElement="containerElement"
					:sections="tiledSections"
					:scrollToKey="scrollToSection"
					:headerHeight="sectionHeaderHeight"
					@need-content="needContent">
					<template #default="{ visibleSections }">
						<div v-for="section of visibleSections" :key="section.id">
							<template v-if="section.id !== ''">
								<!-- Placeholder when initial loading -->
								<div
									v-if="showPlaceholders"
									class="files-list-viewer__placeholder"
									:style="{ 'flex-basis': '100%', height: `${sectionHeaderHeight}px` }" />
								<!-- Real file. -->
								<slot
									v-else
									:file="{ id: section.id }"
									:isHeader="true"
									class="files-list-viewer__section-header"
									:style="{ 'flex-basis': '100%', height: `${sectionHeaderHeight}px` }" />
							</template>

							<ul>
								<template v-for="(row, rowIndex) of section.rows" :key="row.key">
									<!--
									We are subtracting 1 from flex-basis to compensate for rounding issues.
									The flex algo will then compensate with flex-grow.
									'last-tiled-row' prevents the last row's items from growing.
								-->
									<li
										v-for="item of row.items"
										:key="item.key"
										:class="{ 'last-tiled-rows': rowIndex === section.rows.length - 1 }"
										:style="{ 'flex-basis': `${item.width - 1}px`, height: `${item.height}px` }">
										<!-- Placeholder when initial loading -->
										<div v-if="showPlaceholders" class="files-list-viewer__placeholder" />
										<!-- Real file. -->
										<slot v-else :file="item" />
									</li>
								</template>
							</ul>
						</div>
					</template>
					<template #loader>
						<NcLoadingIcon v-if="loading && !showPlaceholders" class="files-list-viewer__loader" />
					</template>
				</VirtualScrolling>
			</template>
		</TiledLayout>
	</div>
</template>

<script setup lang="ts">
import type { File, Node } from '@nextcloud/files'
import type { TiledItem } from '../services/TiledLayout.ts'
import type { PhotoFile } from '../store/files.ts'

import { subscribe, unsubscribe } from '@nextcloud/event-bus'
import { t } from '@nextcloud/l10n'
import { computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcLoadingIcon from '@nextcloud/vue/components/NcLoadingIcon'
import PlusBoxMultipleOutline from 'vue-material-design-icons/PlusBoxMultipleOutline.vue'
import TiledLayout from '../components/TiledLayout/TiledLayout.vue'
import VirtualScrolling from '../components/VirtualScrolling.vue'
import { fetchFile } from '../services/fileFetcher.ts'
import { useFilesStore } from '../store/files.ts'
import { useUserConfigStore } from '../store/userConfig.ts'

const props = withDefaults(defineProps<{
	// Array of file ids that should be rendered.
	fileIds?: string[]
	// An object mapping a list of section to a list of fileIds.
	fileIdsBySection?: Record<string, string[]>
	// The list of sorted sections.
	sections?: string[]
	// Whether we should display a loading indicator.
	loading?: boolean
	// Message to display when there is no files.
	emptyMessage?: string
	// The base height to forward to TileLayout.
	baseHeight?: number
	// The height to use for section headers.
	sectionHeaderHeight?: number
	// Instruct VirtualScrolling to scroll to the given section id.
	scrollToSection?: string
	// The containerElement props to forward to TileLayout.
	containerElement?: HTMLElement | null
	// The useWindow props to forward to TileLayout.
	useWindow?: boolean
}>(), {
	fileIds: undefined,
	fileIdsBySection: undefined,
	sections: undefined,
	loading: false,
	emptyMessage: '',
	baseHeight: 200,
	sectionHeaderHeight: 75,
	scrollToSection: '',
	containerElement: null,
	useWindow: false,
})

const emit = defineEmits<{
	needContent: []
	'add-collection': [value: boolean]
}>()

defineSlots<{
	// Section headers only carry the section id as file id.
	default(props: { file: Pick<TiledItem, 'id'>, isHeader?: boolean }): unknown
}>()

const route = useRoute()
const filesStore = useFilesStore()
const userConfigStore = useUserConfigStore()

const files = computed<Record<string, PhotoFile>>(() => filesStore.files)

const croppedLayout = computed<boolean>(() => userConfigStore.croppedLayout)

const placeholderFiles: TiledItem[] = Array(20).fill(0).map((_, index) => {
	const height = 200
	const width = croppedLayout.value ? height : height * (1 + Math.random() * 2)
	return {
		id: index.toString(),
		width,
		height,
		ratio: width / height,
	}
})

const showPlaceholders = computed<boolean>(() => props.loading && (props.fileIds?.length === 0 || props.sections?.length === 0))

const itemsBySections = computed<{ id: string, items: TiledItem[] }[]>(() => {
	if (props.fileIds !== undefined) {
		if (showPlaceholders.value) {
			return [{ id: '', items: placeholderFiles }]
		}

		return [
			{
				id: '',
				items: props.fileIds
					.filter((fileId) => files.value[fileId])
					.map(mapFileToItem),
			},
		]
	}

	if (props.sections !== undefined) {
		if (showPlaceholders.value) {
			return [{ id: 'placeholder', items: placeholderFiles }]
		}

		return props.sections.map((sectionId) => {
			return {
				id: sectionId,
				items: (props.fileIdsBySection?.[sectionId] ?? [])
					.filter((fileId) => files.value[fileId])
					.map(mapFileToItem),
			}
		})
	}

	return []
})

const photosCount = computed<number>(() => itemsBySections.value
	.map(({ items }) => items.length)
	.reduce((total, length) => total + length, 0))

const routeName = computed<string>(() => route.name?.toString() ?? '')

const emptyName = computed<string>(() => {
	if (routeName.value === 'photos') {
		return t('photos', 'No photos available yet.')
	}

	if (routeName.value === 'videos') {
		return t('photos', 'No videos available yet.')
	}

	return t('photos', 'No media available yet.')
})

const emptyAction = computed<string>(() => {
	if (routeName.value === 'photos') {
		return t('photos', 'Create an album and add your photos there.')
	}

	if (routeName.value === 'videos') {
		return t('photos', 'Create an album and add your videos there.')
	}

	return t('photos', 'Create an album and add your media there.')
})

// Ask the parent for more content.
function needContent(): void {
	emit('needContent')
}

function mapFileToItem(fileId: string): TiledItem {
	const file = files.value[fileId] as File
	const isVideo = file.mime?.startsWith('video/')
	const metadata = isVideo
		? (croppedLayout.value ? { width: 100, height: 200 } : { width: 200, height: 400 })
		: file.attributes['metadata-photos-size']

	return {
		id: file.fileid?.toString() as string,
		width: metadata.width,
		height: metadata.height,
		ratio: croppedLayout.value ? 1 : metadata.width / metadata.height,
	}
}

async function handleFileUpdated({ fileid }: Node): Promise<void> {
	const fetchedFile = await fetchFile(files.value[fileid as number].path)
	if (fetchedFile === null) {
		return
	}

	filesStore.appendFiles([fetchedFile as File])
}

function handleFileDeleted({ fileid }: Node): void {
	filesStore.deleteFile(fileid as number)
}

onMounted(() => {
	subscribe('files:node:updated', handleFileUpdated)
	subscribe('files:node:deleted', handleFileDeleted)
})

onUnmounted(() => {
	unsubscribe('files:node:updated', handleFileUpdated)
	unsubscribe('files:node:deleted', handleFileDeleted)
})
</script>

<style lang="scss" scoped>
.files-list-viewer {
	height: 100%;
	position: relative;

	&__placeholder {
		background: var(--color-primary-element-light);
		width: 100%;
		height: 100%;
		border: 2px solid var(--color-main-background); // Use border so create a separation between images.
	}

	.tiled-container {
		flex-basis: 0;
	}

	ul {
		display: flex;
		flex-wrap: wrap;

		li:not(.last-tiled-rows) {
			flex-grow: 1;
		}
	}

	&__section-header {
		position: sticky;
		top: 0;
		z-index: 3;
		background: var(--color-main-background);
	}

	&__loader {
		margin: 50px 0;
	}
}
</style>
