import {combineReducers} from 'redux';
import * as ConfigReducer from './ConfigReducer';
import * as generalReducers from './generalReducers';
import * as ProductReducer from './ProductReducer';
import * as userReducers from './userReducers';

export default combineReducers({
  ...ProductReducer,
  ...ConfigReducer,
  ...userReducers,
  ...generalReducers,
});
