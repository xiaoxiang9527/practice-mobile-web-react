import React from 'react';
import {connect} from 'react-redux';
import styles from './footer-button.module.css';
import actions from '../../stores/actions';

const FooterButton=function (props){
  return (
    <div onClick={props.switchChannel} className={
      props.channelActive===props.channelId?`${styles.FooterButton} ${styles.buttonActive}`:styles.FooterButton
      }>
      <span className={`iconfont ${styles.buttonSize} ${props.buttonClass}`}></span>
      <div className={styles.buttonName}>{props.name}</div>
    </div>
  )
  }

const mapDispatchToProps=(dispatch,ownProps)=>{
  return{
    switchChannel(){
    dispatch(actions.switchChannel(ownProps.channelId))
  }
}
}

export default connect(null,mapDispatchToProps)(FooterButton)

