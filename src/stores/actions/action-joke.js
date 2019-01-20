import axios from 'axios';
import {jokeUrl} from '../../apis';

export const initJokeList='initJokeList'
const renderJokeList=(jokeList)=>{
  return{
    type:initJokeList,
    jokeList
  } 
}
const getJokeList=()=>{
  return(dispatch)=>{
    let jokeList
    axios.get(jokeUrl).then((response)=>{
      jokeList=response.data.data
      dispatch(renderJokeList(jokeList))
    }).catch((error)=>{
      let jokeList=[]
      dispatch(renderJokeList(jokeList))
    })
  }
}


export const switchJokeShow='switchJokeShow'
const switchShow=(show)=>{
  return{
    type:switchJokeShow,
    jokeShow:show
  }
}


export default {
  getJokeList,
  switchShow
}
