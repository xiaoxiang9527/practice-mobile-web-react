import React from 'react';
import styles from './loading.module.css';

const LoadingComponent=()=>{
  return(
    <div className={styles.Loading}>
        <div className={styles.loader}></div>
    </div>
  )
}
export default LoadingComponent