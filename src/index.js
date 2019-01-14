import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './normalize.css';
import App from './App';
import store from './stores';

ReactDOM.render(
  <Provider store={store}>
    <App />
</Provider>, 
document.getElementById('root'));
