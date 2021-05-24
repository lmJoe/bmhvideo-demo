<template>
  <div id="app">
    <router-view class="" v-if="$route.meta.keepAlive != true"/>
  </div>
</template>

<script>
import http from '@/libs/http'
import {URL} from '@/libs/url'
export default {
  name: 'App',
  data() {
    return {
      navList: [],
    }
  },
  mounted() {
    this.getChannelList(); 
  },
  methods:{
    getChannelList(){
      var that = this;
      let ts = parseInt(new Date().getTime() / 1000);
      let rd = that.common.getRandomNum(5, 50);
      let size = 10;
      http({
        //这里是你自己的请求方式、url和data参数
        method: 'POST',
        url:URL.recordUrl.getChannelList,
        data: {},
        //假设后台需要的是表单数据这里你就可以更改
        headers: {
          "Content-Type":"application/x-www-form-urlencoded",
        }
      }).then(function (res) {
        if(res.code==1){
          var data = res.data;
          that.$store.dispatch('setChannelList',data);
          console.log("luytou",window.location.href);
          //获取当前页面链接并取出#后面是否为welcome
          var nowUrl = window.location.href;
          if((nowUrl.indexOf('#/welcome')==-1)&&(nowUrl.indexOf('#/playPage')==-1)&&(nowUrl.indexOf('#/errorpage')==-1)){
            // console.log(`/welcome#${data[0].classID}`)
            that.$router.push({path:`/welcome#${data[0].classID}`});
          }
          
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
  }
}
</script>

<style>
@import 'assets/css/style.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
