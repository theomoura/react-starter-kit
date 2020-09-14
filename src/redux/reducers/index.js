import { combineReducers } from 'redux';
import authReducer from './authReducer';

const reducer = combineReducers({
  authReducer,
});

export default reducer;
