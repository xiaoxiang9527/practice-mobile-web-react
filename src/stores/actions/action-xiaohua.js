import axios from 'axios';
import {xiaoHuaUrl} from '../../apis';

export const initListXiaoHua='initListXiaoHua'
const initList=(xiaoHuaList)=>{
  return{
    type:initListXiaoHua,
    xiaoHuaList
  } 
}
const fetchList=()=>{
  return(dispatch)=>{
    let xiaoHuaList
    axios.get(xiaoHuaUrl).then((response)=>{
      xiaoHuaList=response.data.data
      dispatch(initList(xiaoHuaList))
    }).catch((error)=>{
      let xiaoHuaList=[]
      dispatch(initList(xiaoHuaList))
    })
  }
}


export const switchShowXiaoHua='switchShowXiaoHua'
const switchShow=(show)=>{
  return{
    type:switchShowXiaoHua,
    xiaoHuaShow:show
  }
}


export default {
  fetchList,
  switchShow
}
