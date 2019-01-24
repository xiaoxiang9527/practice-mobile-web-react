import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import actions from '../../stores/actions/action-xiaohua';
import styles from './xiaohua-header.module.css';

class XiaoHuaHeader extends Component{
  constructor(props){
    super(props)
    this.switchXiaoHua=this.switchXiaoHua.bind(this)
    this.switchQuTu=this.switchQuTu.bind(this)
  }
  componentDidMount(){
    if (this.props.location.pathname==='/xiaohua/qutu')
    this.props.switchShow(false)
  }
  switchXiaoHua(){
    this.props.switchShow(true)
    this.props.history.push('/xiaohua')
  }
  switchQuTu(){
   this.props.switchShow(false)
    this.props.history.push('/xiaohua/qutu')

  }
  render(){
    const {xiaoHuaShow}=this.props
    return(
      <ul className={styles.JokeHeader}>
      <li className={xiaoHuaShow?styles.jokeShow:''} onClick={this.switchXiaoHua}>笑话</li>
      <li><div className={styles.delimeter} /></li>
      <li className={xiaoHuaShow?'':styles.jokeShow} onClick={this.switchQuTu}>趣图</li>
      </ul>
  ) 
  }
}

const mapStateToProps=(state)=>{
  return{
    xiaoHuaShow:state.getIn(['reducerXiaoHua','xiaoHuaShow'])
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    switchShow(show){
      dispatch(actions.switchShow(show))
    }
  }
}

XiaoHuaHeader.propTypes={
  xiaoHuaShow:PropTypes.bool.isRequired,
  switchShow:PropTypes.func.isRequired
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(XiaoHuaHeader))