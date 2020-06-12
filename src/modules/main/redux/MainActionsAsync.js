import { BaseRequest } from '../../../core/api/BaseRequest';
import { MainActions } from '../../main/redux/MainActions';

export class MainActionsAsync {
  static getFilteredUserList = (filter) => {
    return async (dispatch) => {
      try {
        dispatch(MainActions.getFilteredUserList.started({
          isLoading: true,
          errors: null
        }))

        const response = await BaseRequest(
          'api/protected/users/list',
          {
            method: 'POST',
            body: {filter}
          }
        )
        
        dispatch(MainActions.getFilteredUserList.done({
          isLoading: false,
          listOfUsers: response
        }))
      } catch (errors) {
        dispatch(MainActions.getFilteredUserList.failed({
          isLoading: false,
          errors
        }))
      }
    }
  }

  static sendPW = (body) => {
    return async (dispatch) => {
      try {
        dispatch(MainActions.sendPW.started({
          isLoading: true,
          errors: null
        }))

        const response = await BaseRequest(
          'api/protected/transactions',
          {
            method: 'POST',
            body
          }
        )

        dispatch(MainActions.sendPW.done({
          isLoading: false,
          balance: response['trans_token'].balance  
        }))
      } catch (errors) {
        dispatch(MainActions.sendPW.failed({
          isLoading: false,
          errors
        }))
      }
    }
  }


  static getLoggedUserTransactions = (body) => {
    return async (dispatch) => {
      try {
        dispatch(MainActions.getLoggedUserTransactions.started({
          isLoading: true,
          errors: null
        }))

        const response = await BaseRequest(
          'api/protected/transactions',
          {
            method: 'GET',
          }
        )
        
        dispatch(MainActions.getLoggedUserTransactions.done({
          isLoading: false,
          transactions: response['trans_token'].reverse()
        }))
      } catch (errors) {
        dispatch(MainActions.getLoggedUserTransactions.failed({
          isLoading: false,
          errors
        }))
      }
    }
  }
}