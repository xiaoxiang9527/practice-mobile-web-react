import axios from 'axios';
import {articleUrl} from '../../apis';

export const initArticle='initArticle'
const renderArticle=(article)=>{
  return{
    type:initArticle,
    article
  } 
}
const getArticle=()=>{
  return(dispatch)=>{
    let article
    axios.get(articleUrl).then((response)=>{
      article=response.data.data
      dispatch(renderArticle(article))
    }).catch((error)=>{
      let article={}
      dispatch(renderArticle(article))
    })
  }
}

export default {
  getArticle
}
