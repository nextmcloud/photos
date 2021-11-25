/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

import { genFileInfo } from '../utils/fileUtils'
import { getCurrentUser } from '@nextcloud/auth'
import { allMimes } from './AllowedMimes'
import client from './DavClient'
import { props } from './DavRequest'
import { sizes } from '../assets/grid-sizes'

/**
 * List files from a folder and filter out unwanted mimes
 *
 * @param {boolean} [onlyFavorites=false] not used
 * @param {Object} [options] used for the cancellable requests
 * @param {number} [options.page=0] which page to start (starts at 0)
 * @param {number} [options.perPage] how many to display per page default is 5 times the max number per line from the grid-sizes config file
 * @param {boolean} [options.full=false] get full data of the files
 * @returns {Array} the file list
 */
export default async function(onlyFavorites = false, options = {}) {

	// default function options
	options = Object.assign({}, {
		page: 0, // start at the first page
		perPage:  5 * 6, // ten rows of the max width
		mimesType: allMimes, // all mimes types
	}, options)

	const prefixPath = `/files/${getCurrentUser().uid}`

	// generating the search or condition
	// based on the allowed mimetypes
	const orMime = options.mimesType.reduce((str, mime) => `${str}
		<d:eq>
			<d:prop>
				<d:getcontenttype/>
			</d:prop>
			<d:literal>${mime}</d:literal>
		</d:eq>
	`, '')

	const eqFavorites = onlyFavorites
		? `<d:eq>
				<d:prop>
					<oc:favorite/>
				</d:prop>
				<d:literal>1</d:literal>
			</d:eq>`
		: ''

	options = Object.assign({
		method: 'SEARCH',
		headers: {
			'content-Type': 'text/xml',
		},
		data: `<?xml version="1.0" encoding="UTF-8"?>
			<d:searchrequest xmlns:d="DAV:"
				xmlns:oc="http://owncloud.org/ns"
				xmlns:nc="http://nextcloud.org/ns"
				xmlns:ns="https://github.com/icewind1991/SearchDAV/ns"
				xmlns:ocs="http://open-collaboration-services.org/ns">
				<d:basicsearch>
					<d:select>
						<d:prop>
							${props}
						</d:prop>
					</d:select>
					<d:from>
						<d:scope>
							<d:href>${prefixPath}</d:href>
							<d:depth>infinity</d:depth>
						</d:scope>
					</d:from>
					<d:where>
						<d:and>
							<d:or>
								${orMime}
							</d:or>
							${eqFavorites}
						</d:and>
					</d:where>
					<d:orderby>
						<d:order>
							<d:prop><d:getlastmodified/></d:prop>
							<d:descending/>
						</d:order>
					</d:orderby>
					<d:limit>
						<d:nresults>${options.perPage}</d:nresults>
						<ns:firstresult>${options.page * options.perPage}</ns:firstresult>
					</d:limit>
				</d:basicsearch>
			</d:searchrequest>`,
		deep: true,
		details: true,
	}, options)

	const response = await client.getDirectoryContents('', options)

	return response.data
		.map(data => genFileInfo(data))
		// remove prefix path from full file path
		.map(data => Object.assign({}, data, { filename: data.filename.replace(prefixPath, '') }))

}
