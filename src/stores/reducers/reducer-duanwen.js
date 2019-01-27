import {fromJS} from 'immutable';
import { initDataDuanWen } from '../actions/action-duanwen';

const initState=fromJS({
  data:{title:'',wc:'',content:''}
})

export default (state=initState,action)=>{
  if (action.type===initDataDuanWen){
    return state.set('data',action.data)
  } 
  else{
    return state
  }
}