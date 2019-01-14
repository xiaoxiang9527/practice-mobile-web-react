import {fromJS} from 'immutable';
import {initEyepetizerListOne,initEyepetizerListTwo} from '../actions';


const initState=fromJS({itemList:[]})
export default (state=initState,action)=>{
  if (action.type===initEyepetizerListOne){
    return state.set('itemList',action.itemList)
  }
  else if(action.type===initEyepetizerListTwo){
    return state.set('itemList',state.get('itemList').concat(action.itemList))
  }
  else{
    return state
  } 
}
