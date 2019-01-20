import {fromJS} from 'immutable';
import { initFunPicList } from '../actions/action-fun-pic';

const initState=fromJS({
  funPicList:[]
})

export default (state=initState,action)=>{
  if (action.type===initFunPicList){
    return state.set('funPicList',state.get('funPicList').concat(action.funPicList))
  } 
  else{
    return state
  }
}