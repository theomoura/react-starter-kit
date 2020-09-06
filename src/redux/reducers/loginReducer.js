import { STORE_USER_DATA } from '../actions/_type';

const INITIAL_STATE = {
  userData: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORE_USER_DATA:
      return { ...state, userData: action.payload };
    default:
      return state;
  }
};
