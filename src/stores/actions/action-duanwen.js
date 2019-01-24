import axios from 'axios';
import {duanWenUrl} from '../../apis';

export const initDataDuanWen='initDataDuanWen'
const initData=(data)=>{
  return{
    type:initDataDuanWen,
    data
  } 
}
const fetchData=()=>{
  return(dispatch)=>{
    let data
    axios.get(duanWenUrl).then((response)=>{
      data=response.data.data
      dispatch(initData(data))
    }).catch((error)=>{
      let data={}
      dispatch(initData(data))
    })
  }
}

export default {
  fetchData
}
