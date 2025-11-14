<!--
  - SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<div class="manage-collaborators">
		<div class="actions">
			<h2 class="sharing-link-list-caption">
				{{ t('photos', 'Link to copy') }}
			</h2>
			<span>{{ albumName }}</span>
			<div v-if="allowPublicLink" class="actions__public-link">
				<div class="actions__sharing-entry">
					<span class="sharing-entry__title" v-html="title"></span>
					<SharingInputDetailsLink :file-info="{}"
								:disabled="true"
								:share.sync="share" />
				</div>
				<template v-if="isPublicLinkSelected && publicLink.id !== ''">
					<NcButton class="manage-collaborators__public-link-button"
						:aria-label="t('photos', 'Copy the public link')"
						:title="publicLinkURL"
						:type="publicLinkCopied ? 'success' : 'secondary'"
						@click="copyPublicLink">
						<template v-if="publicLinkCopied" #icon>
							<span class="icon icon-checkmark"></span>
						</template>
						<template #icon v-else>
							<span class="icon icon-clipboard"></span>
						</template>
					</NcButton>
					<NcButton :aria-label="t('photos', 'Delete the public link')"
						@click="deletePublicLink">
						<template #icon>
							<span class="icon icon-delete" />
						</template>
					</NcButton>
				</template>
				<NcButton v-else
					:disabled="isPublicLinkSelected && publicLink.id === ''"
					:aria-label="t('photos', 'Create public link share')"
					class="manage-collaborators__public-link-button"
					@click="createPublicLinkForAlbum">
					{{ t('photos', 'Create new link') }}
				</NcButton>
			</div>

			<div class="actions__slot">
				<slot :collaborators="selectedCollaborators" />
			</div>
		</div>
	</div>
</template>
<script>
import { mapActions } from 'vuex'

import Close from 'vue-material-design-icons/Close.vue'
import Check from 'vue-material-design-icons/Check.vue'
import ContentCopy from 'vue-material-design-icons/ContentCopy.vue'
import AccountGroup from 'vue-material-design-icons/AccountGroup.vue'
import Earth from 'vue-material-design-icons/Earth.vue'
import AccountGroupSvg from '@mdi/svg/svg/account-group.svg'

import axios from '@nextcloud/axios'
import { showError, showSuccess } from '@nextcloud/dialogs'
import { getCurrentUser } from '@nextcloud/auth'
import { generateOcsUrl, generateUrl } from '@nextcloud/router'
import { NcButton, NcListItemIcon, NcSelect } from '@nextcloud/vue'
import { Type } from '@nextcloud/sharing'
import { translate } from '@nextcloud/l10n'

import logger from '../../services/logger.js'
import FetchCollectionContentMixin from '../../mixins/FetchCollectionContentMixin.js'
import QuickShareSelect from '../../../../nmcsharing/src/components/SharingEntryQuickShareSelect.vue'
import SharingInputDetailsLink from '../../../../nmcsharing/src/components/SharingInputDetailsLink.vue'

/**
 * @typedef {object} Collaborator
 * @property {string} id - The id of the collaborator.
 * @property {string} label - The label of the collaborator for display.
 * @property {Type.SHARE_TYPE_USER|Type.SHARE_TYPE_GROUP|Type.SHARE_TYPE_LINK} type - The type of the collaborator.
 */

/**
 * @typedef {Collaborator} SearchResult
 * @property {string} key
 * @property {string} displayName - The label of the collaborator for display.
 * @property {Element} [iconSvg] - An icon to differentiate the collaborator type.
 */

