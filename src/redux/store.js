import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './rootReducer';

const store = createStore(rootReducer, applyMiddleware(logger));

const persistor = persistStore(store);
export { store, persistor };
