import React, {Component}from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import actions from '../../stores/actions/action-joke';
import styles from './joke-page.module.css';
import JokeContainer from './joke-container';
import Loading from '../common/loading';

class JokePage extends Component{
  constructor(props){
    super(props)
    this.state={
      loadingState:true,
      loadingStateCode:0
    }
    this.bottomDetect=this.bottomDetect.bind(this)
  }
  componentDidMount(){
    this.props.initJokeList()
    this.props.switchShow(true)
    window.addEventListener('scroll',this.bottomDetect)
    let _this=this
    this.refs.joke.addEventListener('touchstart', function (ev){
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
          this.style.transform='translate(0px,0px)'
         setTimeout(()=>{ _this.props.switchShow(true);_this.props.history.push('/joke/qutu')
          },250) 
        }
        this.removeEventListener('touchmove', fnMove, false);
       this.removeEventListener('touchend', fnEnd, false);
      }

      this.addEventListener('touchmove', fnMove, false);
      this.addEventListener('touchend', fnEnd, false);
    }, {passive: true})
  }
   componentWillUnmount(){
     window.removeEventListener('scroll',this.bottomDetect)
   }
   componentDidUpdate(prevProps){
     if(prevProps.jokeList!==this.props.jokeList){
       this.setState({loadingState:false})
     }
  }
   bottomDetect(e){
     if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight+50) {
       if(this.state.loadingState===false && this.state.loadingStateCode<2){
         this.setState({loadingState:true})
           this.props.initJokeList()
       }
     }
   }
  render(){
    const jokeList=this.props.jokeList.map(
      (joke)=>{
        return(
          <JokeContainer   {...joke} key={joke.hashId} />
        )
      }
    )
    return(
      <div className={styles.JokePage} ref='joke'>
      {jokeList}
      <Loading {...this.state}/>
  
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return{
    jokeList:state.getIn(['reducerJoke','jokeList'])
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    initJokeList(){
      dispatch(actions.getJokeList())
    },
    switchShow(show){
      dispatch(actions.switchShow(show))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(JokePage))