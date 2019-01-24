import axios from 'axios';
import {kaiYanUrlOne,kaiYanUrlTwo} from '../../apis';

export const initListOneKaiYan='initListOneKaiYan'
const initListOne=(newList)=>{
  const itemlist=newList.filter((item)=>{return item.type==="video"})
  return{
    type:initListOneKaiYan,
    itemList:itemlist
  } 
}
const fetchListOne=()=>{
  return(dispatch)=>{
    let itemList
    axios.get(kaiYanUrlOne).then((response)=>{
      itemList=response.data.itemList
      dispatch(initListOne(itemList))
    }).catch((error)=>{
      let itemList=[]
      dispatch(initListOne(itemList))
    })
  }
}


export const initListTwoKaiYan='initListTwoKaiYan'
const initListTwo=(newList)=>{
  const itemlist=newList.filter((item)=>{return item.type==="video"})
  return{
    type:initListTwoKaiYan,
    itemList:itemlist
  } 
}
const fetchListTwo=()=>{
  return(dispatch)=>{
    let itemList
    axios.get(kaiYanUrlTwo).then((response)=>{
      itemList=response.data.itemList
      dispatch(initListTwo(itemList))
    }).catch((error)=>{
      let itemList=[]
      dispatch(initListTwo(itemList))
    })
  }
}

export default{
  fetchListOne,
  fetchListTwo
}