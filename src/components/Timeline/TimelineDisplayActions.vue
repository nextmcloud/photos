<!--
  - SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->

<template>
	<NcActions
		:aria-label="t('photos', 'Change tile size')"
		variant="tertiary"
		data-cy-header-action="density">
		<template #icon>
			<MagnifyMinusOutline v-if="gridDensity === 'large'" :size="20" />
			<MagnifyPlusOutline v-else :size="20" />
		</template>

		<NcActionRadio
			name="photos-density"
			value="small"
			:modelValue="gridDensity"
			@update:modelValue="updateGridDensity">
			{{ t('photos', 'Small tiles') }}
		</NcActionRadio>

		<NcActionRadio
			name="photos-density"
			value="medium"
			:modelValue="gridDensity"
			@update:modelValue="updateGridDensity">
			{{ t('photos', 'Default') }}
		</NcActionRadio>

		<NcActionRadio
			name="photos-density"
			value="large"
			:modelValue="gridDensity"
			@update:modelValue="updateGridDensity">
			{{ t('photos', 'Large tiles') }}
		</NcActionRadio>
	</NcActions>

	<NcButton
		:aria-label="t('photos', 'Enable squared photos view')"
		variant="tertiary"
		@click="emit('update:cropped-layout', !croppedLayout)">
		<template #icon>
			<ViewGridOutline v-if="croppedLayout" />
			<ViewDashboardOutline v-else />
		</template>
	</NcButton>
</template>

<script setup lang="ts">
import { t } from '@nextcloud/l10n'
import NcActionRadio from '@nextcloud/vue/components/NcActionRadio'
import NcActions from '@nextcloud/vue/components/NcActions'
import NcButton from '@nextcloud/vue/components/NcButton'
import MagnifyMinusOutline from 'vue-material-design-icons/MagnifyMinusOutline.vue'
import MagnifyPlusOutline from 'vue-material-design-icons/MagnifyPlusOutline.vue'
import ViewDashboardOutline from 'vue-material-design-icons/ViewDashboardOutline.vue'
import ViewGridOutline from 'vue-material-design-icons/ViewGridOutline.vue'

defineProps<{
	gridDensity: string
	croppedLayout: boolean
}>()

const emit = defineEmits<{
	'update:grid-density': [value: string]
	'update:cropped-layout': [value: boolean]
}>()

function updateGridDensity(value: string): void {
	emit('update:grid-density', value)
}
</script>
