import React, {PureComponent}from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import actions from '../../stores/actions/action-xiaohua';
import styles from './xiaohua-page.module.css';
import XiaoHuaContainer from './xiaohua-container';
import detectBottom from '../../utils/detect-bottom';
import touchXiaoHua from '../../utils/touch-xiaohua';
import Loading from '../common/loading';

class XiaoHuaPage extends PureComponent{
  constructor(props){
    super(props)
    this.state={
      loadingState:true,
      loadingStateCode:0
    }
  }
  componentDidMount(){
    this.props.initList()
    this.props.switchShow(true)
    window.scrollTo(0,0)
    window.addEventListener('scroll',()=>{detectBottom(this,this.props.initList)})
    this.refs.xiaoHua.addEventListener('touchstart',(ev)=>{touchXiaoHua(ev,this.refs.xiaoHua,this)} , {passive: true})
  }
   componentWillUnmount(){
     window.removeEventListener('scroll',this.bottomDetect)
   }
   componentDidUpdate(prevProps){
     if(prevProps.xiaoHuaList!==this.props.xiaoHuaList){
       this.setState({loadingState:false})
     }
  }
  render(){
    const xiaoHuaList=this.props.xiaoHuaList.map(
      (xiaoHua)=>{
        return(
          <XiaoHuaContainer   {...xiaoHua} key={xiaoHua.hashId} />
        )
      }
    )
    return(
      <div className={styles.JokePage} ref='xiaoHua'>
      {xiaoHuaList}
      <Loading {...this.state}/>
  
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return{
    xiaoHuaList:state.getIn(['reducerXiaoHua','xiaoHuaList'])
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    initList(){
      dispatch(actions.fetchList())
    },
    switchShow(show){
      dispatch(actions.switchShow(show))
    }
  }
}

XiaoHuaPage.propTypes={
  xiaoHuaList:PropTypes.oneOfType([PropTypes.array,PropTypes.object]).isRequired,
  initList:PropTypes.func.isRequired,
  switchShow:PropTypes.func.isRequired

}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(XiaoHuaPage))