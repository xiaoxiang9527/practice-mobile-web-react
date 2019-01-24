import {fromJS} from 'immutable';
import { initDataDuanWen } from '../actions/action-duanwen';

const initState=fromJS({
  data:{title:'1',wc:'2',content:'3'}
})

export default (state=initState,action)=>{
  if (action.type===initDataDuanWen){
    return state.set('data',action.data)
  } 
  else{
    return state
  }
}