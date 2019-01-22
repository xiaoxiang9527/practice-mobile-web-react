import React from 'react';
import PropTypes from 'prop-types';
import styles from './joke-container.module.css';

const JokeContainer=(props)=>{
  return(
    <div className={styles.JokeContainer}>
    {props.content}
    </div>
  )
}

JokeContainer.propTypes={
  content:PropTypes.string.isRequired
}

export default JokeContainer