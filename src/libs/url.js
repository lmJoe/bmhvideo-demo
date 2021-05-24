let baseURL,baseURL1;
// baseURL = 'http://192.168.30.31:5002'//本地环境
baseURL = 'https://api.mytv365.com:5003'////正式环境
export var URL = {
  recordUrl: {
    getVideoPageList:
      baseURL +
      '/api/video/getVideoList',//获取抽奖列表 
    getVideoInfo:
      baseURL +
      '/api/video/getPlayUrl',//获取抽奖列表 
    getChannelList:
      baseURL +
      '/api/video/getClassList',//获取频道列表
  }
};
