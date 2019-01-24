export const activateCurrentChannel='activateCurrentChannel'
const switchChannelButton=(channelId)=>{
  return{type:activateCurrentChannel,
    activatedChannel:channelId}
}

export default {
  switchChannelButton
}