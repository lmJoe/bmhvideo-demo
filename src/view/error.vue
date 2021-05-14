<template>
  <div class="errorPage">
    <div class="header-container">
      <div class="header-wrapper">
        <img :src="bfImg" alt="">
        <p class="tips-text">抱歉，您访问的视频不存在！</p>
      </div>
    </div>
    <div class="common-container">
      <div class="common-wrapper">
        <img :src="logoImg" alt="">
        <span>打开好看App，看视频免广告省流量</span>
      </div>
    </div>
    <div class="videolsit-container">
      <div class="videolsit-wrapper">
        <div class="sub-title">猜你喜欢</div>
        <div class="video-list" data-id="" data-index="0" data-top="">
          <div class="poster-part">
            <img src="https://pic.rmb.bdstatic.com/d821745bb982a33e518db2df75ca35c8.jpeg@s_0,w_800,h_1000,q_80" alt="">
            <span class="duration">12:42</span>
          </div>
          <div class="title-part">
            <p class="title clamp2">
              <em>热播</em>
              影视：姑娘收留一个又脏又臭的乞丐，不料乞丐洗干净，姑娘心动了
            </p>
            <div class="info-part">
              <span class="open-app-text">App内观看</span>
              <span class="videoinfo clamp1">455万次播放</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="morevideo-container">
      <div class="morevideo-wrapper">更多有趣视频，在好看视频等你呦</div>
    </div>
  </div>
</template>

<script>
import http from '@/libs/http'
import {URL} from '@/libs/url'
  export default {
    data() {
      return {
        bfImg:require("../assets/images/bf.png"),
        logoImg:require("../assets/images/timg.jpg"),
      }
    },
    mounted() {
    },
    methods: {
      
    }
  }
</script>

<style  lang="less">
  .header-container {
    position: relative;
    padding-top: 56.25%;
    .header-wrapper{
      position: absolute;
      top: .3rem;
      left: 0;
      width: 100%;
      img{
        width: .8rem;
        margin: 0 auto;
        display: block;
        padding-top: .25rem;
      }
      .tips-text{
        font-family: PingFangSC-Regular;
        font-size: .15rem;
        color: #333;
        letter-spacing: 0;
        text-align: center;
        line-height: .15rem;
        margin-top: .25rem;
      }
    }
  }
</style>
