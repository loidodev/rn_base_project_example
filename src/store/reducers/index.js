import {combineReducers} from 'redux';
import * as generalReducers from './generalReducers';
import * as ProductReducer from './ProductReducer';
import * as userReducers from './userReducers';
export default combineReducers({
  ...userReducers,
  ...generalReducers,
  ...ProductReducer,
});
