import { combineReducers } from 'redux'
import { AuthReducer } from '../../modules/auth/redux/AuthReducer';
import { MainReducer } from '../../modules/main/redux/MainReducer';

export const reducers = combineReducers({
  auth: AuthReducer,
  main: MainReducer
})