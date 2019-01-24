import React from 'react';
import styles from './container.module.css';
import PropTypes from 'prop-types';
import ContainerVideo from './container-video';
import ContainerInfo from './container-info';
import {secsToMins, formatDate} from '../../utils/time-format';

export default function Container(props){
  return(
    <div className={styles.Container}>
      <ContainerVideo playUrl={props.data.playUrl} cover={props.data.cover.detail}/>
      <ContainerInfo title={props.data.title} description={props.data.description}
      provider={props.data.provider.name} category={props.data.category}
      duration={secsToMins(props.data.duration)} date={formatDate(new Date(props.data.date))}/>
    </div>
  )
}

Container.propTypes={
  data:PropTypes.object.isRequired
}
