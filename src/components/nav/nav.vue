<template>
  <div class="nav">
    <div class="navTop">
      <div class="logo"><a href="javascript:;"><img :src="lotterylistBg" alt=""></a></div>
        <div class="navigation-search">
          <div class="navigation-search-img"><img :src="searchImg" alt=""></div>
          <div class="navigation-search-text">

          </div>
        </div>
        <div class="navigation-download">下载APP</div>
    </div>
    <div class="swiper-container nav-list">
        <ul class="swiper-wrapper item">
            <li class="swiper-slide" v-for="(item,index) in navList" :key="index" :class="{'active': nowIndex == item.id}" @click="tabClick(item.id)"><a href="javascript:;">{{item.name}}</a></li>
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
        nowIndex: 1,
        lotterylistBg:require("../../assets/images/header-logo.png"),
        searchImg:require("../../assets/images/search.png"),
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
          if(navList[i].id == this.common.getCaption(window.location.href)){
            this.nowIndex = this.common.getCaption(window.location.href);
          }
        }
      },
      tabClick(id) {
        // 点击导航按钮时向swiper组件发射index
        this.$store.dispatch('setChannelType',id);
        this.nowIndex = this.$store.state.channelType;
        this.$router.push({path:`/welcome#${this.nowIndex}`});
      },
      getdetailpage(){
        var operdir = this.$store.state.operdir;
        var nowChannelIndex;
        if(operdir=='left'){
          this.mySwiper.slideNext();
          for(var i=0;i<this.navList.length;i++){
            nowChannelIndex = this.common.getCaption(window.location.href)
            if(nowChannelIndex=='/welcome'){
              nowChannelIndex = 1;
            }
            if((Number(nowChannelIndex)==this.navList[i].id)&&(i<this.navList.length-1)){
              this.nowIndex = this.navList[i+1].id;
            }
          }
        }else if(operdir=='right'){
          this.mySwiper.slidePrev();
          for(var i=0;i<this.navList.length;i++){
            nowChannelIndex = this.common.getCaption(window.location.href)
            if((Number(nowChannelIndex)==this.navList[i].id)&&(i>0)){
              this.nowIndex = this.navList[i-1].id;
            }
          }
        }
        
        
      }
    }
  }
</script>

<style  lang="less">
.nav{
  background:#fff;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  z-index:100;
  .navTop{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 10px;
    height:1.353rem;
    .navigation-search{
      margin-left: .338rem;
      width: 3.615rem;
      height: .676rem;
      background: #f3f3f3;
      border-radius: .153rem;
      flex-direction: row;
      align-items: center;
      position: relative;
      overflow: hidden;
      .navigation-search-img{
        margin-left: .145rem;
        height:100%;
        img{
          width: .338rem;
          height: .338rem;
          position:absolute;
          top:0.18rem;
          left:0.2rem;
        }
      }
      .navigation-search-text{
        position: absolute;
        left: .628rem;
        top: 0;
        height: .676rem;
        width: 2.818rem;
      }
    }
    .navigation-download{
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      align-items: center;
      margin-left: .386rem;
      width: 1.981rem;
      height: .676rem;
      font-family: PingFangSC-Medium;
      font-size: .314rem;
      background: #ff4141;
      border-radius: .193rem;
      color: #fff;
      justify-content: center;
    }
    .logo{
      height: .918rem;
      width: 3.148rem;
      line-height: 1.35rem;
      a{
        display:block;
        height:100%;
        img{ 
          width:100%;
        }
      }
    }
  }
  .nav-list{
    height:1.063rem;
    line-height:1.063rem;
    .swiper-slide{
      display: inline-block;
      line-height: 1.014rem;
      font-size: .435rem;
      white-space: nowrap;
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      opacity: 1;
      list-style: none;
      &.active{
        font-weight:bold;
        position:relative;
        a{
          color:#000;
        }
        &:before{
          content: "";
          position: absolute;
          bottom: .1rem;
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
        color: #888;
        letter-spacing: 0;
        vertical-align: middle;
        display: inline-block;
        text-decoration: none;
        -webkit-appearance: none
      }
      
    }
  }
}


</style>
