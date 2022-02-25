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
          var leftContainer = document.getElementById("app-navigation-vue");
          if (leftContainer.style.display !== "none") 
          {  
             leftContainer.style.display = "none";  
          }  
          else
          {  
             leftContainer.style.display = "block";  
          } 

        }
	 }

}
</script>
