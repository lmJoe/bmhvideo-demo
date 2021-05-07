import { SET_USERID, SET_TOKEN, SET_PRODUCTID, SET_ORDERNO,SET_APPTYPE,SET_OPERDIR} from './mutation-types';
export default {
  //获取用户数据
  [SET_USERID](state,{userId}){
    if(userId){
      state.userId = userId
    }else{
      state.userId = {};
    }
  },
  [SET_TOKEN](state,{token}){
    if(token){
      state.token = token
    }else{
      state.token = {};
    }
  },
  [SET_PRODUCTID](state,{productId}){
    if(productId){
      state.productId = productId
    }else{
      state.productId = {};
    }
  },
  [SET_ORDERNO](state,{orderNo}){
    if(orderNo){
      state.orderNo = orderNo
    }else{
      state.orderNo = {};
    }
  },
  [SET_APPTYPE](state,{apptype}){
    if(apptype){
      state.apptype = apptype
    }else{
      state.apptype = {};
    }
  },
  [SET_OPERDIR](state,{operdir}){
    if(operdir){
      state.operdir = operdir
    }else{
      state.operdir = {};
    }
  },
}