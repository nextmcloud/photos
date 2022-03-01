<template>
<div>
    <a aria-expanded="true" id="navigation-toggle" aria-controls="app-navigation-vue"  class="icon-download icon-vue-toggle"></a>
</div>
</template>

<script>

export default {
	name: 'LeftNavigationToggle',
	data(){
	},
    mounted(){
    document.getElementById("navigation-toggle").addEventListener("click", this.hideNavigationToggle);
 
    },
     methods:{

        hideNavigationToggle: function(){
          var leftContainer = document.getElementById("app-navigation-vue").classList;
          var app_content_vue = document.getElementById("app-content-vue").classList;
           var leftContainerClassList = document.getElementById("left-navigation-toggle").classList;
          if (leftContainer.contains('app-navigation--close')) 
          {  
            leftContainer.remove('app-navigation--close');  
            leftContainerClassList.remove('app-nav-close');
          }  
          else
          {  
            leftContainer.add('app-navigation--close');
            leftContainerClassList.add('app-nav-close');
          } 


          if(app_content_vue.contains('left-menu-hide')){
             if(leftContainerClassList.contains('app-nav-close')){
                 leftContainerClassList.remove('app-nav-close');
             }
             else{
                 leftContainerClassList.add('app-nav-close');
             }
          }

        }
	 }

}
</script>
