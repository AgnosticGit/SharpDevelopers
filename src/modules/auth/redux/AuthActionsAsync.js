import { BaseRequest } from '../../../core/api/BaseRequest';
import { AuthActions } from './AuthActions';
import { MainActions } from '../../main/redux/MainActions';

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

  static getUserInfo = () => {
    return async (dispatch) => {
      try {
        dispatch(AuthActions.getUserInfo.started({ isLoading: true, errors: null }))

        const response = await BaseRequest(
          'api/protected/user-info',
          {
            method: 'GET',
          }
        )

        dispatch(AuthActions.getUserInfo.done({
          isLoading: false,
          userInfo: response.user_info_token
        }))
        dispatch(MainActions.setBalance({
          balance: response.user_info_token.balance
        }))
      } catch (errors) {
        dispatch(AuthActions.getUserInfo.failed({ isLoading: false, errors }))
      }
    }
  }
}