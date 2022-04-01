<!--
 - @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 -
 - @author John Molakvoæ <skjnldsv@protonmail.com>
 - @author Corentin Mors <medias@pixelswap.fr>
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
	<!-- Errors handlers-->
	<EmptyContent v-if="error === 404" illustration-name="folder">
		{{ t('photos', 'This folder does not exist') }}
	</EmptyContent>
	<EmptyContent v-else-if="error">
		{{ t('photos', 'An error occurred') }}
	</EmptyContent>
	
	<!-- Folder content -->
	<div v-else-if="!loading">
		<Navigation v-if="folder"
			key="navigation"
			v-bind="folder"
			:root-title="rootTitle"
			:show-actions="true" />
		<!-- Empty folder, should only happen via direct link -->
		<EmptyContent v-if="isEmpty" key="emptycontent" illustration-name="empty">
			{{ t('photos', 'No photos in here') }}
		</EmptyContent>
		
		<div v-else class="grid-container">
			<div v-if="isGalleryViewEnabled=='false' || !isGalleryViewEnabled">
				<div class="folders" v-if="contentList.folders.length">
				<div class="list-title" >{{ t('photos', 'Folders') }}</div>
			<VirtualGrid
				ref="virtualgrid"
				:items="contentList.folders"
				:get-column-count="() => gridConfig.count"
				:get-grid-gap="() => gridConfig.gap" />
			</div>
			<div class="spacing-between" v-if="contentList.folders.length" />
			<div class="list-title"  >{{t('photos', 'Files')}}</div>
			
			<VirtualGrid
				ref="virtualgrid"
				:items="contentList.files"
				:get-column-count="() => gridConfig.count"
				:get-grid-gap="() => gridConfig.gap" />
					 <div class="footer-replace">  </div>
			</div>
			
			<div v-else>

				<div class="folders" v-if="contentList.folders.length">
				<div class="list-title" >Folders</div>
			<VirtualGrid
				ref="virtualgrid"
				:items="contentList.folders"
				:get-column-count="() => gridConfig.count"
				:get-grid-gap="() => gridConfig.gap" />
			</div>
			<div class="spacing-between" v-if="contentList.folders.length" />

			<div class="files">
				<div class="list-title"  >Files</div>
				 <div class="main-container">
					<div
						v-for="item in contentList.files"
						class="item"
						:key="item.fileid">
						<Gallery :item="item" />
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>

</template>

<script>
import { mapGetters } from 'vuex'

import getAlbumContent from '../services/AlbumContent'

import VirtualGrid from 'vue-virtual-grid'
import EmptyContent from '../components/EmptyContent'
import Folder from '../components/Folder'
import File from '../components/File'
import Navigation from '../components/Navigation'

import GridConfigMixin from '../mixins/GridConfig'
import Gallery from "../components/Gallery";
import cancelableRequest from '../utils/CancelableRequest'

