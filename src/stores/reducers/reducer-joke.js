import {fromJS} from 'immutable';
import { initJokeList,switchJokeShow } from '../actions/action-joke';

const initState=fromJS({
  jokeList:[],
  jokeShow:true
})

export default (state=initState,action)=>{
  if (action.type===initJokeList){
    return state.set('jokeList',state.get('jokeList').concat(action.jokeList))
  } 
  else if(action.type===switchJokeShow){  
    return state.set('jokeShow',action.jokeShow)
  }
    return state
  }
