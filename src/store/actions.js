import { SET_USERID, SET_TOKEN, SET_PRODUCTID, SET_ORDERNO,SET_APPTYPE,SET_OPERDIR} from './mutation-types';
// 给action注册事件处理函数。当这个函数被触发时候，将状态提交到mutations中处理
export default {
    //获取用户登录信息
    setUserId({commit}, userId){
        commit(SET_USERID, {userId});
    },
    setToken({commit}, token){
        commit(SET_TOKEN, {token});
    },
    setProductId({commit}, productId){
        commit(SET_PRODUCTID, {productId});
    },
    setOrderNo({commit}, orderNo){
        commit(SET_ORDERNO, {orderNo});
    },
    //存储导航path路径
    setAppType({commit}, apptype){
      commit(SET_APPTYPE, {apptype});
    },
    // 存储左右滑动判断依据值
    setOperDir({commit}, operdir){
      commit(SET_OPERDIR, {operdir});
    },
}