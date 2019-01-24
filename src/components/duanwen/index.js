import React,{Component} from 'react';
import styles from './index.module.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../../stores/actions/action-article';
import actionsCommon from '../../stores/actions/action-common';
import Loading from '../common/loading';

class Article extends Component{
  constructor(props){
    super(props)
    this.state={
      loadingState:true,
      loadingStateCode:0
    }
    this.bottomDetect=this.bottomDetect.bind(this)
  }
  componentDidMount(){
    this.props.initArticle()
    this.props.switchChannelButton()
    window.addEventListener('scroll',this.bottomDetect)
    let _this=this
    this.refs.article.addEventListener('touchstart', function (ev){
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
          _this.props.initArticle()
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
     window.removeEventListener('scroll',this.bottomDetect)
   }
   componentDidUpdate(prevProps){
     if(prevProps.article!==this.props.article){
       window.scrollTo(0,0)
       this.setState({loadingState:false})
     }
  }
   bottomDetect(e){
     if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight+50) {
       if(this.state.loadingState===false && this.state.loadingStateCode<2){
         this.setState({loadingState:true})
           this.props.initArticle()
       }
     }
   }
  render(){
    const article=this.props.article
    return(
      <div className={styles.Article} ref="article">
      <div className={styles.slide}>&lt; &lt; &lt;左滑可以换一篇噢 &lt; &lt; &lt;</div>
        <div className={styles.title}>{article.title}</div>
        <div className={styles.info}>
          <span>作者:{article.author}</span><span></span><span>字数:{article.wc}</span>
        </div>
        <div dangerouslySetInnerHTML={{__html:article.content}} />
        <Loading {...this.state}  />
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return{
    article:state.getIn(['reducerArticle','article'])
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    initArticle(){
      dispatch(actions.getArticle())
    },
    switchChannelButton(){
      dispatch(actionsCommon.switchChannelButton(3))
    }
  }
}

Article.propTypes={
  article:PropTypes.object.isRequired,
  initArticle:PropTypes.func.isRequired,
  switchChannelButton:PropTypes.func.isRequired
}


export default connect(mapStateToProps,mapDispatchToProps)(Article)
