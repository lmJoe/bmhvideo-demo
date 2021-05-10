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
        <div class="top-video-card"></div>
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
        lotterylistBg:require("../assets/images/header-logo.jpg"),
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
        }
      }
    }
  }
}
</style>
