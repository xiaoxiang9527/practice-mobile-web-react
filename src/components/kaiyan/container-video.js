import React, {PureComponent} from 'react';
import styles from './container-video.module.css';
import PropTypes from 'prop-types';

export default class ContainerVideo extends PureComponent{
  constructor(props){
    super(props)
    this.state={
      coverShow:true
    }
    this.videoPlay=this.videoPlay.bind(this)
  }
  render(){
    const {coverShow}=this.state;
    const {playUrl,cover}=this.props;
    return <div className={styles.ContainerVideo}>
      <video controls src={playUrl} className={styles.video} ref="video">视频不支持在此浏览器中播放，建议使用Chrome进行播放</video>
      <img className= {coverShow ? `${styles.cover}`: `${styles.cover} ${styles.disappear}` } src={cover} alt="视频封面加载失败，请直接点击播放" 
      ></img>
      <span className={coverShow? `iconfont icon-bofang ${styles.playButton}` : `iconfont icon-bofang ${styles.playButton} ${styles.disappear}` } 
      onClick={this.videoPlay}></span>
    </div>
  }
  videoPlay() {
    this.setState({'coverShow':false})
    this.refs.video.play()
    this.refs.video.style.visibility='visible'
  }
}

ContainerVideo.propTypes={
  playUrl:PropTypes.string.isRequired,
  cover:PropTypes.string.isRequired
}
