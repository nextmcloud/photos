/**
 * @copyright Copyright (c) 2022 John Molakvoæ <skjnldsv@protonmail.com>
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
/* eslint-disable n/no-unpublished-import */
import axios from 'axios'
import { addCommands, User } from '@nextcloud/cypress'
import { basename } from 'path'

// Add custom commands
import 'cypress-wait-until'
addCommands()

// Register this file's custom commands types
declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace Cypress {
		interface Chainable<Subject = any> {
			/**
			 * Upload a file from the fixtures folder to a given user storage.
			 * **Warning**: Using this function will reset the previous session
			 */
			uploadFile(user: User, fixture?: string, mimeType?: string, target?: string): Cypress.Chainable<void>,

			/**
			 * Upload a raw content to a given user storage.
			 * **Warning**: Using this function will reset the previous session
			 */
			uploadContent(user: User, content: Blob, mimeType: string, target: string): Cypress.Chainable<void>,

			/**
			 * Run an occ command in the docker container.
			 */
			runOccCommand(command: string): Cypress.Chainable<void>,
		}
	}
}

const url = (Cypress.config('baseUrl') || '').replace(/\/index.php\/?$/g, '')
Cypress.env('baseUrl', url)

/**
 * cy.uploadedFile - uploads a file from the fixtures folder
 * TODO: standardise in @nextcloud/cypress
 *
 * @param {User} user the owner of the file, e.g. admin
 * @param {string} fixture the fixture file name, e.g. image1.jpg
 * @param {string} mimeType e.g. image/png
 * @param {string} [target] the target of the file relative to the user root
 */
Cypress.Commands.add('uploadFile', (user, fixture = 'image.jpg', mimeType = 'image/jpeg', target = `/${fixture}`) => {
	// get fixture
	return cy.fixture(fixture, 'base64').then(async file => {
		// convert the base64 string to a blob
		const blob = Cypress.Blob.base64StringToBlob(file, mimeType)
		cy.uploadContent(user, blob, mimeType, target)
	})
})

/**
 * cy.uploadedContent - uploads a raw content
 * TODO: standardise in @nextcloud/cypress
 *
 * @param {User} user the owner of the file, e.g. admin
 * @param {Blob} blob the content to upload
 * @param {string} mimeType e.g. image/png
 * @param {string} target the target of the file relative to the user root
 */
Cypress.Commands.add('uploadContent', (user, blob, mimeType, target) => {
	cy.clearCookies()
		.then(async () => {
			const fileName = basename(target)

			// Process paths
			const rootPath = `${Cypress.env('baseUrl')}/remote.php/dav/files/${encodeURIComponent(user.userId)}`
			const filePath = target.split('/').map(encodeURIComponent).join('/')
			try {
				const file = new File([blob], fileName, { type: mimeType })
				await axios({
					url: `${rootPath}${filePath}`,
					method: 'PUT',
					data: file,
					headers: {
						'Content-Type': mimeType,
					},
					auth: {
						username: user.userId,
						password: user.password,
					},
				}).then(response => {
					cy.log(`Uploaded content as ${fileName}`, response)
				})
			} catch (error) {
				cy.log('error', error)
				throw new Error('Unable to process fixture')
			}
		})
})
