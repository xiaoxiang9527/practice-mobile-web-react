import React, { Component } from 'react';
import {connect} from 'react-redux';
import Container from './container';
import PropTypes from 'prop-types';
import sytles from './index.module.css'; 
import actions from '../../stores/actions/action-eyepetizer';
import actionsCommon from '../../stores/actions/action-common';
import Loading from '../common/loading';

class Eyepetizer extends Component {
  constructor(props){
    super(props)
    this.bottomDetect=this.bottomDetect.bind(this)
    this.state={
      loadingState:true,
      loadingStateCode:0
    }
  }

  componentDidMount(){
   this.props.initEyepetizerListOne()
   this.props.switchChannelButton()
   window.addEventListener('scroll',this.bottomDetect,false)
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.bottomDetect)
  }
  componentDidUpdate(prevProps){
    if(prevProps.itemList!==this.props.itemList){
      this.setState({loadingState:false})
      this.setState((prevState)=>({loadingStateCode:prevState.loadingStateCode+1}))
    }
 }
  bottomDetect(e){
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight+50) {
      if(this.state.loadingState===false && this.state.loadingStateCode<2){
        this.setState({loadingState:true})
          this.props.initEyepetizerListTwo()
      }
    }
  }
  
  render() {
    const containerList=this.props.itemList.map((item)=>{
      return <Container data={item.data} key={item.data.id}/>
    })
    return (
      <div className={sytles.Eyepetizer}>
       {containerList}
        <Loading {...this.state}/>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return{
    itemList:state.getIn(['reducerEyepetizer','itemList'])
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    initEyepetizerListOne(){
      dispatch(actions.getEyepetizerListOne())
    },
    initEyepetizerListTwo(){
      dispatch(actions.getEyepetizerListTwo())
    },
    switchChannelButton(){
      dispatch(actionsCommon.switchChannelButton(1))
    }
  }
}

Eyepetizer.propTypes={
  itemList:PropTypes.oneOfType([PropTypes.array,PropTypes.object]).isRequired,
  initEyepetizerListOne:PropTypes.func.isRequired,
  initEyepetizerListTwo:PropTypes.func.isRequired,
  switchChannelButton:PropTypes.func.isRequired
}

export default connect(mapStateToProps,mapDispatchToProps)(Eyepetizer)