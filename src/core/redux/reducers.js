import { combineReducers } from 'redux'
import { AuthReducer } from '../../modules/auth/redux/AuthReducers'

export const reducers = combineReducers({
  auth: AuthReducer,
})