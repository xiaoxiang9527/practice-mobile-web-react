import reducerCommon from './reducer-common';
import reducerEyepetizer from './reducer-eyepetizer';
import reducerJoke from './reducer-joke';
import reducerFunPic from './reducer-fun-pic';
import reducerArticle from './reducer-article';
import {combineReducers} from 'redux-immutable';

const rootReducer=combineReducers({
  reducerCommon,
  reducerEyepetizer,
  reducerJoke,
  reducerFunPic,
  reducerArticle
});

export default rootReducer