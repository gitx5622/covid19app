import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import rootReducer from './reducers';

const middlewares = [];

process.env.NODE_ENV === 'development' && middlewares.push(logger);

const DataStore = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
);

export default DataStore;
