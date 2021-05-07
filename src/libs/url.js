let baseURL;
// baseURL = 'http://192.168.30.31:5002'//本地环境
baseURL = 'http://test-kk.baomihua.com:9013'//测试环境
// baseURL = 'https://quickvideo.29293.com:9010';//正式环境
export var URL = {
  recordUrl: {
    /**
     * api
     */
    getArticleList:
      baseURL +
      '/api/article/getArticleList',//获取抽奖列表
    getArticleDetails:
      baseURL +
      '/api/article/getArticleDetails',//获取抽奖物品详情
    getPrizeMsg:
      baseURL +
      '/api/article/getPrizeMsg',//获取中奖公告
    getToPrize:
      baseURL +
      '/api/lottery/prize',//抽奖
    getMyLottery:
      baseURL +
      '/api/lottery/getMyLottery',//奖券号
    getMyArticles:
      baseURL +
      '/api/lottery/getMyArticles',//我的奖品
    getResult:
      baseURL +
      '/api/lottery/getResult',//中奖结果
      
  }
};
