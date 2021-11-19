import {combineReducers} from 'redux';
import * as Demo from './demo';
import * as generalReducers from './generalReducers';
import * as TokenReducer from './TokenReducer';
import * as userReducers from './userReducers';

export default combineReducers({
  ...Demo,
  ...TokenReducer,
  ...userReducers,
  ...generalReducers,
});
