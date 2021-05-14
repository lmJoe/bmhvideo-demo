<template>
  <div class="playPage">
    <div class="navTop">
    <div class="logo"><a href="javascript:;"><img :src="lotterylistBg" alt=""></a></div>
      <div class="navigation-search">
        <div class="navigation-search-img"><img :src="searchImg" alt=""></div>
        <div class="navigation-search-text">

        </div>
      </div>
      <div class="navigation-download">下载APP</div>
    </div>
    <div class="video-player navigation-normal">
      <div class="video-container">
        <video src=""></video>
      </div>
      <div class="video-player-shade">
        <div class="shade-style">
          <img :src="videoImg" alt="">
          <div class="play-btn"></div>
          <div class="video-play-bottom">
            <span class="bottom-play">{{totalTime}}次播放</span>
          </div>
          <div class="bottom-bg"></div>
        </div>
      </div>
      <div class="video-player-pause">
        <img :src="videoImg" alt="">
        <div class="video-player-pause-container">
          <div>
            <div class="video-player-pause-text">流畅更高清，打开好看视频</div>
            <div class="video-player-pause-btns">
              <div class="continue">当前页观看</div>
              <div class="open">
                打开APP
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="goods">
      <img src="" class="goods-img" alt="">
      <div class="goods-container">
        <div class="goods-container-title"></div>
        <div class="goods-container-info">
          <div class="price"></div>
          <div class="author"></div>
        </div>
      </div>
      <div class="goods-text">去购买</div>
    </div>
    <div class="open-app-top">
      <div class="open-app-top-banner">
        <img src="https://pic.rmb.bdstatic.com/baidu-rmb-video-cover-1/2021-2/1614223803372/cf9bb534bb8e.png" alt="" class="logo">打开好看APP，查看更多精彩视频
      </div>
    </div>
    <div class="video-info">
      <div class="video-info-title">{{VideoTitle}}</div>
      <div class="video-info-arrow"></div>
      <div class="video-info-text hide">
        <p>发布时间：2021年4月29日</p>
        <p>本文仅代表作者观点，不代表百度立场</p>
        <p>本文系作者授权百家号发表，未经许可，不得转载</p>
      </div>
    </div>
    <div class="gather">
      <div class="gather-item">
        <div class="item-new-show">
          <span class="icon comment"></span>
          <span class="text">评论</span>
        </div>
      </div>
      <div class="gather-item">
        <div class="item-new-show">
          <span class="icon collect"></span>
          <span class="text">收藏</span>
        </div>
      </div>
      <div class="gather-item">
        <div class="item-new-show">
          <span class="icon down"></span>
          <span class="text">下载</span>
        </div>
      </div>
    </div>
    <div class="author-info">
      <div class="author-info-avatar">
        <img :src="headImg" alt="">
      </div>
      <div class="author-info-content">
        <div class="author-info-name">{{autor}}</div>
        <div class="author-info-data"><span class="author-info-fans-num">1663粉丝</span></div>
      </div>
      <div class="author-info-attention">+关注</div>
    </div>
    <div class="top-video-list-container">
      <div class="top-video-list-title">猜你喜欢</div>
      <div class="top-video-list">
        <div class="top-video-card">
          <div class="top-video-card-img">
            <div class="hk-filter-earlybird">
              <div style="z-index: 1; position: relative;">
                <img src="https://tukuimg.bdstatic.com/processed/a079ae38f0d1ba6f624bcea93774bf20.jpeg@s_2,w_681,h_381,q_100" alt="">
              </div>
            </div>
            <div class="top-video-card-img-bg">
              <div class="top-video-card-img-title"></div>
              <div class="top-video-card-img-app">
                <span class="app">打开APP</span>
              </div>
              <div class="top-video-card-img-bottom">
                <span class="bottom-play">902次播放</span>
              </div>
              <div class="card-shadow"> </div>
            </div>
          </div>
          <div class="top-video-card-title">一首《感官先生》唱出随遇而安的人生态度，泰然处之的处世之道</div>
        </div>
      </div>
    </div>
    <div class="video-relate-list-container">
      <div class="video-relate-list-title">相关推荐</div>
      <div class="video-relate-list">
        <div class="video-relate-card">
          <div class="video-relate-card-img">
            <div class="hk-filter-earlybird">
              <div style="z-index: 1; position: relative;">
                <img src="https://tukuimg.bdstatic.com/processed/529ef48fa7979c2844d6fcab6fab3c1e.jpeg@s_2,w_681,h_381,q_100" alt="">
              </div>
              <div class="video-relate-card-img-bg">
                <div class="video-relate-card-img-title">借酒消愁（DJ沈念完整版）</div>
                <div class="video-relate-card-img-play"></div>
                <div class="video-relate-card-img-bottom">
                  <span class="bottom-play">
                    2721次播放
                  </span>
                </div>
                <div class="video-relate-card-img-app">
                  <span class="app">打开APP</span>
                </div>
                <div class="card-shadow"></div>
              </div>
            </div>
          </div>
          <div class="video-relate-bottom">
            <div class="video-relate-bottom-user">
              <img src="https://user-center.cdn.bcebos.com/head/raw/uc.101.5764fcac.AMxwYrIqr6GIcy0wTbh8Dg?x-bce-process=image/resize,m_lfit,w_200,h_200&autime=8" alt="">
              <span>DJ美美</span>
            </div>
            <div class="video-relate-bottom-btns">
              <span class="like"><i></i>29</span>
              <span class="comment"><i></i>3</span>
              <span class="repley"><i></i></span>
              <span class="more"><i></i><i></i><i></i></span>
            </div>
          </div>
        </div>
      </div>
      <div class="video-relate-list-more">
        <span class="text">点击查看更多</span>
        <span class="icon"></span>
      </div>
    </div>
    <div class="open-app-bottom">
      <div class="open-app-bottom-logo">
        <img src="https://pic.rmb.bdstatic.com/baidu-rmb-video-cover-1/2021-2/1614223757006/19dffc629111.png" alt="">
      </div>
      <div class="open-app-bottom-open">打开</div>
    </div>
    <div class="open-button-wrap">
      <div class="open-app-button">
        <img src="https://pic.rmb.bdstatic.com/baidu-rmb-video-cover-1/2021-2/1614223803372/cf9bb534bb8e.png" alt="">
        打开好看APP，查看全网热门视频
      </div>
    </div>
  </div>