export default {
	name: 'CollaboratorsSelectionForm',

	components: {
		Close,
		AccountGroup,
		ContentCopy,
		Check,
		Earth,
		NcButton,
		NcListItemIcon,
		NcSelect,
		QuickShareSelect,
		SharingInputDetailsLink,
	},

	mixins: [FetchCollectionContentMixin],

	props: {
		albumName: {
			type: String,
			required: true,
		},

		/** @type {import('vue').PropType<import('../../store/albums.js').Collaborator[]>} */
		collaborators: {
			type: Array,
			default: () => [],
		},

		allowPublicLink: {
			type: Boolean,
			default: true,
		},
	},

	data() {
		return {
			searchText: null,
			/** @type {import('../../store/albums.js').IndexedCollaborators} */
			availableCollaborators: {},
			/** @type {string[]} */
			selectedCollaboratorsKeys: [],
			/** @type {import('../../store/albums.js').Collaborator[]} */
			currentSearchResults: [],
			loadingCollaborators: false,
			randomId: Math.random().toString().substring(2, 10),
			publicLinkCopied: false,
			collaboratorTypes: Type,
			config: {
				minSearchStringLength: parseInt(OC.config['sharing.minSearchStringLength'], 10) || 0,
			},
			share: { 
				permissions: 1,
				expireDate: new Date(Date.now() - 86400000).toISOString().split('T')[0] + " 00:00:00",
			}
		}
	},

	computed: {
		/**
		 * @return {SearchResult[]}
		 */
		searchResults() {
			return this.currentSearchResults
				.filter(({ id }) => id !== getCurrentUser().uid)
				.map((collaborator) => {
					return {
						...collaborator,
						key: `${collaborator.type}:${collaborator.id}`,
						iconSvg: collaborator.type === Type.SHARE_TYPE_GROUP ? AccountGroupSvg : undefined,
					}
				})
				.filter(({ key }) => !this.selectedCollaboratorsKeys.includes(key))
		},

		/**
		 * @return {string[]}
		 */
		listableSelectedCollaboratorsKeys() {
			return this.selectedCollaboratorsKeys
				.filter(collaboratorKey => this.availableCollaborators[collaboratorKey].type !== Type.SHARE_TYPE_LINK)
		},

		/**
		 * @return {import('../../store/albums.js').Collaborator[]}
		 */
		selectedCollaborators() {
			return this.selectedCollaboratorsKeys
				.map((collaboratorKey) => this.availableCollaborators[collaboratorKey])
		},

		/**
		 * @return {boolean}
		 */
		isPublicLinkSelected() {
			return this.selectedCollaboratorsKeys.includes(`${Type.SHARE_TYPE_LINK}`)
		},

		/** @return {import('../../store/albums.js').Collaborator} */
		publicLink() {
			return this.availableCollaborators[Type.SHARE_TYPE_LINK]
		},

		/** @return {string} */
		publicLinkURL() {
			return `${window.location.protocol}//${window.location.host}${generateUrl(`apps/photos/public/${this.publicLink.id}`)}`
		},

		/**
		 * @return {string} The album's filename based on its name. Useful to fetch the location information and content.
		 */
		albumFileName() {
			return this.$store.getters.getAlbumName(this.albumName)
		},

		/**
		 * Link share label
		 *
		 * @return {string}
		 */
		title() {
			// if we have a valid existing share (not pending)
			if (this.share && this.share.id) {
				if (!this.isShareOwner && this.share.ownerDisplayName) {
					if (this.isEmailShareType) {
						return t('files_sharing', '{shareWith} by {initiator}', {
							shareWith: this.share.shareWith,
							initiator: this.share.ownerDisplayName,
						})
					}
					return t('files_sharing', 'Shared via link by {initiator}', {
						initiator: this.share.ownerDisplayName,
					})
				}
				if (this.share.label && this.share.label.trim() !== '') {
					if (this.isEmailShareType) {
						return t('files_sharing', 'Mail share ({label})', {
							label: this.share.label.trim(),
						})
					}
					return t('files_sharing', 'Share link ({label})', {
						label: this.share.label.trim(),
					})
				}
				if (this.isEmailShareType) {
					return this.share.shareWith
				}
			}
			if (this.index > 1) {
				return t('files_sharing', 'Share link ({index})', { index: this.index })
			}
			return t('files_sharing', 'Share link')
		},
	},

	watch: {
		collaborators(collaborators) {
			this.populateCollaborators(collaborators)
		},
	},

	mounted() {
		this.populateCollaborators(this.collaborators)
	},

	methods: {
		...mapActions(['updateCollection']),

		/**
		 * Fetch possible collaborators.
		 *
		 * @param {string} query
		 */
		async searchCollaborators(query) {
			if (query === undefined) {
				return
			}

			query = query.trim()

			if (query.length < this.config.minSearchStringLength) {
				return
			}

			try {
				this.loadingCollaborators = true
				const response = await axios.get(generateOcsUrl('core/autocomplete/get'), {
					params: {
						search: query,
						itemType: 'share-recipients',
						shareTypes: [
							Type.SHARE_TYPE_USER,
							Type.SHARE_TYPE_GROUP,
						],
					},
				})

				this.currentSearchResults = response.data.ocs.data
					.map(collaborator => {
						switch (collaborator.source) {
						case 'users':
							return { id: collaborator.id, label: collaborator.label, type: Type.SHARE_TYPE_USER }
						case 'groups':
							return { id: collaborator.id, label: collaborator.label, type: Type.SHARE_TYPE_GROUP }
						default:
							throw new Error(`Invalid collaborator source ${collaborator.source}`)
						}
					})

				this.availableCollaborators = {
					...this.availableCollaborators,
					...this.currentSearchResults.reduce(this.indexCollaborators, {}),
				}
			} catch (error) {
				this.errorFetchingCollaborators = error
				logger.error(t('photos', 'Failed to fetch collaborators list.'), error)
				showError(t('photos', 'Failed to fetch collaborators list.'))
			} finally {
				this.loadingCollaborators = false
			}
		},

		/**
		 * Populate selectedCollaboratorsKeys and availableCollaborators.
		 *
		 * @param {import('../../store/albums.js').Collaborator[]} collaborators - The list of collaborators
		 */
		populateCollaborators(collaborators) {
			const initialCollaborators = collaborators.reduce(this.indexCollaborators, {})
			this.selectedCollaboratorsKeys = Object.keys(initialCollaborators)
			this.availableCollaborators = {
				3: {
					id: '',
					label: t('photos', 'Public link'),
					type: Type.SHARE_TYPE_LINK,
				},
				...this.availableCollaborators,
				...initialCollaborators,
			}
		},

		/**
		 * @param {import('../../store/albums.js').IndexedCollaborators} collaborators - Index of collaborators
		 * @param {import('../../store/albums.js').Collaborator} collaborator - A collaborator
		 */
		indexCollaborators(collaborators, collaborator) {
			return { ...collaborators, [`${collaborator.type}${collaborator.type === Type.SHARE_TYPE_LINK ? '' : ':'}${collaborator.type === Type.SHARE_TYPE_LINK ? '' : collaborator.id}`]: collaborator }
		},

		async createPublicLinkForAlbum() {
			this.selectEntity(`${Type.SHARE_TYPE_LINK}`)
			await this.updateAlbumCollaborators()
			await this.fetchCollection(
				this.albumFileName,
				['<nc:location />', '<nc:dateRange />', '<nc:collaborators />']
			)
			showSuccess(t('photos', 'Link created'))
		},

		async deletePublicLink() {
			this.unselectEntity(`${Type.SHARE_TYPE_LINK}`)
			this.availableCollaborators[3] = {
				id: '',
				label: t('photos', 'Public link'),
				type: Type.SHARE_TYPE_LINK,
			}
			this.publicLinkCopied = false
			await this.updateAlbumCollaborators()
			showSuccess(t('photos', 'Link deleted'))
		},

		async updateAlbumCollaborators() {
			try {
				await this.updateCollection({
					collectionFileName: this.albumFileName,
					properties: {
						collaborators: this.selectedCollaborators,
					},
				})
			} catch (error) {
				logger.error('[PublicAlbumContent] Error updating album', { error })
				showError(this.t('photos', 'Failed to update album.'))
			}
		},

		async copyPublicLink() {
			await navigator.clipboard.writeText(this.publicLinkURL)
			showSuccess(t('photos', 'Link copied'))
			this.publicLinkCopied = true
			setTimeout(() => {
				this.publicLinkCopied = false
			}, 10000)
		},

		selectEntity(collaboratorKey) {
			this.searchText = null

			if (this.selectedCollaboratorsKeys.includes(collaboratorKey)) {
				return
			}

			this.selectedCollaboratorsKeys.push(collaboratorKey)
		},

		unselectEntity(collaboratorKey) {
			const index = this.selectedCollaboratorsKeys.indexOf(collaboratorKey)

			if (index === -1) {
				return
			}

			this.selectedCollaboratorsKeys.splice(index, 1)
		},

		t: translate,
	},
}
</script>
<style lang="scss" scoped>
.manage-collaborators {
	display: flex;
	flex-direction: column;
	padding: 20px;
	height: 500px;

	&__title {
		font-weight: bold;
	}

	&__subtitle {
		color: var(--color-text-lighter);
	}

	&__public-link-button {
		margin: 4px 0;
	}

	&__form {
		margin-top: 4px 0;
		display: flex;
		flex-direction: column;

		&__input {
			position: relative;
			display: block;

			input {
				width: 100%;
				padding-left: 34px;
			}

			.loading-icon {
				position: absolute;
				top: calc(36px / 2 - 20px / 2);
				right: 8px;
			}
		}

		&__list {
			padding: 8px;
			height: 350px;
			overflow: scroll;

			&__result {
				padding: 8px;
				border-radius: 100px;
				box-sizing: border-box;

				&, & * {
					cursor: pointer !important;
				}

				&:hover {
					background: var(--color-background-dark);
				}
			}

			&--empty {
				margin: 100px 0;
			}
		}
	}

	&__selection {
		display: flex;
		flex-direction: column;
		margin-top: 32px;
		flex-grow: 1;

		&__item {
			border-radius: var(--border-radius-pill);
			padding:  0 8px;

			&:hover {
				background: var(--color-background-dark);
			}

			:deep(.option) {
				gap: 4px;
			}
		}
	}

	.actions {
		display: flex;
		margin-top: 8px;

		&__public-link {
			display: flex;
			align-items: center;

			button {
				margin-left: 8px;
			}
		}

		&__slot {
			flex-grow: 1;
			display: flex;
			justify-content: flex-end;
			align-items: center;
		}
	}
}
</style>
