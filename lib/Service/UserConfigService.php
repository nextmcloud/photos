<?php

declare(strict_types=1);
/**
 * SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Photos\Service;

use Exception;
use OCA\Photos\AppInfo\Application;
use OCP\Config\IUserConfig;
use OCP\IUserSession;

class UserConfigService {
	public const array DEFAULT_CONFIGS = [
		'croppedLayout' => 'false',
		'gridDensity' => 'medium',
		'photosLocation' => '',
		'photosSourceFolders' => '["/"]',
		/** If you add any new configs, make sure to validate the contents in {@see \OCA\Photos\Controller\ApiController::setUserConfig} */
	];

	public function __construct(
		private readonly IUserConfig $userConfig,
		private readonly IUserSession $userSession,
	) {
	}

	public function getUserConfig(string $key): string {
		$user = $this->userSession->getUser();
		return $this->getConfigForUser($user->getUid(), $key);
	}

	public function getConfigForUser(string $userId, string $key): string {
		if (!array_key_exists($key, self::DEFAULT_CONFIGS)) {
			throw new Exception('Unknown user config key');
		}

		if ($key === 'photosLocation'
			&& !$this->userConfig->hasKey($userId, Application::APP_ID, $key)) {
			$value = $this->getDefaultUserPhotosLocation($userId);

			$this->userConfig->setValueString(
				$userId,
				Application::APP_ID,
				$key,
				$value,
			);

			return $value;
		}

		return $this->userConfig->getValueString(
			$userId,
			Application::APP_ID,
			$key,
			self::DEFAULT_CONFIGS[$key],
		);
	}

	private function getDefaultUserPhotosLocation(string $userId): string {
		$lang = $this->config->getUserValue($userId, 'core', 'lang', 'de_DE');

		return $lang === 'en_GB'
			? '/Camera-Media'
			: '/Kamera-Medien';
	}
}
