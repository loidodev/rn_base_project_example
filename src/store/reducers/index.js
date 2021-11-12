import {combineReducers} from 'redux';
import * as birthdayReducers from './BirthdayReducers';
import * as Demo from './demo';
import * as MenberReducers from './MenberReducers';
import * as PartnerReducers from './PartnerReducers';
import * as TokenReducer from './TokenReducer';

export default combineReducers({
  ...Demo,
  ...TokenReducer,
  ...birthdayReducers,
  ...PartnerReducers,
  ...MenberReducers,
});
