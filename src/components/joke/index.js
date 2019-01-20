import React from 'react';
//import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import JokeHeader from './joke-header';
import JokePage from './joke-page';
import FunPicPage from './fun-pic-page';
import styles from './index.module.css';

const Joke=(props)=>{
  return(
    <div className={styles.Joke}>
      <JokeHeader/>
      {props.history.location.pathname==='/joke/qutu'?<FunPicPage></FunPicPage>:<JokePage></JokePage>
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
export default Joke