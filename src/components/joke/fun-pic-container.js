import React from 'react';
import styles from './fun-pic-container.module.css';

const FunPicContainer=(props)=>{
  return (
    <div className={styles.container}>
      <div className={styles.picInfo}>
        <span>{props.content}</span>
      </div>
      <img className={styles.pic} src={props.url} alt=""></img>
    </div>
  )
}

export default FunPicContainer