export const activateCurrent='activateCurrent'
const switchChannelButton=(channelId)=>{
  return{type:activateCurrent,
    channelActive:channelId}
}

export default {
  switchChannelButton
}