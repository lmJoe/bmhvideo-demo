<template>
  <div id="app">
    <v-nav ref='goodslist'></v-nav>
    <v-swiper @pf="parent"></v-swiper>
  </div>
</template>

<script type="text/ecmascript-6">
  import nav from './components/nav/nav.vue';
  import swiper from './components/swiper/swiper.vue';

  export default {
    components: {
      'v-nav': nav,
      'v-swiper': swiper
    },
    data() {
      return {
        
      }
    },
    mounted() {
      // debugger
      if(this.$store.state.apptype==''){
        this.$store.dispatch('setAppType','recommend');
        this.$router.push(this.$store.state.apptype);
      }else{
        this.$router.push(this.$store.state.apptype);
      }
    },
    methods: {
      parent(){
				this.$refs.goodslist.getdetailpage()
			}
    }
  }
</script>

<style>
@import 'assets/css/style.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
