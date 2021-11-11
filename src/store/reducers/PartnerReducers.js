import {reducerDefault} from '@store/common';
import Actions from '../actions';

export const partner = (...props) => {
  return reducerDefault(...props, Actions.GET_PARTNER);
};

export const PartnerReducers = {partner};
