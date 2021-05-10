<template>
  <scroller
      class="scroller"
      style="margin-top:2.416rem;"
      :on-refresh="refresh"
      :on-infinite="infinite"
      ref="myscroller"
    >
    <div class="video-list">
      <div class="video-list-inner">
        <div class="video-li" v-for="(item,index) in videoList" :key="index">
          <div class="video-list-item" @click="toPlayPage(item.Video_ID)">
            <div class="video-list-item-main">
              <div class="video-list-item-inner">
                <div class="video-list-item-poster">
                  <img :src="item.CoverImgs" alt="" usescroll="1" willloadbtn="600" class="video-list-item-poster-img">
                </div>
                <div class="video-list-item-status">
                  <div class="video-list-item-poster-shade">
                    <h4>{{item.Title}}</h4>
                  </div>
                  <div class="video-list-item-poster-duration">
                    <span class="playNum">{{item.Views}}次播放</span>
                    <span>{{item.Duration}}</span>
                  </div>
                  <div class="video-list-item-status-warper">
                    
                  </div>
                </div>
              </div>
              <div class="video-list-item-video"></div>
            </div>
          </div>
          <div class="video-list-item-tools">
            <div class="video-list-item-author">
              <div class="video-list-item-author-avatar">
                <img :src="item.HeadImg" alt="">
                <span class="v-tag"></span>
              </div>
              <div class="video-list-item-author-nickname">
                <p>{{item.NickName}}</p>
                <div class="item-author-msg">{{item.CompanyName}}</div>
              </div>
            </div>
            <div class="video-list-item-btns">
              <div class="video-list-item-btns-comment video-icon-btn-comment">
                <img src="https://hiphotos.baidu.com/fex/pic/item/279759ee3d6d55fb3e46d8f263224f4a21a4dd66.jpg" alt="">
                <span>4</span>
              </div>
              <div class="video-list-item-btns-share video-icon-btn-share">
                <img src="https://hiphotos.baidu.com/fex/%70%69%63/item/77c6a7efce1b9d16180434b5fddeb48f8d546427.jpg" alt="">
                <span>分享</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </scroller>
</template>

<script>
import http from '@/libs/http'
import {URL} from '@/libs/url'
export default {
  data() {
    return {
      classId:15000,
      videoList:[],
      noData: false,
      isEmpty: true,
      pageIndex:0,
    }
  },
  mounted() {
  },
  methods: {
    getArticleList(done){
      var that = this;
      let ts = parseInt(new Date().getTime() / 1000);
      let rd = that.common.getRandomNum(5, 50);
      let size = 10;
      http({
        //这里是你自己的请求方式、url和data参数
        method: 'POST',
        url:URL.recordUrl.getVideoPageList +
        "?appKey=" +
        that.common.appkey +
        "&pageSize=" +
        size +
        "&pageIndex=" +
        // that.common.getRandomNum(1, 5) +
        that.pageIndex +
        "&classId=" +
        that.classId+
        "&ts=" +
        ts +
        "&rd=" +
        rd +
        "&tk=" +
        that.$md5(`${ts}_${rd}_${that.common.appkey}_${size}`).toUpperCase(),
        data: {},
        //假设后台需要的是表单数据这里你就可以更改
        headers: {
          "Content-Type":"application/x-www-form-urlencoded",
        }
      }).then(function (res) {
        var data = res.data;
        if (that.pageIndex === 1) {
          that.videoList = data;
          done && done()
          that.$refs.myscroller.finishPullToRefresh()
          that.$refs.myscroller.finishInfinite(false) // 启用上拉加载更多
          that.noData = false;
          // that.$toast("加载完成");
        }else{
          that.videoList = that.videoList.concat(data)
          done && done()
          if (data.length === 0) {
            that.noData = true
          } else {
            that.$refs.myscroller.finishInfinite(false)
          }
        }
        
      }).catch(function (err) {
        console.log(err);
      });
    },
    //查询方法
　　searching () {
　　　this.pageNo = 1
　　　this.$refs.myscroller.finishInfinite(false) // 启用上拉加载更多
　　　this.noData = true
　　　this.isEmpty = false
　　　this.$refs.myscroller.scrollTo(0, 0, false) // 列表滚动到顶部
　　　this.getArticleList()
　　},
    refresh (done) {
      console.log("下拉刷新");
      let self = this
      self.pageIndex = 1
      setTimeout(() => {
        self.getArticleList(done)
      }, 1500)
    },
    // 初始化
    infinite (done) {
      let self = this
      if (self.noData) {
        self.$refs.myscroller.finishInfinite(true) // 禁止上拉加载更多
        return false
      }
      self.pageIndex++
      setTimeout(() => {
        self.getArticleList(done)
      }, 1500)
    },
    toPlayPage(videoId){
      this.$store.dispatch('setVideoId',videoId);//keycode
      // this.$router.push({name:'playPage'});
      var channelid = this.common.getCaption(window.location.href)
      this.$router.push({path:`/playPage#${channelid}`,query:{videoId:videoId}});
    }
  }
}
</script>

