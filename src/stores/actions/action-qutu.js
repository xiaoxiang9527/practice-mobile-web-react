import axios from 'axios';
import {quTuUrl} from '../../apis';

export const initListQuTu='initListQuTu'
const initList=(quTuList)=>{
  return{
    type:initListQuTu,
    quTuList
  } 
}
const fetchList=()=>{
  return(dispatch)=>{
    let quTuList
    axios.get(quTuUrl).then((response)=>{
      quTuList=response.data.data
      dispatch(initList(quTuList))
    }).catch((error)=>{
      let quTuList=[]
      dispatch(initList(quTuList))
    })
  }
}

export default {
  fetchList
}
