import reducerCommon from './reducer-common';
import reducerEyepetizer from './reducer-eyepetizer';
import reducerJoke from './reducer-joke';
import reducerFunPic from './reducer-fun-pic';
import reducerDuanWen from './reducer-duanwen';
import {combineReducers} from 'redux-immutable';

const rootReducer=combineReducers({
  reducerCommon,
  reducerEyepetizer,
  reducerJoke,
  reducerFunPic,
  reducerDuanWen
});

export default rootReducer