import actions from '@store/actions';

const initialState = {};

export const demo = (state = initialState, payload) => {
  switch (payload.type) {
    case actions.DEMO:
      return {...state};

    default:
      return state;
  }
};

export const demo1 = (state = initialState, payload) => {
  switch (payload.type) {
    case actions.DEMO:
      return {...state};

    default:
      return state;
  }
};
