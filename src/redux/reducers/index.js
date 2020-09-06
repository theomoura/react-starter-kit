import { combineReducers } from 'redux';
import loginReducer from './loginReducer';

const reducer = combineReducers({
  loginReducer,
});

export default reducer;
