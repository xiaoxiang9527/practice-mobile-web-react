import {fromJS} from 'immutable';
import { initListQuTu } from '../actions/action-qutu';

const initState=fromJS({
  quTuList:[]
})

export default (state=initState,action)=>{
  if (action.type===initListQuTu){
    return state.set('quTuList',state.get('quTuList').concat(action.quTuList))
  } 
  else{
    return state
  }
}