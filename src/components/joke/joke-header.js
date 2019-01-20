import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import actions from '../../stores/actions/action-joke';
import styles from './joke-header.module.css';

class JokeHeader extends Component{
  constructor(props){
    super(props)
    this.switchJoke=this.switchJoke.bind(this)
    this.switchFunPic=this.switchFunPic.bind(this)
  }
  componentDidMount(){
    if (this.props.location.pathname==='/joke/qutu')
    this.props.switchShow(false)
  }
  switchJoke(){
    this.props.switchShow(true)
    this.props.history.push('/joke')
  }
  switchFunPic(){
   this.props.switchShow(false)
    this.props.history.push('/joke/qutu')

  }
  render(){
    const {jokeShow}=this.props
    return(
      <ul className={styles.JokeHeader}>
      <li className={jokeShow?styles.jokeShow:''} onClick={this.switchJoke}>笑话</li>
      <li><div className={styles.delimeter} /></li>
      <li className={jokeShow?'':styles.jokeShow} onClick={this.switchFunPic}>趣图</li>
      </ul>
  ) 
  }
}

const mapStateToProps=(state)=>{
  return{
    jokeShow:state.getIn(['reducerJoke','jokeShow'])
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    switchShow(show){
      dispatch(actions.switchShow(show))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(JokeHeader))