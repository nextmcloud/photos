/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
import { generateRemoteUrl } from '@nextcloud/router'
import camelcase from 'camelcase'
import { rootPath } from '../services/DavClient.js'
import { isNumber } from './numberUtils.js'

/**
 * Get an url encoded path
 *
 * @param {string} path the full path
 * @return {string} url encoded file path
 */
const encodeFilePath = function(path) {
	const pathSections = (path.startsWith('/') ? path : `/${path}`).split('/')
	let relativePath = ''
	pathSections.forEach((section) => {
		if (section !== '') {
			relativePath += '/' + encodeURIComponent(section)
		}
	})
	return relativePath
}

/**
 * Extract dir and name from file path
 *
 * @param {string} path the full path
 * @return {string[]} [dirPath, fileName]
 */
const extractFilePaths = function(path) {
	const pathSections = path.split('/')
	const fileName = pathSections[pathSections.length - 1]
	const dirPath = pathSections.slice(0, pathSections.length - 1).join('/')
	return [dirPath, fileName]
}

/**
 * Sorting comparison function
 *
 * @param {object} fileInfo1 file 1 fileinfo
 * @param {object} fileInfo2 file 2 fileinfo
 * @param {string} key key to sort with
 * @param {boolean} [asc] sort ascending?
 * @return {number}
 */
const sortCompare = function(fileInfo1, fileInfo2, key, asc = true) {

	// favorite always first
	if (fileInfo1.isFavorite && !fileInfo2.isFavorite) {
		return -1
	} else if (!fileInfo1.isFavorite && fileInfo2.isFavorite) {
		return 1
	}

	// if this is a number, let's sort by integer
	if (isNumber(fileInfo1[key]) && isNumber(fileInfo2[key])) {
		return asc
			? Number(fileInfo2[key]) - Number(fileInfo1[key])
			: Number(fileInfo1[key]) - Number(fileInfo2[key])
	}

	// else we sort by string, so let's sort directories first
	if (fileInfo1.type !== 'file' && fileInfo2.type === 'file') {
		return asc ? -1 : 1
	} else if (fileInfo1.type === 'file' && fileInfo2.type !== 'file') {
		return asc ? 1 : -1
	}

	// if this is a date, let's sort by date
	if (isNumber(new Date(fileInfo1[key]).getTime()) && isNumber(new Date(fileInfo2[key]).getTime())) {
		return asc
			? new Date(fileInfo2[key]).getTime() - new Date(fileInfo1[key]).getTime()
			: new Date(fileInfo1[key]).getTime() - new Date(fileInfo2[key]).getTime()
	}

	// finally sort by name
	return asc
		? fileInfo1[key]?.toString()?.localeCompare(fileInfo2[key].toString(), OC.getLanguage()) || 1
		: -fileInfo1[key]?.toString()?.localeCompare(fileInfo2[key].toString(), OC.getLanguage()) || -1
}

/**
 * @param {object} obj - object to flatten and format.
 */
function genFileInfo(obj) {
	const fileInfo = flattenAndFormatObject(obj, flattenAndFormatObject)

	if (fileInfo.filename) {
		// Adding context
		fileInfo.source = generateRemoteUrl(rootPath) + encodeFilePath(fileInfo.filename)
	}

	return fileInfo
}

/**
 * @param {object} obj - object to flatten and format.
 */
function extractTagInfo(obj) {
	return flattenAndFormatObject(obj, flattenAndFormatObject)
}

/**
 *
 * @param {object} obj
 * @param {Function|null} callback
 */
function flattenAndFormatObject(obj, callback) {
	return Object.entries(obj).reduce((resultObj, [key, data]) => {
		// flatten object if any
		if (!!data && typeof data === 'object' && !Array.isArray(data)) {
			return { ...resultObj, ...(callback ? callback(data) : { [camelcase(key)]: data }) }
		}

		// format key and add it to the tagInfo
		switch (data) {
		case 'false':
			return { ...resultObj, [camelcase(key)]: false }
		case 'true':
			return { ...resultObj, [camelcase(key)]: true }
		default:
			return { ...resultObj, [camelcase(key)]: isNumber(data) ? Number(data) : data }
		}
	}, {})
}

export { encodeFilePath, extractFilePaths, sortCompare, genFileInfo, extractTagInfo }
