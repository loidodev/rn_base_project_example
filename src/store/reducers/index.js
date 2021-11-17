import {combineReducers} from 'redux';
import * as birthdayReducers from './BirthdayReducers';
import * as ConfigReducer from './ConfigReducer';
import * as Demo from './demo';
import * as PartnerReducers from './PartnerReducers';
import * as ProductReducer from './ProductReducer';
import * as TokenReducer from './TokenReducer';

export default combineReducers({
  ...Demo,
  ...TokenReducer,
  ...birthdayReducers,
  ...PartnerReducers,
  ...ProductReducer,
  ...ConfigReducer,
});
