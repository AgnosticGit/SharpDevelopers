import { newState } from '../../../core/redux/helpers';
import { AuthState } from './AuthState';
import { AuthActions } from './AuthActions'


export const AuthReducer = (state = AuthState, action) => {
  switch (action.type) {
    case AuthActions.login.started().type:
      return newState(state, action.payload)
    case AuthActions.login.done().type:
      return newState(state, action.payload)
    case AuthActions.login.failed().type:
      return newState(state, action.payload)

    case AuthActions.logOut().type:
      return newState(AuthState)

    case AuthActions.signUp.started().type:
      return newState(state, action.payload)
    case AuthActions.signUp.done().type:
      return newState(state, action.payload)
    case AuthActions.signUp.failed().type:
      return newState(state, action.payload)

    case AuthActions.getUserInfo.started().type:
      return newState(state, action.payload)
    case AuthActions.getUserInfo.done().type:
      return newState(state, action.payload)
    case AuthActions.getUserInfo.failed().type:
      return newState(state, action.payload)

    case AuthActions.setErrors().type:
      return newState(state, action.payload)

    default:
      return state
  }
}