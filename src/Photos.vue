<!--
 - @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 -
 - @author John Molakvoæ <skjnldsv@protonmail.com>
 -
 - @license AGPL-3.0-or-later
 -
 - This program is free software: you can redistribute it and/or modify
 - it under the terms of the GNU Affero General Public License as
 - published by the Free Software Foundation, either version 3 of the
 - License, or (at your option) any later version.
 -
 - This program is distributed in the hope that it will be useful,
 - but WITHOUT ANY WARRANTY; without even the implied warranty of
 - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 - GNU Affero General Public License for more details.
 -
 - You should have received a copy of the GNU Affero General Public License
 - along with this program. If not, see <http://www.gnu.org/licenses/>.
 -
 -->

<template>
  <Content app-name="photos">
    <div class="container-fixed" id="mainDivDesign"> 
    <AppNavigation>
      <template #list>
        <AppNavigationItem
          :to="{ name: 'timeline' }"
          class="app-navigation__photos"
          :title="t('photos', 'All Media')"
          icon="icon-yourphotos"
          exact
        />
        <AppNavigationItem
           to="/images"
          class="app-navigation__photos"
          :title="t('photos', 'My photos')"
          icon="icon-yourphotos"
          exact
        />
        <AppNavigationItem
          to="/videos"
          :title="t('photos', 'My videos')"
          icon="icon-video"
        />
        <AppNavigationItem
          to="/favorites"
          :title="t('photos', 'Favorites')"
          icon="icon-favorite"
        />
        <!-- <AppNavigationItem
          :to="{ name: 'albums' }"
          :title="t('photos', 'My folders')"
          icon="icon-files-dark"
        /> -->
        <AppNavigationItem
          :to="{ name: 'shared' }"
          :title="t('photos', 'Shared with me')"
          icon="icon-share"
        />
        <AppNavigationItem
          v-if="areTagsInstalled"
          :to="{ name: 'tags' }"
          :title="t('photos', 'Tagged photos')"
          icon="icon-tag"
        />
        <AppNavigationItem
          v-if="showLocationMenuEntry"
          :to="{ name: 'maps' }"
          :title="t('photos', 'Locations')"
          icon="icon-address"
        />
      </template>
      <template #footer>
        <AppNavigationSettings :title="t('photos', 'Settings')">
          <SettingsView />
        </AppNavigationSettings>
      </template>
    </AppNavigation>
    <AppContent  :class="isAppNavigationHidden ? 'left-menu-hide' : 'left-menu-show'">
      <div class='br-place-holder'> </div>
      <router-view v-show="!loading" :loading.sync="loading" />

      <!-- svg img loading placeholder (linked to the File component) -->
      <!-- eslint-disable-next-line vue/no-v-html (because it's an SVG file) -->
      <span class="hidden-visually" role="none" v-html="svgplaceholder" />
      <!-- eslint-disable-next-line vue/no-v-html (because it's an SVG file) -->
      <span class="hidden-visually" role="none" v-html="imgplaceholder" />
      <!-- eslint-disable-next-line vue/no-v-html (because it's an SVG file) -->
      <span class="hidden-visually" role="none" v-html="videoplaceholder" />
    </AppContent>
    </div>
  </Content>
</template>

<script>
import { getCurrentUser } from "@nextcloud/auth";
import { generateUrl } from "@nextcloud/router";

import Content from "@nextcloud/vue/dist/Components/Content";
import AppContent from "@nextcloud/vue/dist/Components/AppContent";
import AppNavigation from "@nextcloud/vue/dist/Components/AppNavigation";
import AppNavigationItem from "@nextcloud/vue/dist/Components/AppNavigationItem";
import AppNavigationSettings from "@nextcloud/vue/dist/Components/AppNavigationSettings";

import SettingsView from "./components/Settings/SettingsView";
import svgplaceholder from "./assets/file-placeholder.svg";
import imgplaceholder from "./assets/image.svg";
import videoplaceholder from "./assets/video.svg";
import isMapsInstalled from "./services/IsMapsInstalled";
import areTagsInstalled from "./services/AreTagsInstalled";

export default {
  name: "Photos",
  components: {
    Content,
    SettingsView,
    AppContent,
    AppNavigation,
    AppNavigationItem,
    AppNavigationSettings,
  },
  data() {
    return {
      loading: true,
      svgplaceholder,
      imgplaceholder,
      videoplaceholder,
      areTagsInstalled,
      isAppNavigationHidden:false,
      showLocationMenuEntry:
        getCurrentUser() === null
          ? false
          : getCurrentUser().isAdmin || isMapsInstalled,
    };
  },

  beforeMount() {
    if ("serviceWorker" in navigator) {
      // Use the window load event to keep the page load performant
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register(generateUrl("/apps/photos/service-worker.js"), {
            scope: "/",
          })
          .then((registration) => {
            console.debug("SW registered: ", registration);
          })
          .catch((registrationError) => {
            console.error("SW registration failed: ", registrationError);
          });
      });
    } else {
      console.debug("Service Worker is not enabled on this browser.");
    }
  },

  updated(){
    var leftContainer = document.getElementById("app-navigation-vue");
    console.log(this.isAppNavigationHidden);
    var classExists = leftContainer.classList;
    this.isAppNavigationHidden = classExists && classExists.contains('app-navigation--close');
    console.log(this.isAppNavigationHidden);
  },
  beforeDestroy() {
    window.removeEventListener("load", () => {
      navigator.serviceWorker.register(
        generateUrl("/apps/photos/service-worker.js")
      );
    });
  },
};
</script>
<style>


.br-place-holder {
  height: 48px;
}
</style>
<style lang="scss" scoped>
.app-content {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  	z-index: 0 !important;
}

.app-navigation__photos::v-deep .app-navigation-entry-icon.icon-photos {
  background-size: 20px;
}

</style>

