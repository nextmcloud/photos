<template>
	<div class="manage-collaborators">
		<div class="actions">
			<h2 class="sharing-link-list-caption">
				{{ t('photos', 'Link to copy') }}
			</h2>

			<span>{{ albumName }}</span>

			<div v-if="allowPublicLink" class="actions__public-link">
				<div class="actions__sharing-entry">
					<span class="sharing-entry__title">{{ title }}</span>
					<div class="sharing-link">
						<EyeIcon :size="16" />
						{{ canViewText }}
						<CalendarMonthIcon :size="16" />
						<ChevronRightIcon :size="18" />
					</div>
				</div>

				<template v-if="hasPublicLink">
					<NcButton
						:aria-label="t('photos', 'Copy the public link')"
						:title="publicLinkURL"
						:type="publicLinkCopied ? 'success' : 'secondary'"
						@click="copyPublicLink">
						<template #icon>
							<span :class="publicLinkCopied ? 'icon-checkmark' : 'icon-clipboard'" class="icon" />
						</template>
					</NcButton>

					<NcButton
						:aria-label="t('photos', 'Delete the public link')"
						@click="deletePublicLink">
						<template #icon>
							<span class="icon icon-delete" />
						</template>
					</NcButton>
				</template>

				<NcButton
					v-else
					:aria-label="t('photos', 'Create public link share')"
					@click="createPublicLink">
					{{ t('photos', 'Create new link') }}
				</NcButton>
			</div>

			<div class="actions__slot">
				<slot />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { translate } from '@nextcloud/l10n'
import { generateUrl } from '@nextcloud/router'
import NcButton from '@nextcloud/vue/components/NcButton'

import EyeIcon from 'vue-material-design-icons/EyeCircleOutline.vue'
import ChevronRightIcon from 'vue-material-design-icons/ChevronRight.vue'
import CalendarMonthIcon from 'vue-material-design-icons/CalendarMonth.vue'

export default {
	name: 'AlbumShare',

	components: {
		NcButton,
		EyeIcon,
		ChevronRightIcon,
		CalendarMonthIcon,
	},

	props: {
		albumName: {
			type: String,
			required: true,
		},
		allowPublicLink: {
			type: Boolean,
			default: true,
		},
	},

	data() {
		return {
			publicLinkId: '',
			publicLinkCopied: false,
		}
	},

	computed: {
		hasPublicLink(): boolean {
			return this.publicLinkId !== ''
		},

		publicLinkURL(): string {
			return `${window.location.protocol}//${window.location.host}${generateUrl(
				`apps/photos/public/${this.publicLinkId}`,
			)}`
		},

		title(): string {
			return this.t('files_sharing', 'Share link')
		},

		canViewText(): string {
			return this.t('nmcsharing', 'Anyone with the link can only view')
		},
	},

	methods: {
		async createPublicLink() {
			// placeholder: actual creation logic belongs here
			this.publicLinkId = 'generated-id'
		},

		async deletePublicLink() {
			this.publicLinkId = ''
			this.publicLinkCopied = false
		},

		async copyPublicLink() {
			await navigator.clipboard.writeText(this.publicLinkURL)
			this.publicLinkCopied = true
			setTimeout(() => (this.publicLinkCopied = false), 3000)
		},

		t: translate,
	},
}
</script>

<style scoped>
.manage-collaborators {
	padding: 20px;
}

.actions {
	display: flex;
	align-items: center;
	gap: 8px;
}

.actions__public-link {
	display: flex;
	align-items: center;
	gap: 8px;
}

.actions__slot {
	margin-left: auto;
}
</style>
