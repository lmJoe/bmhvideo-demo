<template>
  <div class="nav">
    <div class="swiper-container nav-list">
        <ul class="swiper-wrapper item">
            <li class="swiper-slide" v-for="(item,index) in navList" :key="index" :class="{'active': nowIndex === item.path}" @click="tabClick(item.path)"><a href="javascript:;">{{item.name}}</a></li>
        </ul>
    </div>
  </div>
</template>

<script>
import Swiper from '../../../static/swiper.min';
import '../../../static/swiper.min.css';
  export default {
    data() {
      return {
        navList: [
          {name: '推荐',path:'/recommend',},
          {name: '影视',path:'/yingshi',},
          {name: '音乐',path:'/yinyue',},
          {name: 'VLOG',path:'/vlog',},
          {name: '游戏',path:'/youxi',},
          {name: '搞笑',path:'/gaoxiao',},
          {name: '综艺',path:'/zongyi',},
          {name: '娱乐',path:'/yule',},
          {name: '动漫',path:'/dongman',},
          {name: '生活',path:'/shenghuo',},
          {name: '广场舞',path:'/guangchangwu',},
          {name: '美食',path:'/meishi',},
          {name: '宠物',path:'/chongwu',},
          {name: '三农',path:'/sannong',},
          {name: '军事',path:'/junshi',},
          {name: '社会',path:'/shehui',},
          {name: '体育',path:'/tiyu',},
          {name: '科技',path:'/keji',},
          {name: '时尚',path:'/shishang',},
          {name: '汽车',path:'/qiche',},
          {name: '亲子',path:'/qinzi',},
          {name: '文化',path:'/wenhua',},
          {name: '旅游',path:'/lvyou',},
          {name: '秒懂',path:'/miaodong',},
        ],
        nowIndex: 'recommend',
      }
    },
    mounted() {
      this.mySwiper = new Swiper('.nav-list', {
        slidesPerView:5,
        paginationClickable: true,
        
      });
      this.$nextTick(() => {
        // 初始化，保证刷新页面后内容区和导航键一致
        this.initPage();
      });
      // 接收swiper组件发射的index进行导航按钮切换高亮和更新模板地址
      
    },
    methods: {
      initPage() {
        var navList = this.navList;
        for(var i=0;i<navList.length;i++){
          this.nowIndex = this.$route.path;
          if(this.$route.path === navList[i].path){
            // router.push(href);
          }
        }
      },
      tabClick(path) {
        this.nowIndex = path;
        // 点击导航按钮时向swiper组件发射index
        this.$store.dispatch('setAppType',path);
        this.$router.push(path);
      },
      getdetailpage(){
        var operdir = this.$store.state.operdir;
        if(operdir=='left'){
          
          for(var i=0;i<this.navList.length;i++){
            this.nowIndex = this.$route.path;
            if(this.$route.path === this.navList[i].path){
              if(i!==this.navList.length){
                this.mySwiper.slideNext();
                this.$router.push(this.navList[i+1].path);
                return;
              }
            }
          }
        }else if(operdir=='right'){
          
          for(var i=0;i<this.navList.length;i++){
            this.nowIndex = this.$route.path;
            if(this.$route.path === this.navList[i].path){
              if(i!==0){
                this.mySwiper.slidePrev();
                this.$router.push(this.navList[i-1].path);
                return;
              }
            }
          }
        }
        
        
      }
    }
  }
</script>

<style  lang="less">
.nav{
  height:50px;
  line-height:50px;
  background:#fff;
  .swiper-slide{
    &.active{
      font-weight:bold;
      position:relative;
      a{
        color:#000;
      }
      &:before{
        content: "";
        position: absolute;
        bottom: .75rem;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        height: 0;
        border: .048rem solid #ff4141;
        background: #ff4141;
        width: 30%;
        border-radius: .048rem;
      }
    }
    a{
      color:#888;
    }
    
  }
}


</style>
