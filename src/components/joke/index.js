import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import actionsCommon from '../../stores/actions/action-common';
//import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import JokeHeader from './joke-header';
import JokePage from './joke-page';
import FunPicPage from './fun-pic-page';
import styles from './index.module.css';

class Joke extends Component{
  componentDidMount(){
    this.props.switchChannelButton()
  }
  render(){
    return(
      <div className={styles.Joke}>
        <JokeHeader/>
        {this.props.history.location.pathname==='/joke/qutu'?<FunPicPage></FunPicPage>:<JokePage></JokePage>
          }
        {/* <Router>
          <Switch>
            <Route path="/qutu" render={()=>{return <h1>joke</h1>}}/>
            <Route path="/joke" component={JokePage}/>
          </Switch>
        </Router> */}
      </div>
    )
  }  
}

const mapDispatchToProps=dispatch=>{
  return{
    switchChannelButton(){
      dispatch(actionsCommon.switchChannelButton(2))
    }
  }
}

Joke.propTypes={
  switchChannelButton:PropTypes.func.isRequired
}


export default connect(null, mapDispatchToProps)(Joke)