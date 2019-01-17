import axios from 'axios';
import {eyepetizerUrlOne,eyepetizerUrlTwo} from '../../apis';


export const activateCurrent='activateCurrent'
const switchChannel=(channelId)=>{
  return{type:activateCurrent,
    channelActive:channelId}
}



export const initEyepetizerListOne='initEyepetizerListOne'
const renderEyepetizerListOne=(newList)=>{
  const itemlist=newList.filter((item)=>{return item.type==="video"})
  return{
    type:initEyepetizerListOne,
    itemList:itemlist
  } 
}
const getEyepetizerListOne=()=>{
  return(dispatch)=>{
    let itemList
    axios.get(eyepetizerUrlOne).then((response)=>{
      itemList=response.data.itemList
      dispatch(renderEyepetizerListOne(itemList))
    }).catch((error)=>{
      let itemList=[]
      dispatch(renderEyepetizerListOne(itemList))
    })
  }
}






export const initEyepetizerListTwo='initEyepetizerListTwo'
const renderEyepetizerListTwo=(newList)=>{
  const itemlist=newList.filter((item)=>{return item.type==="video"})
  return{
    type:initEyepetizerListTwo,
    itemList:itemlist
  } 
}
const getEyepetizerListTwo=()=>{
  return(dispatch)=>{
    let itemList
    axios.get(eyepetizerUrlTwo).then((response)=>{
      itemList=response.data.itemList
      dispatch(renderEyepetizerListTwo(itemList))
    }).catch((error)=>{
      let itemList=[]
      dispatch(renderEyepetizerListTwo(itemList))
    })
  }
}


export default {
  switchChannel,
  getEyepetizerListOne,
  getEyepetizerListTwo
}
