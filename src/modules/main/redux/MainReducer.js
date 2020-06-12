import { newState } from '../../../core/redux/helpers';
import { MainState } from './MainState';
import { MainActions } from './MainActions';


export const MainReducer = (state = MainState, action) => {
  switch (action.type) {
    case MainActions.setBalance().type:
      return newState(state, action.payload)

    case MainActions.getFilteredUserList.started().type:
      return newState(state, action.payload)
    case MainActions.getFilteredUserList.done().type:
      return newState(state, action.payload)
    case MainActions.getFilteredUserList.failed().type:
      return newState(state, action.payload)

    case MainActions.sendPW.started().type:
      return newState(state, action.payload)
    case MainActions.sendPW.done().type:
      return newState(state, action.payload)
    case MainActions.sendPW.failed().type:
      return newState(state, action.payload)

    case MainActions.getLoggedUserTransactions.started().type:
      return newState(state, action.payload)
    case MainActions.getLoggedUserTransactions.done().type:
      return newState(state, action.payload)
    case MainActions.getLoggedUserTransactions.failed().type:
      return newState(state, action.payload)

    default:
      return state
  }
}