import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { coreReducer } from './reducer.js';

const middleware = [thunk];
let devtools;

const logger = createLogger();

if (Meteor.isDevelopment) {
  // Add any middleware for dev environment only
  if (window.devToolsExtension) {
    devtools = window.devToolsExtension();
  } else {
    middleware.push(logger);
    devtools = f => f;
  }
} else {
  devtools = f => f;
}

const enhancer = compose(
  applyMiddleware(...middleware),
  devtools,
);

const store = createStore(
  combineReducers({
    core: coreReducer,
  }),
  enhancer,
);

export { store };
