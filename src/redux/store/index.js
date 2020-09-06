import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers';

const logger = createLogger({
  level: 'info',
  collapsed: false,
  logger: console,
  predicate: () => true, // eslint-disable-line
});

let middlewares = [thunkMiddleware, logger];

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares),
  );

  return store;
}
