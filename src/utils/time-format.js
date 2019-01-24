export const secsToMins =function (secs){
  const mins=Math.floor(secs/60)
  const reminSecs=secs-mins*60
  return `${mins}分钟${reminSecs}秒`
}

export const formatDate= function(now) {
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const hour = (now.getHours() < 10) ? "0" + now.getHours() : now.getHours();
  const min = (now.getMinutes() < 10) ? "0" + now.getMinutes() : now.getMinutes();
  return year + "-" + month + "-" + date + " " + hour+":"+min
}