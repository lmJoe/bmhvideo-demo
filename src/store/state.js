//用于定义存储的变量
function loadLocal() {
    return localStorage.getItem("testItem", 'true and false')
  }
  const state = {
    //获取用户信息
    userId:'',
    token:'',
    productId:'',
    orderNo:'',
    apptype:'',
    operdir:'',
  }
  
  export default state
  