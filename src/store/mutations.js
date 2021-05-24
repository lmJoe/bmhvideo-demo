import { SET_USERID, SET_TOKEN, SET_PRODUCTID, SET_VIDEOID,SET_CHANNELTYPE,SET_OPERDIR,SET_CHANNELLIST} from './mutation-types';
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
  [SET_VIDEOID](state,{videoId}){
    if(videoId){
      state.videoId = videoId
    }else{
      state.videoId = {};
    }
  },
  [SET_CHANNELTYPE](state,{channelType}){
    if(channelType){
      state.channelType = channelType
    }else{
      state.channelType = {};
    }
  },
  [SET_OPERDIR](state,{operdir}){
    if(operdir){
      state.operdir = operdir
    }else{
      state.operdir = {};
    }
  },
  [SET_CHANNELLIST](state,{channelList}){
    if(channelList){
      state.channelList = channelList
    }else{
      state.channelList = {};
    }
  },
  
}