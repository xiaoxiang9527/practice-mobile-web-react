import React  from 'react';
import styles from './container-info.module.css'

export default function ContainerInfo(props){
 return(
  <div className={styles.ContainerInfo}>
    
    <span className={styles.tittleSpan}>{props.title}</span>
    <div className={styles.tittleDelimeter}></div>
    <div className={styles.generalInfo}>
      <i>{props.category}</i>
      <div className={styles.delimeter}></div>
      <i>来源:{props.provider}</i>
      <div>
        <i>更新于{props.date}</i>
        <div className={styles.delimeter}></div>
        <i>时长:{props.duration}</i>
      </div>
    </div>
    <div className={styles.tittleDelimeter}></div>
    <span>{props.description}</span>   
  </div> 
  )
}