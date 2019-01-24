import React,{Component} from 'react';
import styles from './index.module.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../../stores/actions/action-duanwen';
import actionsCommon from '../../stores/actions/action-common';
import Loading from '../common/loading';


function detectBottom(cb){
  if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight+50) {
    if(this.state.loadingState===false && this.state.loadingStateCode<2){
      this.setState({loadingState:true})
        cb()
    }
  }
}


class DuanWen extends Component{
  constructor(props){
    super(props)
    this.state={
      loadingState:true,
      loadingStateCode:0
    }
    this.detectBottom=detectBottom.bind(this)
  }
  componentDidMount(){
    this.props.fetchData()
    this.props.switchChannelButton()
    window.addEventListener('scroll',this.detectBottom(this.props.fetchData))
    let _this=this
    this.refs.pageOfDuanWen.addEventListener('touchstart', function (ev){
      let x=0
      let disX=ev.targetTouches[0].clientX-x;
      function fnMove(ev){
        x=ev.targetTouches[0].clientX-disX;
        if(x<0){
          if(x>(-(this.offsetWidth/4))){
            this.style.transform=`translate(${x}px,0px)`
          }
          else{
            this.style.transform=`translate(${(-(this.offsetWidth/4))}px,0px)`
          }
        }
      }
      function fnEnd(){
        this.style.transition='0.3s all ease'
        if(x>-(this.offsetWidth/4)){
          this.style.transform='translate(0px,0px)'
        }
        else{
          _this.props.fetchData()
          this.style.transform='translate(0px,0px)'
        }
        this.removeEventListener('touchmove', fnMove, {passive: true});
       this.removeEventListener('touchend', fnEnd, {passive: true});
      }

      this.addEventListener('touchmove', fnMove, {passive: true});
      this.addEventListener('touchend', fnEnd, {passive: true});
    }, {passive: true})
  }
   componentWillUnmount(){
     window.removeEventListener('scroll',this.detectBottom)
   }
   componentDidUpdate(prevProps){
     if(prevProps.article!==this.props.article){
       window.scrollTo(0,0)
       this.setState({loadingState:false})
     }
  }
  render(){
    const data=this.props.data
    return(
      <div className={styles.Article} ref="pageOfDuanWen">
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