</template>

<script>
import http from '@/libs/http'
import {URL} from '@/libs/url'
  export default {
    data() {
      return {
        flvid:'',//获取详细视频id
        lotterylistBg:require("../assets/images/header-logo.png"),
        searchImg:require("../assets/images/search.png"),
        headImg:'',
        VideoTitle:'',
        totalTime:0,
        playCount:'',
        autor:'',
        videoUrl:'',
        videoImg:'',
      }
    },
    mounted() {
      this.getVideoInfo();
    },
    methods: {
      getVideoInfo(){
        // var videoid = this.$store.state.videoId;
        var videoid = this.common.getQueryVariable("videoId");
        console.log("视频id",videoid);
        var that = this;
        http({
          //这里是你自己的请求方式、url和data参数
          method: 'get',
          url:URL.recordUrl.getVideoInfo+"?videoId="+videoid,
          data: {},
          //假设后台需要的是表单数据这里你就可以更改
          headers: {
            "Content-Type":"application/x-www-form-urlencoded",
          }
        }).then(function (res) {
          if(res.code==1){
            that.headImg = res.data.HeadImg;
            that.VideoTitle = res.data.Title;
            that.totalTime = res.data.Duration;
            that.autor = res.data.UserName;
            that.videoImg = res.data.CoverImgs;
            // that.videoUrl = res.data.HeadImg;
          }
        }).catch(function (err) {
          console.log(err);
        });
      },
    }
  }
</script>

