<template>
  <div id="app">
    <component :is="layout"> 
      <router-view />
    </component>
  </div>
</template>


<script>

import Emptylayout from '@/layouts/emptylayout'
import Mainlayout from '@/layouts/mainlayout'

export default {
  computed: {
    layout() {
      
      return (this.$route.meta.layout || 'empty') + '-layout';
    }
    
  },
  components:{
    Emptylayout,
    Mainlayout,
  }
}
</script>

<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';

@import 'assets/index.css';
</style>
