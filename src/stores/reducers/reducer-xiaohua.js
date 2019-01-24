import {fromJS} from 'immutable';
import { initListXiaoHua,switchShowXiaoHua } from '../actions/action-xiaohua';

const initState=fromJS({
  xiaoHuaList:[],
  xiaoHuaShow:true
})

export default (state=initState,action)=>{
  if (action.type===initListXiaoHua){
    return state.set('xiaoHuaList',state.get('xiaoHuaList').concat(action.xiaoHuaList))
  } 
  else if(action.type===switchShowXiaoHua){  
    return state.set('xiaoHuaShow',action.xiaoHuaShow)
  }
    return state
  }
