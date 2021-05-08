<template>
  <section>
    <v-nav ref='goodslist'></v-nav>
    <v-swiper @pf="parent"></v-swiper>
  </section>
</template>

<script type="text/ecmascript-6">
  import nav from '../components/nav/nav';
  import swiper from '../components/swiper/swiper';
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
      // if(this.$store.state.channelType==''){
      //   this.$store.dispatch('setChannelType','welcome');
      //   this.$router.push(this.$store.state.channelType);
      // }else{
      //   this.$router.push(this.$store.state.channelType);
      // }
    },
    methods: {
      parent(){
				this.$refs.goodslist.getdetailpage()
			}
    }
  }
</script>

<style>
</style>
