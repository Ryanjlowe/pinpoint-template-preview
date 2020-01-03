import { combineReducers } from 'redux';
import powerToolReducer from './powerToolReducer';
export default combineReducers({
  powerTools: powerToolReducer
});
