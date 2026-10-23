<!--
  - SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->

<template>
	<div class="timeline-no-source-folders">
		<NcEmptyContent
			:name="t('photos', 'Choose a media folder')"
			:description="t('photos', 'Select at least one folder in Photos settings to show your photos and videos here.')">
			<template #icon>
				<FolderPlusOutline />
			</template>

			<template #action>
				<NcButton
					variant="primary"
					:aria-label="t('photos', 'Photos settings')"
					@click="emit('open-settings')">
					{{ t('photos', 'Photos settings') }}
				</NcButton>
			</template>
		</NcEmptyContent>
	</div>
</template>

<script setup lang="ts">
import { t } from '@nextcloud/l10n'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcEmptyContent from '@nextcloud/vue/components/NcEmptyContent'
import FolderPlusOutline from 'vue-material-design-icons/FolderPlusOutline.vue'

const emit = defineEmits<{
	'open-settings': []
}>()
</script>

<style lang="scss" scoped>
.timeline-no-source-folders {
	height: 100%;
	flex: 1 1 auto;
	min-height: 0;
}
</style>
