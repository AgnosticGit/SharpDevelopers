import { actionCreator, simpleAction } from '../../../core/redux/helpers';

export class AuthActions {
  static login = actionCreator('AuthActions/LOGIN')
  static signUp = actionCreator('AuthActions/SIGN_UP')
  static setErrors = simpleAction('AuthActions/SET_ERRORS')
}