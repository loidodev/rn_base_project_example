import {combineReducers} from 'redux';
import * as userReducers from './userReducers';
import * as generalReducers from './generalReducers';
import * as productReducers from './productReducers';

export default combineReducers({
  ...userReducers,
  ...generalReducers,
  ...productReducers,
});
