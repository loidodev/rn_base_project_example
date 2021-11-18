import {combineReducers} from 'redux';
import * as generalReducers from './generalReducers';
import * as ProductReducer from './productReducer';
import * as userReducers from './userReducers';
export default combineReducers({
  ...userReducers,
  ...generalReducers,
  ...ProductReducer,
});
