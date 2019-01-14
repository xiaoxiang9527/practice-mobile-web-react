import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from './footer.module.css';
import FooterButton from './footer-button';

class Footer extends Component{
  constructor(props){
    super(props);
    this.state={channelList:
      [{name:"开眼",buttonClass:"icon-dianshi",channelId:1},
      {name:"读书",buttonClass:"icon-thin-_book_writi",channelId:2},
      {name:"一席",buttonClass:"icon-weibiaoti-",channelId:3},
      {name:"段子",buttonClass:"icon-Laughinghard",channelId:4},
      {name:"灵感",buttonClass:"icon-caidanzhaolinggan",channelId:5}
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