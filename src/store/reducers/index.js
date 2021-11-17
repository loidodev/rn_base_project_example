import {combineReducers} from 'redux';
import * as userReducers from './userReducers';
import * as generalReducers from './generalReducers';

export default combineReducers({
  ...userReducers,
  ...generalReducers,
});
