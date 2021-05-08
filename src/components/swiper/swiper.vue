<template>
  <!-- <v-touch class="swiper-box" id="swiper-box" @click="getActive()"> -->
  <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" class="swiper-box" id="swiper-box">
    <videoList></videoList>
  </v-touch>
</template>

<script type="text/ecmascript-6">
import videoList from '../../view/list.vue';
  export default {
    components: {
      'videoList': videoList,
    },
    data() {
      return {
        pageSize: 5, // 分页大小
        currentPageNo: 0, // 当前页码
        isEmpty:true,
        noData: false,
        startX: 0,
        startY: 0,
        navIndex:0,//当前导航下标
      }
    },
    mounted() {
    },
    methods:{
      getActive(){
        this.$emit("pf");
      },
      swiperleft: function () {
        this.$store.dispatch('setOperDir', 'left');
        this.getActive();
      },
      swiperright: function () {
        this.$store.dispatch('setOperDir', 'right');
        this.getActive();
      },
    }
  }
</script>

<style>

</style>
