import React from 'react';
import styles from './container.module.css';
import ContainerVideo from './container-video';
import ContainerInfo from './container-info';

function secsToMins(secs){
  const mins=Math.floor(secs/60)
  const reminSecs=secs-mins*60
  return `${mins}分钟${reminSecs}秒`
}

function formatDate(now) {
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const hour = (now.getHours() < 10) ? "0" + now.getHours() : now.getHours();
  const min = (now.getMinutes() < 10) ? "0" + now.getMinutes() : now.getMinutes();
  return year + "-" + month + "-" + date + " " + hour+":"+min
}

export default function Container(props){
  return(
    <div className={styles.Container}>
      <ContainerVideo playUrl={props.data.playUrl} cover={props.data.cover.detail}/>
      <ContainerInfo title={props.data.title} description={props.data.description}
      provider={props.data.provider.name} category={props.data.category}
      duration={secsToMins(props.data.duration)} date={formatDate(new Date(props.data.date))}/>
    </div>
  )
}