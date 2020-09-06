import { STORE_USER_DATA } from './_type';
import { callGetMethod } from '../../middleware/_axios';

export const fetchUserData = (data) => async (dispatch) => {
  return callGetMethod('https://jsonplaceholder.typicode.com/users').then(
    (response) => {
      if (response.status === 200)
        return dispatch({
          type: STORE_USER_DATA,
          payload: response.data,
        });
    },
  );
};
