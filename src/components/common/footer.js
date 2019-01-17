import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from './footer.module.css';
import FooterButton from './footer-button';

class Footer extends Component{
  constructor(props){
    super(props);
    this.state={channelList:
      [{name:"开眼",buttonClass:"icon-dianshi",channelId:1},
      {name:"搞笑",buttonClass:"icon-Laughinghard",channelId:2},
      {name:"读书",buttonClass:"icon-thin-_book_writi",channelId:3},
      {name:"ACE",buttonClass:"icon-caidanzhaolinggan",channelId:4}
      ]
    }
  }
  render(){
    const {channelList} = this.state;
    const channels = channelList.map(channel=>{
      return <FooterButton {...channel} key={channel.channelId} channelActive={this.props.channelActive}/>
    });

    return(
      <div className={styles.Footer}>
        {channels}
      </div>
    )
  }
}

const mapStateToProps=state=>{
  return{
    channelActive:state.getIn(['reducerCommon','channelActive'])
  } 
}

export default connect(mapStateToProps,null)(Footer)