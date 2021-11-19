import {combineReducers} from 'redux';
import * as generalReducers from './generalReducers';
import * as TokenReducer from './TokenReducer';
import * as userReducers from './userReducers';
import * as ProductReducer from './productReducer';

export default combineReducers({
  ...TokenReducer,
  ...userReducers,
  ...generalReducers,
  ...ProductReducer,
});