<style  lang="less">
  .video-list{
    box-sizing: border-box;
    position: relative;
    left: 0;
    width: 100%;
    text-align: left;
    background-color: #fff;
    .video-list-inner{
      width: 100%;
      height: 100%;
      .video-list-item{
        position: relative;
        width: 100%;
        padding-top: 56.25%;
        background-color: #999;
        .video-list-item-inner{
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          .video-list-item-poster{
            position: relative;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            img{
              position: absolute;
              z-index: 1;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              width: 100%;
              margin: auto;
              background-image: url(https://hiphotos.baidu.com/fex/pic/item/d788d43….jpg);
              background-repeat: no-repeat;
              background-position: 50%;
              background-size: 35%;
            }
          }
          .video-list-item-status{
            position: absolute;
            z-index: 100;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            width: 100%;
            height: 100%;
            margin: auto;
            align-items: center;
            justify-content: center;
            .video-list-item-poster-shade{
              position: absolute;
              z-index: 101;
              top: 0;
              left: 0;
              width: 100%;
              height: 2.536rem;
              background: -webkit-gradient(linear,left top,left bottom,color-stop(0,rgba(0,0,0,.6)),color-stop(100%,transparent));
              h4{
                margin: .314rem .411rem 0;
                font-size: .435rem;
                line-height: .684rem;
                color: #fff;
              }
            }
            .video-list-item-poster-duration{
              display: inline-flex;
              font-size: .29rem;
              color: #fff;
              align-items: center;
              justify-content: center;
              position: absolute;
              z-index: 101;
              right: .121rem;
              bottom: .121rem;
              height: .483rem;
              padding: 0 .242rem;
              line-height: .507rem;
              border-radius: .242rem;
              span{
                display: -webkit-inline-box;
                display: -ms-inline-flexbox;
                display: inline-flex;
                font-size: .29rem;
                color: #fff;
                align-items: center;
                justify-content: center;
                position: relative;
                padding: 0 .193rem;
              }
              .playNum{
                &:before{
                  content: "";
                  display: inline-block;
                  width: .435rem;
                  height: .435rem;
                  margin-right: .048rem;
                  background-image: url(https://hiphotos.baidu.com/fex/pic/item/a1ec08f….jpg);
                  background-repeat: no-repeat;
                  background-position: 50%;
                  background-size: .435rem;
                }
                &:after{
                  content: "";
                  position: absolute;
                  top: 50%;
                  right: 0;
                  width: .024rem;
                  height: .193rem;
                  background: #fff;
                  -webkit-transform: translateY(-50%);
                  transform: translateY(-50%);
                }
              }
            }
            .video-list-item-status-warper{
              display: flex;
              font-size: 0;
              text-align: center;
              align-content: center;
              align-items: center;
              justify-content: center;
              width: 100%;
              height: 100%;
            }
          }
        }
        .video-list-item-video{

        }
      }
      .video-list-item-tools{
        height: 1.063rem;
        background-color: #f5f5f5;
        display: flex;
        padding: .081rem 0;
        .video-list-item-author{
          display: flex;
          height: 100%;
          padding-left: .411rem;
          align-items: center;
          text-overflow: ellipsis;
          flex-direction: row;
          flex: 1 1;
          .video-list-item-author-avatar{
            width: .821rem;
            height: .821rem;
            overflow: hidden;
            position: relative;
            img{
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              border-radius: 50%;
            }
            .v-tag{
              position: absolute;
              right: 0;
              bottom: 0;
              width: .314rem;
              height: .314rem;
              background-size: .314rem;
              &.yellow{
                background:url('https://static01.baomihua.com/img/mobile/v5/vip.png');
              }
            }
          }
          .video-list-item-author-nickname{
            margin-left: .193rem;
            line-height: .314rem;
            font-size: .362rem;
            color: #000;
            font-weight: 800;
            flex: 1 1;
            p{
              font-size: .362rem;
              font-weight: 800;
              color: #000;
              letter-spacing: 0;
              line-height: .362rem;
            }
            .item-author-msg{
              margin-top: .097rem;
              color: #888;
              line-height: .338rem;
              display: -webkit-box!important;
              overflow: hidden;
              text-overflow: ellipsis;
              word-break: break-all;
            }
          }
        }
        .video-list-item-btns{
          display: flex;
          align-items: center;
          justify-content: flex-end;
          min-width: 3.237rem;
          flex-direction: row;
          text-align: right;
          .video-list-item-btns-comment{
            font-size: .314rem;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            img{
              width: .483rem;
            }
            span{
              margin-left: .081rem;
            }
          }
          .video-list-item-btns-share{
            padding-left: .338rem;
            font-size: .314rem;
            padding-right: .483rem;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            img{
              width: .483rem;
            }
            span{
              margin-left: .081rem;
            }
          }
        }
      }
    }
  }
</style>
