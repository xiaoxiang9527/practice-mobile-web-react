import React from 'react';
import PropTypes from 'prop-types';
import styles from './xiaohua-container.module.css';

const xiaoHuaContainer=(props)=>{
  return(
    <div className={styles.JokeContainer}>
    {props.content}
    </div>
  )
}

xiaoHuaContainer.propTypes={
  content:PropTypes.string.isRequired
}

export default xiaoHuaContainer