import React,{Component} from 'react';
import styles from './index.module.css';
import {connect} from 'react-redux';
import detectBottom from '../../utils/detect-bottom';
import touchDuanWen from '../../utils/touch-duanwen';
import PropTypes from 'prop-types';
import actions from '../../stores/actions/action-duanwen';
import actionsCommon from '../../stores/actions/action-common';
import Loading from '../common/loading';

class DuanWen extends Component{
  constructor(props){
    super(props)
    this.state={
      loadingState:true,
      loadingStateCode:0
    }
  }
  componentDidMount(){
    this.props.fetchData()
    this.props.switchChannelButton()
    window.addEventListener('scroll',()=>{detectBottom(this,this.props.fetchData)})
    this.refs.pageOfDuanWen.addEventListener('touchstart',(ev)=>{touchDuanWen(ev,this.refs.pageOfDuanWen,this)}, {passive: true})
  }
   componentWillUnmount(){
     window.removeEventListener('scroll',this.detectBottom)
   }
   componentDidUpdate(prevProps){
     if(prevProps.data!==this.props.data){
       window.scrollTo(0,0)
       this.setState({loadingState:false})
     }
  }
  render(){
    const data=this.props.data
    return(
      <div className={styles.DuanWen} ref="pageOfDuanWen">
      <div className={styles.slide}>&lt; &lt; &lt;左滑可以换一篇噢 &lt; &lt; &lt;</div>
        <div className={styles.title}>{data.title}</div>
        <div className={styles.info}>
          <span>作者:{data.author}</span><span></span><span>字数:{data.wc}</span>
        </div>
        <div dangerouslySetInnerHTML={{__html:data.content}} />
        <Loading {...this.state}  />
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return{
    data:state.getIn(['reducerDuanWen','data'])
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    fetchData(){
      dispatch(actions.fetchData())
    },
    switchChannelButton(){
      dispatch(actionsCommon.switchChannelButton(3))
    }
  }
}

DuanWen.propTypes={
  data:PropTypes.object.isRequired,
  fetchData:PropTypes.func.isRequired,
  switchChannelButton:PropTypes.func.isRequired
}

export default connect(mapStateToProps,mapDispatchToProps)(DuanWen)
