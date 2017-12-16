import {
  combineReducers
} from 'redux';
import initReducer from './initReducer';
import initPrices from './initPrices';

const allReducers = combineReducers({
  initData: initReducer,
  initPrices: initPrices,

});

export default allReducers;