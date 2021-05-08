let baseURL,baseURL3;
// baseURL = 'http://192.168.30.31:5002'//本地环境
baseURL = 'https://push-common.baomihua.com:8081'//测试环境
// baseURL = 'https://quickvideo.29293.com:9010';//正式环境
baseURL3 = 'https://push-common.baomihua.com:8081';
export var URL = {
  recordUrl: {
    getVideoPageList:
      baseURL +
      '/api/webvideo/getVideoPageList',//获取抽奖列表 
    getVideoInfo:
      baseURL3 +
      '/api/video/getVideoInfo',//获取抽奖列表 
  }
};
