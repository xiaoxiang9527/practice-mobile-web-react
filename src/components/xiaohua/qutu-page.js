import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import actions from '../../stores/actions/action-qutu';
import actionsXiaoHua from '../../stores/actions/action-xiaohua';
import QuTuContainer from './qutu-container';
import Loading from '../common/loading';
import detectBottom from '../../utils/detect-bottom';
import touchQuTu from '../../utils/touch-qutu';
import styles from './qutu-page.module.css';

class QuTuPage extends Component{
  constructor(props){
    super(props)
    this.state={
      loadingState:true,
      loadingStateCode:0
    }
  }
  componentDidMount(){
    this.props.initList()
    this.props.switchShow(false)
    window.scrollTo(0,0)
    window.addEventListener('scroll',()=>{detectBottom(this,this.props.initList)})
    this.refs.quTu.addEventListener('touchstart',(ev)=>{touchQuTu(ev,this.refs.quTu,this)} , {passive: true})
  }
   componentWillUnmount(){
     window.removeEventListener('scroll',this.bottomDetect)
   }
   componentDidUpdate(prevProps){
     if(prevProps.quTuList!==this.props.quTuList){
       this.setState({loadingState:false})
     }
  }
  render(){
    const quTuList=this.props.quTuList.map(
      (quTu)=>{
        return(
          <QuTuContainer   {...quTu} key={quTu.hashId} />
        )
      })
    return(
      <div className={styles.FunPicPage} ref='quTu'>
        {quTuList}
        <Loading {...this.state}/>
      </div>
  )}
}

const mapStateToProps=(state)=>{
  return{
    quTuList:state.getIn(['reducerQuTu','quTuList'])
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    initList(){
      dispatch(actions.fetchList())
    },
    switchShow(show){
      dispatch(actionsXiaoHua.switchShow(show))
    }
  }
}

QuTuPage.propTypes={
  quTuList:PropTypes.oneOfType([PropTypes.array,PropTypes.object]).isRequired,
  initList:PropTypes.func.isRequired,
  switchShow:PropTypes.func.isRequired
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(QuTuPage))