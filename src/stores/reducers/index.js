import reducerCommon from './reducer-common';
import reducerEyepetizer from './reducer-eyepetizer';
import {combineReducers} from 'redux-immutable';

const rootReducer=combineReducers({
  reducerCommon,
  reducerEyepetizer
});

export default rootReducer