import reducerCommon from './reducer-common';
import reducerKaiYan from './reducer-kaiyan';
import reducerXiaoHua from './reducer-xiaohua';
import reducerQuTu from './reducer-qutu';
import reducerDuanWen from './reducer-duanwen';
import {combineReducers} from 'redux-immutable';

const rootReducer=combineReducers({
  reducerCommon,
  reducerKaiYan,
  reducerXiaoHua,
  reducerQuTu,
  reducerDuanWen
});

export default rootReducer