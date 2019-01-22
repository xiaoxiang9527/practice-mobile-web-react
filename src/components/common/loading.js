import React from 'react';
import PropTypes from 'prop-types';
import styles from './loading.module.css';

export default function Loading(props){
  if (props.loadingStateCode>=2){
    return(
      <div className={styles.bottomLine}>
      别往下拉啦，我也是有底线的～～～
    </div> )
  }
  else{
    return(
      <div className={props.loadingState?styles.Loading:`${styles.Loading} ${styles.loadingHide}`}>
        <div className={styles.loader}></div>
      </div>
    )
  }
}

Loading.propTypes={
  loadingState:PropTypes.bool.isRequired,
  loadingStateCode:PropTypes.number
}
