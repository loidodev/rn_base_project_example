import {combineReducers} from 'redux';
import * as generalReducers from './generalReducers';
import * as userReducers from './userReducers';
import * as ProductReducer from './productReducers';

export default combineReducers({
  ...userReducers,
  ...generalReducers,
  ...ProductReducer,
});
