import axios from 'axios';
import {funPicUrl} from '../../apis';

export const initFunPicList='initFunPicList'
const renderFunPicList=(funPicList)=>{
  return{
    type:initFunPicList,
    funPicList
  } 
}
const getFunPicList=()=>{
  return(dispatch)=>{
    let funPicList
    axios.get(funPicUrl).then((response)=>{
      funPicList=response.data.data
      dispatch(renderFunPicList(funPicList))
    }).catch((error)=>{
      let funPicList=[]
      dispatch(renderFunPicList(funPicList))
    })
  }
}

export default {
  getFunPicList
}
