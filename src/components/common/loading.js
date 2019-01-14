import React from 'react';
import styles from './loading.module.css';

export default function Loading(props){
  return(
    <div className={props.loadingState?styles.Loading:`${styles.Loading} ${styles.loadingHide}`}>
      <div className={styles.loader}></div>
    </div>
  )
}
