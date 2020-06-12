import { actionCreator, simpleAction } from '../../../core/redux/helpers';

export class AuthActions {
  static login = actionCreator('AuthActions/LOGIN')
  static logOut = simpleAction('AuthActions/LOG_OUT')
  static signUp = actionCreator('AuthActions/SIGN_UP')
  static setErrors = simpleAction('AuthActions/SET_ERRORS')
  static getUserInfo = actionCreator('AuthActions/GET_USER_INFO')
}