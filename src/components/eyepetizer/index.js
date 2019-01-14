import React, { Component } from 'react';
import {connect} from 'react-redux';
import Container from './container';
import sytles from './index.module.css'; 
import actions from '../../stores/actions';
import Loading from '../common/loading';

class Eyepetizer extends Component {
  constructor(props){
    super(props)
    this.bottomDetect=this.bottomDetect.bind(this)
    this.state={
      loadingState:true
    }
  }
  componentDidMount(){
   this.props.initEyepetizerListOne()
   window.addEventListener('scroll',this.bottomDetect,false)
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.bottomDetect)
  }
  componentDidUpdate(prevProps,prevState){
    if(prevProps.itemList!==this.props.itemList){
      this.setState({loadingState:false})
    }
 }
  bottomDetect(e){
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight+50) {
      if(this.state.loadingState===false){
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
        <Loading loadingState={this.state.loadingState}/>
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
    }  
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Eyepetizer)