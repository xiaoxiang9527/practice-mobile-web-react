import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './footer-button.module.css';
import actions from '../../stores/actions/action-common';

class FooterButton extends Component{
  constructor(props){
    super(props)
    this.switchChannel=this.switchChannel.bind(this)
  }
  componentDidMount(){
    if (this.props.history.location.pathname.indexOf(this.props.channelUrl)!==-1){
      this.props.switchChannelButton()
    }
  }
  switchChannel(){
    this.props.history.push(this.props.channelUrl)
    this.props.switchChannelButton()
  }
  render(){
    return (
      <div onClick={this.switchChannel} className={
        this.props.channelActive===this.props.channelId ?`${styles.FooterButton} ${styles.buttonActive}`:styles.FooterButton
        }>
        <span className={`iconfont ${styles.buttonSize} ${this.props.buttonClass}`}></span>
        <div className={styles.buttonName}>{this.props.name}</div>
      </div>
    )
  }
  }

const mapDispatchToProps=(dispatch,ownProps)=>{
  return{
    switchChannelButton(){
    dispatch(actions.switchChannelButton(ownProps.channelId))
  }
}
}

const mapStateToProps=(state)=>{
  return{
    channelActive:state.getIn(['reducerCommon','channelActive'])
  }
}

FooterButton.proTypes={
  channelActive:PropTypes.oneOf([1,2,3,4]).isRequired,
  switchChannelButton:PropTypes.func.isRequired
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(FooterButton))

