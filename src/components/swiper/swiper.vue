<template>
  <!-- <v-touch class="swiper-box" id="swiper-box" @click="getActive()"> -->
  <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" class="swiper-box" id="swiper-box">
    <scroller
      class="scroller"
      style="margin-top:50px;height:400px;"
      :on-refresh="refresh"
      :on-infinite="infinite"
      ref="myscroller"
    >
    <div>
      中间内容
    </div>
    </scroller>
  </v-touch>
</template>

<script type="text/ecmascript-6">
  export default {
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
      // debugger
      if(this.$store.state.apptype==''){
        this.$store.dispatch('setAppType','recommend');
        this.$router.push(this.$store.state.apptype);
      }else{
        this.$router.push(this.$store.state.apptype);
      }
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
      //查询方法
　　　searching () {
　　　　this.pageNo = 1
　　　　this.$refs.myscroller.finishInfinite(false) // 启用上拉加载更多
　　　　this.noData = true
　　　　this.isEmpty = false
　　　　this.$refs.myscroller.scrollTo(0, 0, false) // 列表滚动到顶部
　　　　this.findList()
　　　},
      findList (done) {
        console.log("加载");
        this.$refs.myscroller.finishPullToRefresh();
      },
      refresh (done) {
        let self = this
        self.currentPageNo = 1
        setTimeout(() => {
          self.findList(done)
        }, 1500)
      },

      // 初始化
      infinite (done) {
        let self = this
        if (self.noData) {
          self.$refs.myscroller.finishInfinite(true) // 禁止上拉加载更多
          return false
        }
        self.currentPageNo++
        setTimeout(() => {
          self.findList(done)
        }, 1500)
      }
    }
  }
</script>

<style>

</style>
