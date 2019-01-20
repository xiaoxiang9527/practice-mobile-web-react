import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import actions from '../../stores/actions/action-fun-pic';
import actionsJoke from '../../stores/actions/action-joke';
import FunPicContainer from './fun-pic-container';
import Loading from '../common/loading';
import styles from './fun-pic-page.module.css';

class FunPicPage extends Component{
  constructor(props){
    super(props)
    this.state={
      loadingState:true,
      loadingStateCode:0
    }
    this.bottomDetect=this.bottomDetect.bind(this)
  }
  componentDidMount(){
    this.props.initFunPicList()
    window.addEventListener('scroll',this.bottomDetect)
    let _this=this
    this.refs.funPic.addEventListener('touchstart', function (ev){
      let x=0
      let disX=ev.targetTouches[0].clientX-x;
      function fnMove(ev){
        x=ev.targetTouches[0].clientX-disX;
        if(x>0){
          if(x<this.offsetWidth/4){
            this.style.transform=`translate(${x}px,0px)`
          }
          else{
            this.style.transform=`translate(${(this.offsetWidth/4)}px,0px)`
          }
        }
      }
      function fnEnd(){
        console.log(this.offsetWidth)
        this.style.transition='0.3s all ease'
        if(x<this.offsetWidth/4){
          this.style.transform='translate(0px,0px)'
        }
        else{
          _this.props.history.push('/joke')
          _this.props.switchShow(true)
          this.style.transform='translate(0px,0px)'
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
     if(prevProps.funPicList!==this.props.funPicList){
       this.setState({loadingState:false})
     }
  }
   bottomDetect(e){
     if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight+50) {
       if(this.state.loadingState===false && this.state.loadingStateCode<2){
         this.setState({loadingState:true})
           this.props.initFunPicList()
       }
     }
   }
  
  render(){
    const funPicList=this.props.funPicList.map(
      (funPic)=>{
        return(
          <FunPicContainer   {...funPic} key={funPic.hashId} />
        )
      })
    return(
      <div className={styles.FunPicPage} ref='funPic'>
        {funPicList}
        <Loading {...this.state}/>
      </div>
  )}
}

const mapStateToProps=(state)=>{
  return{
    funPicList:state.getIn(['reducerFunPic','funPicList'])
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    initFunPicList(){
      dispatch(actions.getFunPicList())
    },
    switchShow(show){
      dispatch(actionsJoke.switchShow(show))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(FunPicPage))