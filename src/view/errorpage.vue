<template>
  <div class="errorPage">
    <div class="errorPage-container">
      <div class="errorPage-wrapper">
        <img :src="bfImg" alt="">
        <p class="tips-text">抱歉，您访问的视频不存在！</p>
      </div>
    </div>
    <div class="common-container">
      <div class="common-wrapper">
        <img :src="bfImg" alt="">
        <span>打开炎黄App，看视频免广告省流量</span>
      </div>
    </div>
    <div class="videolsit-container">
      <div class="videolsit-wrapper">
        <div class="sub-title">猜你喜欢</div>
        <div class="video-list" data-id="" data-index="0" data-top="" v-for="(item,index) in likeVideoList" :key="index">
          <div class="poster-part">
            <img :src="item.vImg" alt="">
            <span class="duration">12:42</span>
          </div>
          <div class="title-part">
            <p class="title clamp2">
              <em v-if="index<=3">热播</em>
              {{item.vtitle}}
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
      <div class="morevideo-wrapper">更多有趣视频，在炎黄视频等你呦</div>
    </div>
  </div>
</template>

<script>
import http from '@/libs/http'
import {URL} from '@/libs/url'
  export default {
    data() {
      return {
        bfImg:require("../assets/images/logo.png"),
        likeVideoList:[],
      }
    },
    mounted() {
      this.getArticleList(this.common.getQueryVariable("channelid"));
    },
    methods: {
      getArticleList(channelid){
        var that = this;
        let size = 10;
        http({
          //这里是你自己的请求方式、url和data参数
          method: 'POST',
          url:URL.recordUrl.getVideoPageList +
          "?pageSize=" +
          size +
          "&pageIndex=" +
          that.common.getRandomNum(1, 2)+
          "&classID=" +
          channelid,
          data: {},
          //假设后台需要的是表单数据这里你就可以更改
          headers: {
            "Content-Type":"application/x-www-form-urlencoded",
          }
        }).then(function (res) {
          var data = res.data;
          that.likeVideoList = data;
        }).catch(function (err) {
          console.log(err);
        });
      },
    }
  }
</script>

<style lang="less" scoped>
  html{
    font-size:104px !important;
  }
  .errorPage {
    margin:0.3rem;
    .errorPage-container{
      position: relative;
      padding-top: 56.25%;
      .errorPage-wrapper{
        position: absolute;
        top: 1rem;
        left: 0;
        width: 100%;
        img{
          width: 2.8rem;
          margin: 0 auto;
          display: block;
          padding-top: .25rem;
        }
        .tips-text{
          font-family: PingFangSC-Regular;
          font-size: .4rem;
          color: #333;
          letter-spacing: 0;
          text-align: center;
          line-height: .15rem;
          margin-top: .45rem;
        }
      }
    }
    .common-container{
      .common-wrapper{
        width: 100%;
        height: .9rem;
        background-image: -webkit-gradient(linear,right top,left top,from(#ff3d37),to(#ff6128));
        background-image: -webkit-linear-gradient(right,#ff3d37,#ff6128);
        background-image: linear-gradient(-90deg,#ff3d37,#ff6128);
        border-radius: .5rem;
        margin: .7rem auto 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: .35rem;
        color: #fff;
        letter-spacing: 0;
        img{
          width: .45rem;
          height: .45rem;
          margin-right: .1rem;
          border-radius: .04rem;
        }
      }
    }
    .videolsit-container{
      .videolsit-wrapper{
        text-align:left;
        margin: 0.9rem 0.35rem 0;
        .sub-title{
          font-family: PingFangSC-Regular;
          font-size: .4rem;
          color: #333;
          letter-spacing: 0;
          line-height: .5rem;
        }
        .video-list{
          display: flex;
          margin: .4rem 0;
          .poster-part{
            position: relative;
            width: 3rem;
            height: 1.9rem;
            font-size: 0;
            margin-right: .45rem;
            img{
              width: 3rem;
              height: 1.9rem;
            }
            .duration{
              position: absolute;
              right: .2rem;
              bottom: .16rem;
              font-family: PingFangSC-Regular;
              font-size: .3rem;
              color: #fff;
              letter-spacing: .01rem;
            }
          }
          .title-part{
            font-size: 0;
            width: 6rem;
            .title{
              font-family: PingFangSC-Regular;
              font-size: .43rem;
              color: #333;
              letter-spacing: 0;
              line-height: 0.6rem;
              padding-top: 0.3rem;
              margin-top: -0.3rem;
              em{
                margin-top: -.04rem;
                margin-right: .04rem;
                background: #ff3d37;
                border-radius: .12rem;
                font-family: PingFangSC-Regular;
                font-size: .1rem;
                color: #fff;
                letter-spacing: 0;
                line-height: .1rem;
                width: .75rem;
                height: .4rem;
                text-align: center;
                vertical-align: middle;
                display: inline-flex;
                justify-content: center;
                font-style: normal;
                align-items: center;
              }
            }
            .clamp2{
                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2
            }
            .info-part{
              margin-top: .4rem;
              span{
                font-family: PingFangSC-Regular;
                font-size: 0.32rem;
                color: #999;
                letter-spacing: 0;
                line-height: 0.35rem
              }
              .open-app-text{
                float: right;
                color: #3c76ff;
                padding-left: .1rem;
                .videoinfo{
                  display: block;
                }
                .clamp1{
                  display: block;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
              }
            }
          }
        }
      }
    }
    .morevideo-container{
      background: #fff;
      font-family: PingFangSC-Regular;
      font-size: 0.38rem;
      color: #666;
      letter-spacing: 0;
      text-align: center;
      line-height: 0.5rem;
      height: 1rem;
      .morevideo-wrapper{
        display: flex;
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: center;
      }
    }
  }
</style>
