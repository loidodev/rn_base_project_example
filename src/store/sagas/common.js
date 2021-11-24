import Config from 'react-native-config';

export const ACCOUNT_IMS = {
  username: Config.ACCESS_USERNAME,
  password: Config.ACCESS_PASSWORD,
};

export const URL_API = {
  user: {
    getToken: 'getToken',
    getUser: 'getUser',
    signupUser: 'signupUser',
    signinUser: 'signinUser',
    logoutUser: 'logoutUser',
    updateUser: 'updateUser',
    updatePassword: 'updatePassword',
  },
  general: {
    getConfigApp: 'getConfigApp',
    getBirthday: 'getBirthday',
    getMemberDay: 'getMemberDay',
    getTermsOfUse: 'getTermsOfUse',
    getBannerByID: 'getBannerByID',
    getStores: 'getStores',
  },
  product: {
    getProduct: 'getProduct',
    getSuggestions: 'getSuggestions',
    getProductGroup: 'getProductGroup',
    getShopping: 'getShopping',
  },
};