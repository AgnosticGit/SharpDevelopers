import { BaseRequest } from '../../../core/api/BaseRequest';
import { AuthActions } from './AuthActions';

export class AuthActionsAsync {
  static login = (credentials) => {
    return async (dispatch) => {
      try {
        dispatch(AuthActions.login.started({ isLoading: true, errors: null }))

        const response = await BaseRequest(
          'sessions/create',
          {
            method: 'POST',
            body: credentials
          }
        )

        dispatch(AuthActions.login.done({
          isLoading: false,
          token: response.id_token
        }))
      } catch (errors) {
        dispatch(AuthActions.login.failed({ isLoading: false, errors }))
      }
    }
  }

  static signUp = (credentials) => {
    return async (dispatch) => {
      try {
        dispatch(AuthActions.signUp.started({ isLoading: true, errors: null }))

        const response = await BaseRequest(
          'users',
          {
            method: 'POST',
            body: credentials
          }
        )

        dispatch(AuthActions.signUp.done({
          isLoading: false,
          token: response.id_token
        }))
      } catch (errors) {
        dispatch(AuthActions.signUp.failed({ isLoading: false, errors }))
      }
    }
  }
}