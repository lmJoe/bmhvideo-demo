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
        navList: [
          {name: '推荐',path:'recommend',id:1},
          {name: '影视',path:'yingshi',id:568},
          {name: '音乐',path:'yinyue',id:504},
          {name: 'VLOG',path:'vlog',id:108},
          {name: '游戏',path:'youxi',id:5},
          {name: '搞笑',path:'gaoxiao',id:510},
          {name: '综艺',path:'zongyi',id:856},
          {name: '娱乐',path:'yule',id:654},
          {name: '动漫',path:'dongman',id:897},
          {name: '生活',path:'shenghuo',id:222},
          {name: '广场舞',path:'guangchangwu',id:78},
          {name: '美食',path:'meishi',id:36},
          {name: '宠物',path:'chongwu',id:655},
          {name: '三农',path:'sannong',id:285},
          {name: '军事',path:'junshi',id:398},
          {name: '社会',path:'shehui',id:125},
          {name: '体育',path:'tiyu',id:17},
          {name: '科技',path:'keji',id:55},
          {name: '时尚',path:'shishang',id:205},
          {name: '汽车',path:'qiche',id:115},
          {name: '亲子',path:'qinzi',id:189},
          {name: '文化',path:'wenhua',id:43},
          {name: '旅游',path:'lvyou',id:29},
          {name: '秒懂',path:'miaodong',id:9},
        ],
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
        // debugger
         //当点击导航某个栏目后，在左右滑动时与当前点击导航位相匹配
        var nowChannelIndex = this.common.getCaption(window.location.href);
        //如果当前频道id不为第一个频道的id
        // if(Number(nowChannelIndex)!==1){
        //   //获取当前导航中频道id,匹配找到当前id的下标
        //   for(var i=0;i<this.navList.length;i++){
        //     if(Number(nowChannelIndex)==this.navList[i].id){
        //       this.navIndex = i;
        //     }
        //   }
        // }
        // if(Number(nowChannelIndex)!==1){
        //   //获取当前导航中频道id,匹配找到当前id的下标
        //   this.$router.push({path:`/welcome#1`});
        //   this.navIndex = 1;
        // }
        if((this.navIndex < this.navList.length-1)&&(this.navIndex>0)){
          var nowNavIndex = this.navIndex++;
          var channelValue = this.navList[nowNavIndex+1].id;
          this.$router.push({path:`/welcome#${channelValue}`});
        }else if(this.navIndex==0){
          var nowNavIndex = this.navIndex++;
          var channelValue = this.navList[nowNavIndex+1].id;
          this.$router.push({path:`/welcome#${channelValue}`});
        }
      },
      swiperright: function () {
        this.$store.dispatch('setOperDir', 'right');
        this.getActive();
        //当点击导航某个栏目后，在左右滑动时与当前点击导航位相匹配
        
        var nowChannelIndex = this.common.getCaption(window.location.href);
        //如果当前频道id不为第一个频道的id
        if(Number(nowChannelIndex)!==1){
          //获取当前导航中频道id,匹配找到当前id的下标
          for(var i=0;i<this.navList.length;i++){
            if(Number(nowChannelIndex)==this.navList[i].id){
              this.navIndex = i;
            }
          }
        }

        if(this.navIndex==0){
          this.navIndex = 1;
        }
        var nowNavIndex = this.navIndex--;
        if(nowNavIndex > 0){
          var channelValue = this.navList[nowNavIndex-1].id;
          this.$router.push({path:`/welcome#${channelValue}`});
        }
      },
    }
  }
</script>

<style>

</style>
