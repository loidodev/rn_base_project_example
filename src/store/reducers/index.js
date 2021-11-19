import {combineReducers} from 'redux';
import * as userReducers from './combineReducers/userReducers';
import * as generalReducers from './combineReducers/generalReducers';
import * as productReducers from './combineReducers/productReducers';

export default combineReducers({
  ...userReducers,
  ...generalReducers,
  ...productReducers,
});
