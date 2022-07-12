import {persistStore} from 'redux-persist';
import { legacy_createStore as createStore, applyMiddleware } from  'redux';
import  createSagaMiddleware  from 'redux-saga';

import persistedReducers from './modules/reduxPersist';

import rootReducers from './modules/rootReducers';
import rootSaga from './modules/rootSaga';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
 persistedReducers(rootReducers),
 applyMiddleware(sagaMiddleware)
 );

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);
export default store;