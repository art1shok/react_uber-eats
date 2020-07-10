import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose();
const middlewares = [thunk];

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
