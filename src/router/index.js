/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import { generateUrl } from '@nextcloud/router'
import Router from 'vue-router'
import Vue from 'vue'

import isMapsInstalled from '../services/IsMapsInstalled'
import areTagsInstalled from '../services/AreTagsInstalled'
import { videoMimes } from '../services/AllowedMimes'

const Albums = () => import('../views/Albums')
const Tags = () => import('../views/Tags')
const Timeline = () => import('../views/Timeline')
const Timeline1 = () => import('../views/Timeline1')

Vue.use(Router)

let mapsPath = generateUrl('/apps/maps')
if (!isMapsInstalled) {
	mapsPath = generateUrl('/settings/apps/integration/maps')
}

/**
 * Parse the path of a route : join the elements of the array and return a single string with slashes
 * + always lead current path with a slash
 *
 * @param {string | Array} path path arguments to parse
 * @return {string}
 */
const parsePathParams = (path) => {
	return `/${Array.isArray(path) ? path.join('/') : path || ''}`
}

export default new Router({
	mode: 'history',
	// if index.php is in the url AND we got this far, then it's working:
	// let's keep using index.php in the url
	base: generateUrl('/apps/photos', ''),
	linkActiveClass: 'active',
	routes: [
		{
			path: '/',
			component: Timeline,
			name: 'timeline',
			props: route => ({
				rootTitle: t('photos', 'Your photos'),
			}),
		},
		{
			path: '/gallery/:path*',
			component: Timeline1,
			name: 'timeline1',
			props: route => ({
				path: parsePathParams(route.params.path),
				// if path is empty
				isRoot: !route.params.path,
				rootTitle: t('photos', 'Your gallery'),
			}),
		},
		{
			path: '/albums/:path*',
			component: Albums,
			name: 'albums',
			props: route => ({
				path: parsePathParams(route.params.path),
				// if path is empty
				isRoot: !route.params.path,
				rootTitle: t('photos', 'Your folders'),
			}),
		},
		{
			path: '/shared/:path*',
			component: Albums,
			name: 'shared',
			props: route => ({
				path: parsePathParams(route.params.path),
				// if path is empty
				isRoot: !route.params.path,
				rootTitle: t('photos', 'Shared with you'),
				showShared: true,
			}),
		},
		{
			path: '/videos',
			component: Timeline,
			name: 'videos',
			props: route => ({
				rootTitle: t('photos', 'Your videos'),
				mimesType: videoMimes,
			}),
		},
		{
			path: '/favorites',
			component: Timeline,
			name: 'favorites',
			props: route => ({
				rootTitle: t('photos', 'Favorites'),
				onlyFavorites: true,
			}),
		},
		{
			path: '/tags/:path*',
			component: Tags,
			name: 'tags',
			redirect: !areTagsInstalled ? { name: 'timeline' } : null,
			props: route => ({
				path: `${route.params.path ? route.params.path : ''}`,
				// if path is empty
				isRoot: !route.params.path,
				rootTitle: t('photos', 'Tagged photos'),
			}),
		},
		{
			path: '/maps',
			name: 'maps',
			// router-link doesn't support external url, let's force the redirect
			beforeEnter() {
				window.open(mapsPath, '_blank')
			},
		},
	],
})
