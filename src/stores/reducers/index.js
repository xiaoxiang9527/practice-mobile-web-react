import reducerCommon from './reducer-common';
import reducerKaiYan from './reducer-kaiyan';
import reducerJoke from './reducer-joke';
import reducerFunPic from './reducer-fun-pic';
import reducerDuanWen from './reducer-duanwen';
import {combineReducers} from 'redux-immutable';

const rootReducer=combineReducers({
  reducerCommon,
  reducerKaiYan,
  reducerJoke,
  reducerFunPic,
  reducerDuanWen
});

export default rootReducer