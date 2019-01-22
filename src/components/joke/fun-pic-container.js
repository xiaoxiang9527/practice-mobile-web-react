import React from 'react';
import PropTypes from 'prop-types';
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
FunPicContainer.propTypes={
  content:PropTypes.string.isRequired,
  url:PropTypes.string.isRequired
}

export default FunPicContainer