import { combineReducers } from 'redux';
import cartReducer from './cart.reducer';
import storage from 'redux-persist/lib/storage';
import userReducer from './user.reducer';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['store']
};
const rootReducer = combineReducers({
  user: userReducer,
  store: cartReducer
});

export default persistReducer(persistConfig, rootReducer);
