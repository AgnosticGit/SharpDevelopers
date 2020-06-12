import { actionCreator, simpleAction } from '../../../core/redux/helpers';

export class MainActions {
  static setBalance = simpleAction('MainActions/SET_BALANCE')
  static getFilteredUserList = actionCreator('MainActions/GET_FILTERED_USER_LIST')
  static sendPW = actionCreator('MainActions/SEND_PW')
  static getLoggedUserTransactions = actionCreator('MainActions/GET_LOGGED_USER_TRANSACTIONS')
}