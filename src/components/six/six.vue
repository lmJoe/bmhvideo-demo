<template>
  <div class="one">
    <div>666</div>
  </div>
</template>

<script>
import http from '@/libs/http'
import {URL} from '@/libs/url'
import vueSeamlessScroll from 'vue-seamless-scroll'
import qs from 'qs';
export default {
  name: 'one',
  data () {
    return {
     
    }
  },
  created(){
    document.title = this.title;
  },
  activated (){
    document.title = this.title;
  },
  mounted() {
    this.loading = false;
    
  },
  methods: {
    
  },
}
</script>

<style lang="less">
// @import '../../assets/css/nav.less';
</style>

