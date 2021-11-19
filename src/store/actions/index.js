export const _onSuccess = action => action + '_SUCCESS';
export const _onFail = action => action + '_FAIL';
export const _onUnmount = action => action + '_UNMOUNT';

export default {
  //user
  GET_TOKEN: 'GET_TOKEN',
  TOKEN_USER: 'TOKEN_USER',
  GET_USER: 'GET_USER',
  SIGN_UP_USER: 'SIGN_UP_USER',
  SIGN_IN_USER: 'SIGN_IN_USER',
  //general
  GET_BIRTHDAY: 'GET_BIRTHDAY',
  GET_PARTNER: 'GET_PARTNER',
  GET_TERMS_OF_USE: 'GET_TERMS_OF_USE',
};