export default {
	name: 'Albums',
	components: {
		VirtualGrid,
		EmptyContent,
		Navigation,
		Gallery,
	},
	mixins: [GridConfigMixin],
	props: {
		rootTitle: {
			type: String,
			required: true,
		},
		path: {
			type: String,
			default: '/',
		},
		loading: {
			type: Boolean,
			required: true,
		},
		showShared: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		return {
			error: null,
			cancelRequest: () => {},
			isGalleryViewEnabled:localStorage.getItem('photos:galleryLayout')|| 'false',
		}
	},

	computed: {
		// global lists
		...mapGetters([
			'files',
			'folders',
		]),

		// current folder id from current path
		folderId() {
			return this.$store.getters.folderId(this.path)
		},

		// files list of the current folder
		folder() {
			return this.files[this.folderId]
		},
		folderContent() {
			return this.folders[this.folderId]
		},
		fileList() {
			const list = this.folderContent
				&& this.folderContent
					.map(id => this.files[id])
					.filter(file => !!file)
			return list
		},

		// subfolders of the current folder
		subFolders() {
			return this.folderId
				&& this.files[this.folderId]
				&& this.files[this.folderId].folders
		},
		folderList() {
			const list = this.subFolders
				&& this.subFolders
					.map(id => this.files[id])
					.filter(file => !!file)
			return list
		},
		contentList() {
			const folders = this.folderList?.map((folder) => {
				this.$emit("update:loading", true);
				return {
					id: `folder-${folder.fileid}`,
					injected: {
						...folder,
						showShared: this.showShared,
					},
					width: 256,
					height: 256,
					columnSpan: 1,
					renderComponent: Folder,
				}
			})

			const files = this.fileList?.map((file) => {
				return {
					id: `file-${file.fileid}`,
					injected: {
						...file,
						list: this.fileList,
					},
					width: 256,
					height: 256,
					columnSpan: 1,
					renderComponent: File,
				}
			})
			
			if(this.isGalleryViewEnabled=='false'){
					this.$emit("update:loading", false);
				//return [...(folders || []), ...(files || [])]
				return {"folders": folders,"files":(files)}
			}
			else{
				return {"folders": folders,"files":this.processImages(files)}
			}
		},

		// is current folder empty?
		isEmpty() {
			return !this.haveFiles && !this.haveFolders
		},
		haveFiles() {
			return !!this.fileList && this.fileList.length !== 0
		},
		haveFolders() {
			return !!this.folderList && this.folderList.length !== 0
		},
	},

	watch: {
		path() {
			this.fetchFolderContent()
		},
		showShared() {
			this.fetchFolderContent()
		},
	},

	async beforeMount() {
		this.fetchFolderContent()
	},

	mounted(){
		window.addEventListener("storage",(event)=>{this.isGalleryViewEnabled=localStorage.getItem('photos:galleryLayout'); });
	},
	beforeDestroy() {
		this.cancelRequest('Changed view')
	},

	methods: {

	async getImageHeight(src) {
		return new Promise((resolve, reject) => {
			let img = new Image();
			img.onload = () => resolve(img.height);
			img.onerror = reject;
			img.src = src;
		});
    },

    async getImageWidth(src) {
		return new Promise((resolve, reject) => {
			let img = new Image();
			img.onload = () => resolve(img.width);
			img.onerror = reject;
			img.src = src;
		});
    },

		async fetchFolderContent() {
			// cancel any pending requests
			this.cancelRequest('Changed folder')

			// close any potential opened viewer & sidebar
			OCA.Viewer && OCA.Viewer.close && OCA.Viewer.close()
			OCA.Files && OCA.Files.Sidebar.close && OCA.Files.Sidebar.close()

			// if we don't already have some cached data let's show a loader
			if (!this.files[this.folderId] || !this.folders[this.folderId]) {
				this.$emit('update:loading', true)
			}
			this.error = null

			// init cancellable request
			const { request, cancel } = cancelableRequest(getAlbumContent)
			this.cancelRequest = cancel

			try {
				// get content and current folder info
				const { folder, folders, files } = await request(this.path, { shared: this.showShared })
				
					//  for (var i = 0; i < files.length; i++) {
					// 	var y = await this.getImageWidth(
					// 	"/index.php/core/preview?fileId=" +
					// 	files[i].fileid +
					// 	"&x=1000&y=1000&forceIcon=0&a=1"
					// 	);
					// 	files[i].width = y;

					// 	var z = await this.getImageHeight(
					// 		"/index.php/core/preview?fileId=" +
					// 		files[i].fileid +
					// 		"&x=1000&y=1000&forceIcon=0&a=1"
					// 	);
					// 	files[i].height = z;
					// }
				this.$store.dispatch('addPath', { path: this.path, fileid: folder.fileid })
				this.$store.dispatch('updateFolders', { fileid: folder.fileid, files, folders })
				this.$store.dispatch('updateFiles', { folder, files, folders })
			} catch (error) {
				if (error.response && error.response.status) {
					if (error.response.status === 404) {
						this.error = 404
						setTimeout(() => {
							this.$router.push({ name: this.$route.name })
						}, 3000)
					} else {
						this.error = error
					}
				}
				// cancelled request, moving on...
				console.error('Error fetching album data', error)
			} finally {
				// done loading even with errors
				this.$emit('update:loading', false)
			}
		},

		processImages(finalData){
			
			var tempArray = [];
			var tempArray2 = [];
			var j = -1;
			var k = 0;
			var max_height = 200;
			var leftContainer = document.getElementById("app-navigation-vue");
			var classExists = leftContainer.classList;
			const comuptedStyle = window.getComputedStyle(document.getElementById("mainDivDesign"));
			var windowWidth = document.getElementById("content-vue").offsetWidth;//  parseInt(comuptedStyle.getPropertyValue('width'));//
			if(windowWidth <768){
				max_height =150;
			}
			if (windowWidth <1025 || classExists.contains('app-navigation--close')) {
				var originalMainWindow = parseInt(comuptedStyle.getPropertyValue('width'));
			
			}
			else if (windowWidth >= 1025 && windowWidth <1299 ) {
				var originalMainWindow = parseInt(comuptedStyle.getPropertyValue('width')) - leftContainer.offsetWidth -44;
			}  
			else {
				var originalMainWindow = parseInt(comuptedStyle.getPropertyValue('width')) - leftContainer.offsetWidth -30-44;
			}
			
			var rowWidth = 0;
			var totalRowWidth = originalMainWindow;
			for (var i = 0; i < finalData.length; i++) {
				finalData[i].injected.width = this.aspectRatio(
					finalData[i].injected.height,
					finalData[i].injected.width,
					max_height,
					0
				);
			
				if (finalData[i].injected.height > max_height) {
					finalData[i].injected.height = max_height;
				}
				rowWidth += finalData[i].injected.width +4;
				if(rowWidth < totalRowWidth){
					tempArray.push(finalData[i]);
				}
				
				if (rowWidth >= totalRowWidth) {
					tempArray2 = this.adjustHeight(tempArray,max_height);
					tempArray = [];
					tempArray.push(finalData[i]);
					rowWidth = finalData[i].injected.width;;
				}
				
			}
			this.$emit("update:loading", false);
			return finalData;
		},
		adjustHeight(fileArray,maxHeight){
      
			var totalImageWidth = 0;
			var leftContainer = document.getElementById("app-navigation-vue");
			var classExists = leftContainer.classList;
			const comuptedStyle = window.getComputedStyle(document.getElementById("mainDivDesign"));
			var windowWidth = document.getElementById("content-vue").offsetWidth// document.getElementById("content-vue").clientWidth;// document.documentElement.clientWidth;
			
			for (var i = 0; i < fileArray.length; i++) {
				totalImageWidth+= fileArray[i].injected.width;       
			}
			var heightRatio = totalImageWidth/maxHeight;
			var newHieght ;// mainWindow/HeightRatio;
			
			
			//debugger;
			if (windowWidth <= 1024) {
				var mainWindow = parseInt(comuptedStyle.getPropertyValue('width')) - (fileArray.length*4);
				newHieght = mainWindow/heightRatio;
				newHieght = newHieght-3;
			}  
			else if (windowWidth >= 1025 && classExists.contains('app-navigation--close')) {
				var mainWindow = parseInt(comuptedStyle.getPropertyValue('width')) - (fileArray.length*4) -44;
				newHieght = mainWindow/heightRatio;
				newHieght = newHieght-1;
			} else {
				var mainWindow = parseInt(comuptedStyle.getPropertyValue('width')) - leftContainer.offsetWidth - (fileArray.length*5) -44;
				newHieght = mainWindow/heightRatio;
				newHieght = newHieght;
			}

			
			
			for (var i = 0; i < fileArray.length; i++) {

				fileArray[i].injected.width = this.aspectRatio(
					fileArray[i].injected.height,
					fileArray[i].injected.width,
					newHieght,
					0
				);
				fileArray[i].injected.height = newHieght;
				}
		return fileArray;
		},
		aspectRatio: function (height, width, requiredHeight, repeat = 0) {
    	  	var height1 = requiredHeight;
      		return Math.round((width/height)*height1);
    },

	},

}
</script>

<style lang="scss" scoped>
@import '../mixins/GridSizes.scss';

.grid-container {
	@include grid-sizes using ($marginTop, $marginW) {
		padding: 0px #{$marginW}px 256px #{$marginW}px;
	}
}
.spacing-between{
  height: 64px;
}

.main-container {
  display: flex;
  justify-content: start;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 4px;
}

.item {
  width: auto;
  margin: 2px;
  position: relative;
}

.title-item {
  height: 90px;
  width: 100%;
  margin: 4px;
}
.fullWidth {
  width: 100%;
  height: auto;
}
.footer-replace{
  height: 70px;
}
.list-title{
    line-height: 50px !important;
	font-weight: bold;
    font-size: 24px;
    padding: 0 6px;
}

</style>