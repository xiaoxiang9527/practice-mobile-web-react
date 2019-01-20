import {fromJS} from 'immutable';
import { initArticle } from '../actions/action-article';

const initState=fromJS({
  article:{}
})

export default (state=initState,action)=>{
  if (action.type===initArticle){
    return state.set('article',action.article)
  } 
  else{
    return state
  }
}