import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Eyepetizer from './components/eyepetizer';
import Joke from './components/joke';
import Article from './components/article';
import Ace from './components/ace';
import Footer from './components/common/footer.js';
import './app.css';
import {Provider} from 'react-redux';
import store from './stores';
import './assets/iconfont/iconfont.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <div>
              <Switch>
                <Route exact path="/joke" component={Joke} />
                <Route exact path="/joke/qutu" component={Joke} />
                <Route path="/article" component={Article} /> 
                <Route exact path="/ace" component={Ace} /> 
                <Route exact path="/eyepetizer" component={Eyepetizer} /> 
                <Redirect from="/" to="/eyepetizer"></Redirect>
              </Switch>
              <Footer/>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
