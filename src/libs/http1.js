//引入安装的axios插件
import axios from 'axios'
import store from '@/store/index';
//请求Mock地址封装
axios.defaults.timeout = 100000;
//请求方法封装
const http = options => {
  return new Promise((resolve, reject) => {
    const defaultOptions = {};
    const newOptions = {
      ...defaultOptions,
      ...options
    };
    //该文件主要用在类似于邀请页面以及其他外部打开文件的页面，避免token失效或者刷新
    // let token = window.android_xx.getWXtoken()
    // console.log("token",token);
    // alert("token",window.android_xx.getWXtoken());
    // let token = store.state.token;
    //headers默认传递json格式数据，这里也可以设置token，每次调用都会携带
    newOptions.headers = {
      'content-Type': 'application/json;charset=UTF-8',
      // "deviceToken":'665B6C2FA4A2407B965D87B6B182E340',
      // "deviceToken":token,
      ...newOptions.headers
    };
    //这里可以在调用的时候看到你的method、url、data、headers等参数
    // console.log("newOptions",newOptions);
    axios({
      method: newOptions.method,
      url: newOptions.url,
      data: newOptions.data,
      headers: newOptions.headers,
      dataType: 'JSONP',
    }).then(res => {
      if (res.status == 200) {
       //这里我们只需要获取返回的data中的数据即可
        resolve(res.data);
      } else {
        reject(res);
      }
    }).catch(err => {
      reject(err);
    })
  })
};
export default http