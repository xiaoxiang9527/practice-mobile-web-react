import React from 'react';
import {connect} from 'react-redux';
import styles from './footer.module.css';
import FooterButton from './footer-button';

 const Footer=(props)=>{
  const channelList = props.channelList;
  const channels = channelList.map(channel=>{
    return <FooterButton {...channel} key={channel.channelId} />
  });

  return(
    <div className={styles.Footer}>
      {channels}
    </div>
  ) 
}
const mapStateToProps=state=>{
  return {
    channelList:(state.getIn(['reducerCommon','channelList'])).toJS()
  }
}

export default connect(mapStateToProps,null)(Footer)
