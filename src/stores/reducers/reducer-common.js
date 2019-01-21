import {activateCurrent} from '../actions/action-common';
import {fromJS} from 'immutable';

const initState=fromJS(
  {channelActive:1,
  channelList:
  [{name:"开眼",buttonClass:"icon-dianshi",channelId:1,channelUrl:"/eyepetizer"},
  {name:"搞笑",buttonClass:"icon-Laughinghard",channelId:2,channelUrl:"/joke"},
  {name:"短文",buttonClass:"icon-thin-_book_writi",channelId:3,channelUrl:"/article"},
  {name:"一言",buttonClass:"icon-caidanzhaolinggan",channelId:4,channelUrl:"/ace"}
  ]}
)

export default (state=initState,action)=>{

  if (action.type===activateCurrent){
    return state.set('channelActive',action.channelActive)
  }
  else{
    return state
  }
}