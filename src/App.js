import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
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
            <Switch>
              <Route path="/joke" component={Joke} />
              <Route path="/article" component={Article} /> 
              <Route path="/ace" component={Ace} /> 
              <Route path="/" component={Eyepetizer} /> 
            </Switch>
          </Router>
          <Footer/>
        </div>
      </Provider>
    );
  }
}

export default App;