<style  lang="less">
.playPage{
  background:#fff;
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
  .video-player{
    position: relative;
    width: 100%;
    height: 5.628rem;
    background: #000;
    overflow: hidden;
    .video-container{
      width: 100%;
      height: 100%;
      .video {
        width: 100%;
        height: 100%;
      }
    }
    .video-player-shade{
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      .shade-style {
        width: 100%;
        height: 100%;
        position: relative;
        img{
          width: 100%;
          height: 100%;
        }
        .play-btn{
          width: 1.159rem;
          height: 1.159rem;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          z-index: 96;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQBAMAAAAVaP+LAAAAKlBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAKCgr39/f///+oqKji4uL+/v7///+EEjHgAAAADXRSTlMAAwYKEBUbIp3oQm7HZVoj5wAABIdJREFUaN7tmktS3DAQhjM3MNxg4AZINxDcgPENxhDYj8MFQiqPfUJgm0kW2YaqVLFNCqqyxzC6S9RqPeyxRg9byWp6xYav/n7I0+rWixdb21rXJjtoRRYK2nDOzrrlkDPcQRdnEEn/6x7aYFIXAzYdRELHdvc6NoDU4hC0AyuqSHUMOPvE2IEhJQratXIkh5B0ko4zIqgw/CuZ1OIwdiiNdkhFvGe7GB96aIyqQCWQUBBw2GHblKb41KEgpedohib+ZCyNNNGCQM/M2PGapljPUBAQ5pUwJYqmkKRn+yLrwCnLSpkkMdQUVQQTLUjqqawhiUWnToKkoCPgnL2/b67f1UCaa01xpAl6JgWV1dcbDvZxWRsSagqnTnkGgsrqFVf22CJFFoEBCcfOb7gh1fUCSMfRqUPPmBR0x619tqSo1MkQoWfVKW/bgyTNlKaDEAlBImdC0IcOiF8aUkzqJhgi8Oy8y+HNbV3LeooqJ6wiCFF1sQbiq6UlkVARqHJ0eIZFUKsiCKZOx3pWnvG+PddIOtbltDngCOrnrF8E1JIKL+ilC9QuAm/qbNKq706QKYLuqXOCIGnOWPeKwAa8cIMg1id/3CBVBK3UTV2SIkBwfmt76g7ckhRIhOjkZhOolToIk1sSgMRJAxDfbFc24NI5h6SJyX7tAfG3hkSNc4NAzWU7TOhc4QSVfpAqAhUmlDQMBEWgnDNRcoFmQRB+xI2knm8GdBICQRGAc1ZS0TuzNAoE51c415LkOPxRIHF+F0aSA7Qfq4jzWyOp51saqFlqSdK34SBRBFIS7ftmD38UiD9LSUzlbQSIX0pJ4JsbVMWCmi8aNB2niF9p37rRTlbEV4sqD4i/Rt8g2uNAT9VcR3scqIEg0Qwg/kNGOwPoV6VBO+NAT5U8bt1CGgJ6FmljOUCPuUArVUijQQ0W0hb0P4KdLf3ZChKOCPy0jQZlO7S5PiMr+LDl+EI+5/rU5vr4N/6fo2w/kGXaTzbd+JMd7drvQBOR2NYwR1uT1Gg9LpUgR6OVAlqp1o9uaP1iu9pGN6NkZDOq22Pqbo+j+2zTsBNHwz7kCkFdV4jES01HUDHymkV916yUix/xXvwCV1FuOChoOhRkL8dk4+V4B6Y+gev6gxwh6PnIhuu6OLU0PECwAfIMEFRp3/hHGq3xn2ekETlkIaEhCwmMfRZ2bOsb++zh0O8uOIginkFUazR24U1Ydz5abADJtJ36E9YOUDFmfEhYaHwYGGiqQBMWHGhi2oRv3zyJD8/ZbdqcQ9+Tqoyc/E9skDxjaBo1hs44GMcguUb1s+hRvVoeUM/ygMQuD0LrDBa9zvAvWEjkgkWtfFBSWZ29uf90/VOkfcjKR/rGQNIc908gp5ylcaxvuF7TazHFofFrMbOoY0AqQdV8Xg5Z1PVXh6VaHbK01eFELzMpWVtm0sS1qFmvSpKxZE5r4dsmEZq+OrYraEqIXvaydE57Ka734XTQUry7phexYcOW6/keDuR7ypDtcUW+5x75HqDkexKT7ZFOvmdDGR8y5XtatbV/Zn8B7X41Zz8UNugAAAAASUVORK5CYII=);
          background-size: cover;
        }
        .video-play-bottom{
          position: absolute;
          right: .29rem;
          bottom: .29rem;
          display: flex;
          align-items: center;
          z-index: 101;
          .bottom-play{
            margin-right: .137rem;
            height: .362rem;
            font-family: PingFangSC-Regular;
            font-size: .362rem;
            font-weight: 400;
            line-height: .362rem;
            color: #fff;
          }
          .bottom-bg{
            position: absolute;
            right: 0;
            bottom: 0;
            z-index: 97;
            height: 1.763rem;
            width: 100%;
            background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),color-stop(70%,#000));
            background-image: -webkit-linear-gradient(top,transparent,#000 70%);
            background-image: linear-gradient(180deg,transparent,#000 70%);
            opacity: .7;
          }
        }
      }
    }
    .video-player-pause{
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background: #000;
      z-index:100;
      &.hide{
        display: none;
      }
      img{
        width: 100%;
        height: 100%;
      }
      .video-player-pause-container{
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: rgba(0,0,0,.7);
        display: flex;
        justify-content: center;
        align-items: center;
        .video-player-pause-text{
          font-family: PingFangSC-Medium;
          font-size: .386rem;
          color: #fff;
          line-height: .386rem;
          text-align: center;
        }
        .video-player-pause-btns{
          width: 5rem;
          margin-top: .58rem;
          padding: 0 2.472rem;
          font-family: PingFangSC-Regular;
          font-size: .338rem;
          color: #fff;
          line-height: .821rem;
          display: flex;
          justify-content: space-between;
          .continue{
            background: hsla(0,0%,100%,.3);
            min-width: 2.335rem;
            height: .821rem;
            border-radius: .193rem;
            text-align: center;
            // padding: 0 .362rem;
          }
          .open{
            background: #ff4141;
            margin: 0 auto;
            min-width: 2.335rem;
            height: .821rem;
            border-radius: .193rem;
            text-align: center;
            // padding: 0 .362rem;
          }
        }
      }
    }
  }
  .goods{
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 0;
    transition: height .2s;
    width: 100%;
    background: #f7f7f7;
    overflow: hidden;
    .goods-img{
      margin: 0 .193rem 0 .29rem;
      width: .821rem;
      height: .821rem;
      border-radius: .121rem;
      overflow: hidden;
    }
    .goods-container{
      width: 6.401rem;
      height: .821rem;
      display: flex;
      flex-direction: column;
      .goods-container-title{
        font-family: PingFangSC-Medium;
        font-size: .338rem;
        color: #000;
        line-height: .435rem;
        height: .435rem;
        width: 6.401rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .goods-container-info{
        display: flex;
        flex-direction: row;
        margin-top: .024rem;
        .price{
          font-family: PingFangSC-Medium;
          font-size: .338rem;
          color: #ff4141;
          letter-spacing: 0;
          line-height: .386rem;
        }
        .author{
          margin-left: .201rem;
          font-family: PingFangSC-Regular;
          font-size: .29rem;
          color: #888;
          letter-spacing: 0;
          line-height: .386rem;
        }
      }
      .goods-text{
        display: flex;
        margin-left: .483rem;
        justify-content: center;
        align-items: center;
        width: 1.449rem;
        height: .676rem;
        background: #fff;
        border: .024rem solid #ff4141;
        border-radius: .193rem;
        font-family: PingFangSC-Medium;
        font-size: .314rem;
        color: #ff4141;
        letter-spacing: 0;
      }
    }
  }
  .open-app-top{
    padding: .338rem .362rem 0;
    .open-app-top-banner{
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: .966rem;
      font-family: PingFangSC-Medium;
      font-size: .338rem;
      line-height: .966rem;
      text-align: center;
      color: #fff;
      border-radius: .483rem;
      background: #ff4141;
      .logo{
        display: inline-block;
        width: .483rem;
        height: .483rem;
        margin-right: .145rem;
      }
    }
  }
  .video-info{
    position: relative;
    overflow: hidden;
    margin: .338rem .362rem .201rem;
    transition: all .2s;
    text-align:left;
    .video-info-title{
      width: 100%;
      min-height: .66rem;
      font-family: PingFangSC-Medium;
      font-size: .435rem;
      line-height: .66rem;
      color: #1a1a1a;
      padding-right: .483rem;
      white-space: normal;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: -o-ellipsis-lastline;
      text-overflow: ellipsis;
      line-clamp: 2;
    }
    .video-info-arrow{
      position: absolute;
      top: 0;
      right: 0;
      width: .483rem;
      height: .483rem;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8BAMAAADI0sRBAAAAJ1BMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+jSoGAAAADHRSTlMAafBBE5SL2X27tSYPbQCiAAAAdklEQVQ4y2NgGAWjYCQB5kVnoEDLAIu0zRk4OIxFOgchfQyLtAxC+iAWaSeEtAoWaUaEtAA2p8fAZI9i9RknTHoCVmmWGojscQfsAbMJIq2NK9wg0ga4wlUGl6chgA0knYA7WoTOnFHEE2ssooEOo2l3FAxGAADrkFw+LRZIFAAAAABJRU5ErkJggg==) no-repeat;
      background-size: cover;
    }
    .video-info-text hide{
      margin-top: .298rem;
      font-family: PingFangSC-Regular;
      font-size: .29rem;
      line-height: .403rem;
      color: #999;
      transition: display .5s ease 0;
      &.hide{
        display: none;
      }
    }
  }
  .gather{
    margin-top: .161rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0 .266rem;
    .gather-item{
      flex: 1 1;
      .item-new-show{
        min-width: 2.963rem;
        height: .966rem;
        background: #f7f7f7;
        border-radius: .193rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 .097rem;
        .comment{
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAQlBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABz07T7AAAAFXRSTlMAgRgmDUHa9+lTxG8Dm7aOZAaozTMtjr1dAAACKElEQVRYw+1X25KDIAwtyFVAVPT/f3VrsM62QyC0L7szzSt4SE5OEnO7fe1r/878xwjCskkZve9GTXHmb6JwN+7PptjwBkzQe8HGrTMmVoQ5bO3xajbXd2acAovrqC5kHQURZgmPT6ZfBAu7PuATjXZ+cmyceEm8t+k8kgScLb+rWTEAq/Lp3MQZMs6EeO8Xlp2yrXTlF1lFzBZo13Ud+Aku1Z/b4DFTZTyCPy0qOYSfFvyGBBzXTghEx/ALkPhASK0FBnj1uObxCwfYk15RCDqzCzQhZTeDgIh15KCAKwxRa3tRKEtD5Q3M/2KCGUX5v8QEfa50cohaC3rTOpjQhRQvuoPqi26JUOQ6gLAPLF1Ep+wQTYKnXTPClLmApHXNwFRO21E9umtmHWlWZSDTBbSWgSC0rt+FQ0gJkXwXR6rMke3Omi7XpuwrtZsXSLsVmthmn0KwCHeqAyhgpLKevnYPzWAPA0mRDIRfX44njOiRI5JliG0m4mw7TinXHS6NNbWEnayAPEvRnqepzS3/Rsh6G1btmb2kxiz1I80lyJiuaY4023xs/vxBaC11i2lv/B1lf1pTe1DNW3PeXDhltxhFowrvI68C5B+7RahlVlzb1OpsgScvozpvuHYPvkyn+zIzW7kNA+eDtC5ci05zgdjUTjBkt3h1PrVwAmnQ+GObiqPBUEzs3EW5dGFKz3h6ZPLddXvhm7R2nt2d9MF/srZ/vvB/7S/bDzPrPD6AWvROAAAAAElFTkSuQmCC) no-repeat;
          background-size: cover;
        }
        span{
          display: inline-block;
        }
        .icon{
          width: .58rem;
          height: .58rem;
        }
        .text{
          height: .386rem;
          font-family: PingFangSC-Regular;
          font-size: .386rem;
          color: #000;
          letter-spacing: 0;
          text-align: center;
          line-height: .386rem;
          margin-top: .072rem;
          margin-left: .145rem;
        }
        .collect{
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAP1BMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC6E+JdAAAAFHRSTlMAwmZ03ShKGQv2g1iTOeu2BM+grKktUuIAAAImSURBVFjD7VfbloMgDCx3QcAb//+tW2C1oCjB9mXPNk+KMiaTZIKPx9e+9resY2L8AAqZnHMS9W9iGep+DYl3cLh0m1l2H0dYl9jU3QYaAsCMcbzQtwPzu6Xxlzhc3gxuDET38Ub56+EeDgnJWssgRW1kOmSMZXHSO3wvO34D4eom0zbxgMlbfEdOcLoU+W5plc6QxaZMp9h0xgYCxno9bX1h8mf9ui6R4petxxRNe4Lsn+v0KVWnWESmL0pyLK0MydmTskrfsgMpfk8oJK98Dv5sXa7xVZJHhueNAX5WyFSZevE+kya4ju+PZYdQQwsIWnYJeWaa5JSVNcpX4NJW/dOhZr3Jdgn0QUyHVdouXOUtS6Enrq0v60pYpg1sM5sJ306h4SMnZr9EhnEtetNN7rRecJxisMmAQl/z8tMggTBZDqk5HyqzO+jrlVCQc4eHs5YuCYWuUlibXlEoFkBSyTXQDBGKML3merPWZy4qtvRBKDRIG4Z6s9YVx9ZDAzj9rABATfpqpNVeBJSkL0dZPQ8DKjLUYy1rHKBvuCxEhZfE+x+LCnDt9sggx8kCkZ3ZTV9IQoJHKdDYBwkb+H4yYohCbPELsh0XKO4yHmtaw5IRwObswGS1eP2hyA7Sa45yIWJMuS28E9jCpJ0fdg/8iAk5Jqt8hw5bTB4lRNczpIRhoV4/bxKE8/w8WmPKC3GNcIEf/0VPSC/K67zpNPaB//Ov/Sf7AUInOdVl7e47AAAAAElFTkSuQmCC) no-repeat;
          background-size: cover;
        }
        .down{
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAOVBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLcPMfAAAAEnRSTlMAeW7HmUYGEDvp+Cis3xpiXon2cWd/AAABf0lEQVRYw+2X247DIAxEIQm3QLj9/8fuAlWVbMCYVJX2gXmtexrGE5sSMjV1k2BuqcjLMQwPe2zoYAMcfURAGx60RlALlkNhTtw1EqRSMbWiIm0SKSAdgmp5sm/FgWQCNXuzpc7hQCyBJARSEzRBE/RfQPxXCFAq48D8MOo9BUFQkTL1IrGdxykClPZA5bH4deI3x3K4lJnexG8PU33deP72QNmelRZ5wEm9lJqQj6B4bVAPrL63XX/NdKAxwLpx3wLJRg+Gj1bMpiMcWjWbLPVutuVbX8jd3NG3H7a3zBCFhLySycxZRe0zm69XCtU6nS097JNPR34Tet4xF4qDK+9MP0RfXEQEM9/abpGuTpOtG+h+drtlFHtHNnDEfcS+lbCVuHb0m4sNSC9u+MjC9SMvEXSCsde67SkfHDTNiKMCjcgdMtCtiJuXT8LEB5vvfBQVmLUyqPhgzdSvFehAV0jmyjEPOWlHna4eaiEfSNDXH+6DCvKhLPOOaTI1BegHWpo1daER9gUAAAAASUVORK5CYII=) no-repeat;
          background-size: cover;
        }
      }
    }
  }
  .author-info{
    display: flex;
    flex-direction: row;
    width: 92%;
    height: .845rem;
    padding: 0 4%;
    margin-top: .443rem;
    .author-info-avatar{
      position: relative;
      width: .845rem;
      height: .845rem;
      border-radius: 50%;
      background: #999;
      img{
        display: block;
        width: .845rem;
        height: .845rem;
        border-radius: 50%;
      }
    }
    .author-info-content{
      display: flex;
      flex-direction: column;
      margin-left: .193rem;
      padding-top: .072rem;
      .author-info-name{
        height: .362rem;
        font-family: PingFangSC-Medium;
        font-size: .362rem;
        line-height: .362rem;
        color: #1a1a1a;
      }
      .author-info-data{
        display: flex;
        flex-direction: row;
        height: .29rem;
        line-height: .29rem;
        margin-top: .121rem;
        .author-info-fans-num{
          font-family: PingFangSC-Regular;
          font-size: .29rem;
          color: #999;
          height: .29rem;
          line-height: .29rem;
        }
      }
    }
    .author-info-attention{
      width: 1.449rem;
      height: .676rem;
      font-family: PingFangSC-Medium;
      font-size: .29rem;
      line-height: .692rem;
      text-align: center;
      color: #fff;
      border-radius: .121rem;
      background: #ff4141;
      margin: auto 0 auto auto;
    }
  }
  .top-video-list-container{
    width: 92%;
    padding: 0 4%;
    margin-top: .362rem;
    .top-video-list-title{
      font-family: PingFangSC-Medium;
      font-size: .362rem;
      height: .435rem;
      line-height: .435rem;
      color: #1a1a1a;
      text-align:left;
    }
    .top-video-list{
      display: flex;
      margin-top: .338rem;
      flex-flow: row wrap;
      justify-content: space-between;
      .top-video-card{
        flex: 1 1;
        max-width: 4.541rem;
        min-width: 4.026rem;
        margin-bottom: .29rem;
        overflow: hidden;
        margin-right: .242rem;
        .top-video-card-img{
          position: relative;
          overflow: hidden;
          border-radius: .121rem;
          width: 100%;
          height: 2.56rem;
          .hk-filter-earlybird{
            filter: sepia(.25) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-5deg);
            position: relative;
            &:before{
              background: -webkit-radial-gradient(circle closest-corner,transparent 0,rgba(125,105,24,.2) 100%);
              content: "";
              mix-blend-mode: multiply;
              display: block;
              height: 100%;
              left: 0;
              position: absolute;
              top: 0;
              width: 100%;
              z-index: 1;
            }
          }
          .top-video-card-img-bg{
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 96;
            .top-video-card-img-title{
              position: absolute;
              top: .145rem;
              left: .145rem;
              display: flex;
            }
            .top-video-card-img-app{
              position: absolute;
              bottom: .145rem;
              left: .145rem;
              z-index: 98;
              min-width: 1.127rem;
              height: .362rem;
              border-radius: .036rem;
              display: flex;
              justify-content: center;
              align-items: center;
              .app{
                font-family: PingFangSC-Regular;
                font-size: .242rem;
                line-height: .282rem;
                text-align: center;
                color: #fff;
                margin-top: .04rem;
              }
            }
            .top-video-card-img-bottom{
              position: absolute;
              right: .145rem;
              bottom: .145rem;
              display: flex;
              align-items: center;
              z-index: 98;
              .bottom-play{
                margin-right: .113rem;
                height: .266rem;
                font-family: PingFangSC-Regular;
                font-size: .242rem;
                line-height: .242rem;
                color: #fff;
              }
            }
            .card-shadow{
              height: 1.329rem;
              position: absolute;
              right: 0;
              bottom: 0;
              z-index: 97;
              width: 100%;
              border-radius: 0 0 .193rem .193rem;
              background-image: linear-gradient(180deg,transparent,#000 70%);
              opacity: .7;
            }
          }

        }
        .top-video-card-title{
          display: -webkit-box;
          overflow: hidden;
          height: .87rem;
          margin-top: .145rem;
          font-family: PingFangSC-Regular;
          font-size: .338rem;
          line-height: .451rem;
          text-overflow: ellipsis;
          color: #1a1a1a;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      }
    }
  }
  .video-relate-list-container{
    padding: .201rem .362rem 0;
    .video-relate-list-title{
      font-family: PingFangSC-Medium;
      font-size: .362rem;
      height: .435rem;
      line-height: .435rem;
      color: #1a1a1a;
      margin-bottom: .338rem;
      text-align:left;
    }
    .video-relate-list{
      .video-relate-card{
        width: 100%;
        margin-bottom: .338rem;
        .video-relate-card-img{
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 5.097rem;
          border-radius: .193rem;
          .hk-filter-earlybird{
            filter: sepia(.25) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-5deg);
            position: relative;
            &::before{
              display: block;
              height: 100%;
              left: 0;
              position: absolute;
              top: 0;
              width: 100%;
              z-index: 1;
            }
            img{
              width: 9.275rem;
              height: 5.097rem;
            }
          }
          .video-relate-card-img-bg{
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 96;
            .video-relate-card-img-title{
              position: absolute;
              top: .193rem;
              left: .242rem;
              overflow: hidden;
              max-width: 8.768rem;
              width: 100%;
              font-family: PingFangHK-Medium;
              font-size: .459rem;
              line-height: .564rem;
              white-space: nowrap;
              text-overflow: ellipsis;
              padding-right: .242rem;
              color: #fff;
              text-shadow: 0 0 0.5rem rgb(0, 0, 0, 0.5);
              text-align:left;
            }
            .video-relate-card-img-play{
              position: absolute;
              top: 50%;
              left: 50%;
              width: 1.159rem;
              height: 1.159rem;
              background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQBAMAAAAVaP+LAAAAKlBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAKCgr39/f///+oqKji4uL+/v7///+EEjHgAAAADXRSTlMAAwYKEBUbIp3oQm7HZVoj5wAABIdJREFUaN7tmktS3DAQhjM3MNxg4AZINxDcgPENxhDYj8MFQiqPfUJgm0kW2YaqVLFNCqqyxzC6S9RqPeyxRg9byWp6xYav/n7I0+rWixdb21rXJjtoRRYK2nDOzrrlkDPcQRdnEEn/6x7aYFIXAzYdRELHdvc6NoDU4hC0AyuqSHUMOPvE2IEhJQratXIkh5B0ko4zIqgw/CuZ1OIwdiiNdkhFvGe7GB96aIyqQCWQUBBw2GHblKb41KEgpedohib+ZCyNNNGCQM/M2PGapljPUBAQ5pUwJYqmkKRn+yLrwCnLSpkkMdQUVQQTLUjqqawhiUWnToKkoCPgnL2/b67f1UCaa01xpAl6JgWV1dcbDvZxWRsSagqnTnkGgsrqFVf22CJFFoEBCcfOb7gh1fUCSMfRqUPPmBR0x619tqSo1MkQoWfVKW/bgyTNlKaDEAlBImdC0IcOiF8aUkzqJhgi8Oy8y+HNbV3LeooqJ6wiCFF1sQbiq6UlkVARqHJ0eIZFUKsiCKZOx3pWnvG+PddIOtbltDngCOrnrF8E1JIKL+ilC9QuAm/qbNKq706QKYLuqXOCIGnOWPeKwAa8cIMg1id/3CBVBK3UTV2SIkBwfmt76g7ckhRIhOjkZhOolToIk1sSgMRJAxDfbFc24NI5h6SJyX7tAfG3hkSNc4NAzWU7TOhc4QSVfpAqAhUmlDQMBEWgnDNRcoFmQRB+xI2knm8GdBICQRGAc1ZS0TuzNAoE51c415LkOPxRIHF+F0aSA7Qfq4jzWyOp51saqFlqSdK34SBRBFIS7ftmD38UiD9LSUzlbQSIX0pJ4JsbVMWCmi8aNB2niF9p37rRTlbEV4sqD4i/Rt8g2uNAT9VcR3scqIEg0Qwg/kNGOwPoV6VBO+NAT5U8bt1CGgJ6FmljOUCPuUArVUijQQ0W0hb0P4KdLf3ZChKOCPy0jQZlO7S5PiMr+LDl+EI+5/rU5vr4N/6fo2w/kGXaTzbd+JMd7drvQBOR2NYwR1uT1Gg9LpUgR6OVAlqp1o9uaP1iu9pGN6NkZDOq22Pqbo+j+2zTsBNHwz7kCkFdV4jES01HUDHymkV916yUix/xXvwCV1FuOChoOhRkL8dk4+V4B6Y+gev6gxwh6PnIhuu6OLU0PECwAfIMEFRp3/hHGq3xn2ekETlkIaEhCwmMfRZ2bOsb++zh0O8uOIginkFUazR24U1Ydz5abADJtJ36E9YOUDFmfEhYaHwYGGiqQBMWHGhi2oRv3zyJD8/ZbdqcQ9+Tqoyc/E9skDxjaBo1hs44GMcguUb1s+hRvVoeUM/ygMQuD0LrDBa9zvAvWEjkgkWtfFBSWZ29uf90/VOkfcjKR/rGQNIc908gp5ylcaxvuF7TazHFofFrMbOoY0AqQdV8Xg5Z1PVXh6VaHbK01eFELzMpWVtm0sS1qFmvSpKxZE5r4dsmEZq+OrYraEqIXvaydE57Ka734XTQUry7phexYcOW6/keDuR7ypDtcUW+5x75HqDkexKT7ZFOvmdDGR8y5XtatbV/Zn8B7X41Zz8UNugAAAAASUVORK5CYII=) no-repeat;
              background-size: cover;
              -webkit-transform: translate(-50%,-50%);
              transform: translate(-50%,-50%)
            }
            .video-relate-card-img-bottom{
              position: absolute;
              right: .475rem;
              bottom: .242rem;
              display: flex;
              z-index: 98;
              align-items: center;
              .bottom-play{
                margin-right: .121rem;
                height: .266rem;
                font-family: PingFangSC-Regular;
                font-size: .242rem;
                line-height: .242rem;
                color: #fff;
              }
            }
            .video-relate-card-img-app{
              position: absolute;
              bottom: .242rem;
              left: .242rem;
              min-width: 1.127rem;
              height: .362rem;
              border-radius: .036rem;
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              justify-content: center;
              align-items: center;
              z-index: 98;
              .app{
                font-family: PingFangSC-Regular;
                font-size: .242rem;
                line-height: .282rem;
                text-align: center;
                color: #fff;
                margin-top: .04rem;
              }
            }
            .card-shadow{
              height: 1.329rem;
              position: absolute;
              right: 0;
              bottom: 0;
              z-index: 97;
              width: 100%;
              border-radius: 0 0 .193rem .193rem;
              background-image: linear-gradient(180deg,transparent,#000 70%);
              opacity: .7;
            }
          }
        }
        .video-relate-bottom{
          display: flex;
          height: 1.208rem;
          justify-content: space-between;
          .video-relate-bottom-user{
            align-items: center;
            display: flex;
            img{
              width: .604rem;
              height: .604rem;
              border-radius: 50%;
            }
            span{
              overflow: hidden;
              max-width: 3.221rem;
              margin-left: .145rem;
              font-family: PingFangSC-Medium;
              font-size: .338rem;
              line-height: .403rem;
              white-space: nowrap;
              text-overflow: ellipsis;
              color: #333;
            }
          }
          .video-relate-bottom-btns{
            display: flex;
            align-items: center;
            span{
              display: flex;
              margin-right: .37rem;
              font-family: PingFangSC-Regular;
              font-size: .29rem;
              line-height: .435rem;
              color: #000;
            }
            .like{
              i{
                width: .435rem;
                height: .435rem;
                margin-right: .032rem;
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIev/tYAAAATdFJOUwAqCoJb8RhIwTjQqm35m7jieYnszPMsAAABhUlEQVRIx+WW2XqDIBBGhQwiO8r7v2vDaMvikqFf7/pfkeCR2XGa/lqz3fwKbAziPu0KcgQL6UeWTkFKv+HwMCF2TMxULAPh7SHEzG3UgOSHV4xnfoGmBr+49MrLeQADXKq8JCaBFWwexWRxE2iYzM+q3t6PWksc2ICR+v1orA5mdNf8vrbkBHBdGWZydcFbkvHnpC2pqoxYStoZdX8UYAE7VpVZkTmfyMCuaziqfv1+i2g53bkJsd715X/XcktjWqi3XN2YnO1SVp+admkcuEvThk1b3HtRoCMbpdKwF5NRUErxoaF8M3B8U8EPVfcTlDwTHadgph4R4fhBO03XcVwoGCbfDGOySRwZM00XUTG0cZlGsdZGMtbaSMU6G6kYdA1AxDobiRjWcZhGMd/PZxKGm3EaxJQ4XeM4Qp+xndLnGSGfMIuUaOcF3piR3WEc9pnl5EX3JRcwMf7VaPPLMSnd6ZZT3Qy9klAfvnou5S8vKxmfmPu7htsQr0x1UXsgfz39X30B+Ao2FkNbeU0AAAAASUVORK5CYII=);
                background-size: cover;
              }
            } 
            .comment{
              i{
                width: .435rem;
                height: .435rem;
                margin-right: .032rem;
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAAAOVBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLcPMfAAAAEnRSTlMAeZsh1DvECfVNLliOY60V5bXWfaLXAAABaUlEQVRIx+1W2Y6AIAyUSyin+v8fuwHUKDcmm+zD9k1w6HRKaZfl337dOGGEzyEAU3F4ExTDIJbZCLlMWNYHyf3IbZcdevgoG25RJfT6bdVIgUJ6vRYoqUe1nRjj7jVnTuRWi5BFKSgk6xA5iDKORF+osIWivxJPHs4UUDwSAhFa0CVoKGpKy4DD+XrgAVW5IOxnp+61uF7x7amKgXvzKoTYEzVtm+JN075l9BGvnevq8y54dpLpwEzGKKjvOjCX5YAOcIwsX7L50HQXpn1wT0V6SXuk7qEJ8d+qC1P+N5IkG7owSBIuv3lzI2nLY1uOT0p+zRtO3Y/dEjWiSX4nw0HzFRDrjc3W21ndfLa6A4P5tyS6E2T25Qq5rLurvZPctmC1V5nvFRLtHqCPMol2x+Fnj9KGJUTa/e3Rb7fVamQUwEA3rfXsXu82tAFqTQpO6SJ0YC7hUiG7bvc8MzEFxYGLSDY7c/0x+wF62CfSowkPqQAAAABJRU5ErkJggg==);
                background-size: cover;
              }
            } 
            .repley{
              i{
                width: .435rem;
                height: .435rem;
                margin-right: .032rem;
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHPTtPsAAAAVdFJOUwC3pR55OysGE/eWxUfi7oTUVmjpbwuMR/IAAAGTSURBVEjH7ZZJloAgDEQZlEFRnLj/VftJAEEUobfdWfMhhqpChP5kcfoLiGFpJBGNVC/NWTtra3AxUHPfdJjxJVu44yS0bVSqeqw7Aa5aOcBQP9tG10aslfMYYrvltkYMsclyRyOGKHBdBSWGC/OcLiP0GGEOHkMCJDMURLWNQR8B++TUdEFmiZqGzchzeziCzBiL33P8wWGzVz05FLst4LAl5i+UHBR//OpnzlH41ZecQO8JJ+wwZFF8JL+/ocaSsCjKF1VnZMtFq8Y6uVqpqjQ6xjrKiNfDCy1GUuEy1VLpAhaR9vhhYHfdEQU9lxPfiXKM0/3caEoWUZqmv7NOKq09+tJeY3DPHsWjM/jNAEEzdNgv51znuxi62VS4idBBxoYL7nZheQ8hBgm6pVDAINLzSdv5d8HaEmuNL2yVL94Q0QmT7nmSk5t5fT7CQfvGb/HaFR5HnyLXU+0xXXyK2amBZc3CHMQ7vQuIKpZZRGTi/arVflEuw4+iYbSYt/wqaEeRJsqZUurmv6dek46h/6qtH1MRMHiaK3pQAAAAAElFTkSuQmCC);
                background-size: cover;
              } 
            }
            .more{
              display: flex;
              height: .435rem;
              margin-right: 0;
              padding: 0 .097rem;
              flex-flow: column;
              justify-content: space-around;
              i{
                width: .072rem;
                height: .072rem;
                border-radius: 50%;
                background: #000;
              }
            }
          }
        }
      }
    }
    .video-relate-list-more{
      margin: .37rem auto .242rem;
      display: flex;
      align-items: center;
      justify-content: center;
      height: .475rem;
      .text{
        font-family: PingFangSC-Medium;
        font-size: .338rem;
        color: #333;
        text-align: center;
      }
      .icon{
        margin-left: .089rem;
        width: .322rem;
        height: .322rem;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURUdwTDc3NzQ0NDMzMzMzMzMzMzQ0NDMzMzk5OTU1NTU1NTMzM4Me88EAAAALdFJOUwAieuLnh4LdEl5FmU6S0QAAAJ1JREFUKM9jYBgF6IAxqQHB4VATANMtuwsRguK7PcD07N3bBeC6qnfvBDOkdyOUiu/evRHMYN0NVwpUuDsAwozevdsQwhLevXsrVA9Q6WawUkZruEKEUiSFcKUghQkI12WDlQIVbkPyFBtIKZpCsFJHEVSFDAxMu3dv8d69WwE1VLR3A8EmtKBiAgkqoAegNqZCsFIFzLCe4jk80gwA8j4+fUT6ivEAAAAASUVORK5CYII=);
        background-size: cover;
      }
    }
  }
  .comment-module{
    padding: .346rem .362rem .298rem;
    .comment-title{
      font-family: PingFangSC-Medium;
      font-size: .362rem;
      height: .507rem;
      line-height: .507rem;
      color: #000;
      display: flex;
      align-items: center;
    }
    .comment-default{
      margin-top: .403rem;
      height: .87rem;
      display: flex;
      .comment-default-avatar{
        width: .845rem;
        height: .845rem;
        background: url(data:image/png;base64,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);
        background-size: cover;
      }
      .comment-default-input{
        margin-left: .193rem;
        width: 8.237rem;
        height: .87rem;
        padding: .201rem .242rem .193rem;
        background: rgba(25,25,26,.05);
        border-radius: .193rem;
        font-family: PingFangSC-Regular;
        font-size: .338rem;
        color: #888;
        line-height: .475rem;
      }
    }
  }
  .open-app-bottom{
    display: flex;
    width: 96%;
    height: 1.5rem;
    padding: 0 2% 0 2%;
    justify-content: space-between;
    .open-app-bottom-logo{
      width: 3.333rem;
      height: .99rem;
      margin-top: .266rem;
      img{
        max-width: 3.986rem;
        min-width: 3.333rem;
        height: .99rem;
      }
    }
    .open-app-bottom-open{
      width: 1.981rem;
      height: .676rem;
      line-height: .676rem;
      text-align: center;
      margin-top: .411rem;
      font-family: PingFangSC-Medium;
      font-size: .338rem;
      color: #fff;
      border-radius: .193rem;
      background-image: -webkit-linear-gradient(35deg,#ff4141,#ff6031);
      background-image: linear-gradient(55deg,#ff4141,#ff6031)
    }
  }
  .open-button-wrap{
    position: fixed;
    bottom: 1.594rem;
    left: 0;
    z-index: 9998;
    width: 100%;
    text-align: center;
    &.hide {
      display: none;
    }
    .open-app-button{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: .966rem;
      background: #ff4141;
      box-shadow: 0 0.129rem 0.193rem 0 rgb(118 92 92 / 20%);
      border-radius: .483rem;
      font-family: PingFangSC-Semibold;
      font-size: .386rem;
      color: #fff;
      padding: 0 .483rem;
      img{
        display: inline-block;
        width: .483rem;
        height: .483rem;
        margin-right: .145rem;
      }
    }
  }
}
</style>
