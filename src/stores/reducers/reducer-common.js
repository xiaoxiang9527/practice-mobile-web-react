import {activateCurrentChannel} from '../actions/action-common';
import {fromJS} from 'immutable';

const initState=fromJS(
  {activatedChannel:1,
  channelList:
  [{name:"开眼",buttonClass:"icon-dianshi",channelId:1,channelUrl:"/kaiyan"},
  {name:"搞笑",buttonClass:"icon-Laughinghard",channelId:2,channelUrl:"/xiaohua"},
  {name:"短文",buttonClass:"icon-thin-_book_writi",channelId:3,channelUrl:"/duanwen"},
  {name:"一言",buttonClass:"icon-caidanzhaolinggan",channelId:4,channelUrl:"/yiyan"}
  ]}
)

export default (state=initState,action)=>{

  if (action.type===activateCurrentChannel){
    return state.set('activatedChannel',action.activatedChannel)
  }
  else{
    return state
  }
}