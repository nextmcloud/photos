import { loadState } from '@nextcloud/initial-state'

export const locationFeaturesEnabled = loadState<boolean>(
	'photos',
	'locationFeaturesEnabled',
	false,
)
