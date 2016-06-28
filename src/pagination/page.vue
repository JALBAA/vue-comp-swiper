//page.vue
<template>
    <li v-bind:class='{active: isActive}'></li>
</template>
<script>
    "use strict"
    export default ({
        props:['index','isActive'],
        created: function(){
        	if(this.index == 0){
        		this.isActive = true;
        	}
        },
        events: {
        	idxChange: function(idx){
        		if(this.index == idx){
        			this.isActive = true;
        		}else{
        			this.isActive = false;
        		}
        	}
        }
    })
</script>
