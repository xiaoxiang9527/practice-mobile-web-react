import React from 'react';
import styles from './joke-container.module.css';

const JokeContainer=(props)=>{
  return(
    <div className={styles.JokeContainer}>
    {props.content}
    </div>
  )
}

export default JokeContainer