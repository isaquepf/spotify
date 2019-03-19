import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';
import reducers from './ducks';


const isDevelopment = process.env.NODE_ENV === 'development';

const middlewares = [];

const sagaMonitor = isDevelopment  ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const createApproprieteStore = isDevelopment ? console.tron.createStore : createStore; 

const store = createApproprieteStore(reducers, compose(applyMiddleware(...middlewares)));

sagaMiddleware.run(sagas);

export default store;