import {fromJS} from 'immutable';
import {initEyepetizerListOne,initEyepetizerListTwo} from '../actions';


const initState=fromJS({itemList:[],itemIdList:[]})
export default (state=initState,action)=>{
  if (action.type===initEyepetizerListOne){
    return state.merge({
      'itemList':action.itemList,
      'itemIdList':action.itemList.map((item)=>{
        return item.data.id
      })
    })
  }
  else if(action.type===initEyepetizerListTwo)
    {
      //第二次和第一次获取的视频有重复饿，以下filter为了去重
    return state.set('itemList',state.get('itemList').concat((action.itemList).filter(
      (item)=>{
        return state.get('itemIdList').indexOf(item.data.id)<0
      }
    )))
  }
  else{
    return state
  } 
}

