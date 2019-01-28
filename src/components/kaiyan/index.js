import React, { Component } from 'react';
import {connect} from 'react-redux';
import Container from './container';
import PropTypes from 'prop-types';
import sytles from './index.module.css'; 
import detectBottom from '../../utils/detect-bottom';
import actions from '../../stores/actions/action-kaiyan';
import actionsCommon from '../../stores/actions/action-common';
import Loading from '../common/loading';

class KaiYan extends Component {
  constructor(props){
    super(props)
    this.state={
      loadingState:true,
      loadingStateCode:0
    }
  }
  componentDidMount(){
   this.props.initListOne()
   this.props.switchChannelButton()
   window.scrollTo(0,0)
   window.addEventListener('scroll',()=>{detectBottom(this,this.props.initListTwo)},false)
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',detectBottom)
  }
  componentDidUpdate(prevProps){
    if(prevProps.itemList!==this.props.itemList){
      this.setState({loadingState:false})
      this.setState((prevState)=>({loadingStateCode:prevState.loadingStateCode+1}))
    }
 }

  render() {
    const containerList=this.props.itemList.map((item)=>{
      return <Container data={item.data} key={item.data.id}/>
    })
    return (
      <div className={sytles.KaiYan}>
       {containerList}
        <Loading {...this.state}/>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return{
    itemList:state.getIn(['reducerKaiYan','itemList'])
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    initListOne(){
      dispatch(actions.fetchListOne())
    },
    initListTwo(){
      dispatch(actions.fetchListTwo())
    },
    switchChannelButton(){
      dispatch(actionsCommon.switchChannelButton(1))
    }
  }
}

KaiYan.propTypes={
  itemList:PropTypes.oneOfType([PropTypes.array,PropTypes.object]).isRequired,
  initListOne:PropTypes.func.isRequired,
  initListTwo:PropTypes.func.isRequired,
  switchChannelButton:PropTypes.func.isRequired
}

export default connect(mapStateToProps,mapDispatchToProps)(KaiYan)