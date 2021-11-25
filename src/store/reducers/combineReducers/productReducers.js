import actions from '@store/actions';
import {reducerAdvance, reducerDefault} from '@store/reducers/common';

export const search = (...props) => {
  return reducerAdvance(...props, actions.SEARCH_SCREEN);
};

export const suggestions = (...props) => {
  return reducerDefault(...props, actions.GET_SEARCH_SUGGESTIONS);
};
export const productDetails = (...props) => {
  return reducerDefault(...props, actions.GET_PRODUCT_DETAILS);
};

export const review = (...props) => {
  return reducerAdvance(...props, actions.GET_REVIEWS_PRODUCT);
};

export const comboProductDetails = (...props) => {
  return reducerDefault(...props, actions.GET_COMBO_PRODUCT_DETAILS);
};

export const productGroup = (...props) => {
  return reducerAdvance(...props, actions.GET_PRODUCT_GROUP_HOME);
};

export const productIsFocus = (...props) => {
  return reducerAdvance(...props, actions.GET_PRODUCT_IS_FOCUS);
};

export const shopping = (...props) => {
  return reducerAdvance(...props, actions.GET_SHOPPING);
};

export const productViewed = (...props) => {
  return reducerAdvance(...props, actions.GET_PRODUCT_VIEWED);
};

export const productByLate = (...props) => {
  return reducerAdvance(...props, actions.GET_PRODUCT_BY_LATE);
};
export const productOptions = (...props) => {
  return reducerDefault(...props, actions.GET_PRODUCT_OPTION);
};

export const productOptionsDetails = (...props) => {
  return reducerDefault(...props, actions.GET_PRODUCT_OPTION_DETAILS);
};

export const favoriteProduct = (...props) => {
  return reducerDefault(...props, actions.GET_SHOW_FAVORITE_PRODUCT);
};
export const combo = (...props) => {
  return reducerAdvance(...props, actions.GET_COMBO);
};
