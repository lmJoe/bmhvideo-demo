//用于定义存储的变量
function loadLocal() {
    return localStorage.getItem("testItem", 'true and false')
  }
  const state = {
    //获取用户信息
    userId:'',
    token:'',
    productId:'',
    videoId:'',
    channelType:'',
    operdir:'',
  }
  
  export default state
  