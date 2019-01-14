import React, { Component } from 'react';
import Eyepetizer from './components/eyepetizer';
import Footer from './components/common/footer.js';
import './app.css';
import './assets/iconfont/iconfont.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Eyepetizer/>
        <Footer/>
      </div>
    );
  }
}

export default App;
