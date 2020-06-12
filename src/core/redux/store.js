import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { reducers } from './reducers'


const persistConfig = {
  key: 'root',
  timeout: 0,
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(
  persistedReducer,
  applyMiddleware(...[thunk, logger])
)
export const persistor = persistStore(store)