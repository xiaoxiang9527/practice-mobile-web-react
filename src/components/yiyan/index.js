import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import touchYiYan from '../../utils/touch-yiyan';
import axios from 'axios';
import actionsCommon from '../../stores/actions/action-common';
import {bgUrl,yiyanUrl} from '../../apis';
import Loading from '../common/loading';

class YiYan extends Component{
  constructor(props){
    super(props)
    this.state={
      bgPicList:[{img:'http://img5.adesk.com/5c2f4e87e7bce75ea7b2ffa7?imageMogr2/thumbnail/!720x1280r/gravity/Center/crop/720x1280'}],
      curPic:0,
      picNum:0,
      yiYan:'',
      from:'',
      loadingState:true
    }
    this.initBgPic=this.initBgPic.bind(this)
    this.initYiyan=this.initYiyan.bind(this)
    this.picForward=this.picForward.bind(this)
    this.picBackward=this.picBackward.bind(this)
  }
  componentDidMount(){
    this.props.switchChannelButton()
    this.initBgPic()
    this.initYiyan()
    window.addEventListener('scroll',this.bottomDetect)
    this.refs.pageOfYiYan.addEventListener('touchstart',(ev)=>{touchYiYan(ev,this.refs.pageOfYiYan,this)}, {passive: true})
  }
  componentDidUpdate(prevProps,prevState){
    if(prevState.yiYan!==this.state.yiYan){
      this.setState({loadingState:false})
      this.refs.img.style.opacity=1
    }
  }
  picForward(){
    if(this.state.curPic===this.state.picNum){
      this.setState({curPic:0},()=>{return this.state.curPic})
    }
    else{
      this.setState(prevState=>({curPic:prevState.curPic+1}),
      ()=>{return this.state.curPic})
    }
    this.refs.img.style.opacity=0
    this.initYiyan()
  }
  picBackward(){
    if(this.state.curPic===0){
      this.setState({curPic:this.state.picNum},()=>{return this.state.curPic})
    }
    else{
      this.setState(prevState=>({curPic:prevState.curPic-1}),
      ()=>{return this.state.curPic})
    }
    this.refs.img.style.opacity=0
    this.initYiyan()
  }
  initBgPic(){
    axios.get(bgUrl).then(res=>{
      this.setState({
        bgPicList:res.data.res.vertical,picNum:res.data.res.vertical.length-1})
      })
      .catch(()=>{
      this.setState({bgPicList:[]})})
  }
  initYiyan(){
    axios.get(yiyanUrl).then(res=>{
      this.setState({
        yiYan:res.data.hitokoto,
        from:res.data.from
      })
    }).catch(()=>{
      this.setState({
        yiYan:'',
        from:''
      })
    })
  }
  render(){
    const {bgPicList,curPic}=this.state
    return(
      <div className={styles.YiYan} ref='pageOfYiYan'>
      <div className={styles.wenZi}>
          <span>{this.state.yiYan}</span>
          <span className={styles.laiYuan}>---{this.state.from}</span>
        </div>
      <img src={bgPicList[curPic].img} alt='' ref='img'></img>
        <span className={`${styles.zuoHua} iconfont icon-xiangzuohua`} onClick={this.picForward}/>
        <span className={`${styles.youHua} iconfont icon-xiangyouhua`} onClick={this.picBackward}/>
        <Loading  loadingState={this.state.loadingState} />
      </div>
    )
  }
}

const mapDispatchToProps=dispatch=>{
  return{
    switchChannelButton(){
      dispatch(actionsCommon.switchChannelButton(4))
    }
  }
}

YiYan.propTypes={
  switchChannelButton:PropTypes.func.isRequired
}

export default connect(null,mapDispatchToProps)(YiYan)