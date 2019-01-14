import {activateCurrent} from '../actions';
import {fromJS} from 'immutable';

const initState=fromJS({channelActive:1})

export default (state=initState,action)=>{

  if (action.type===activateCurrent){
    return state.set('channelActive',action.channelActive)
  }
  else{
    return state
  }
}