import { Action, AuthActionsEnum } from '../actions/AuthActions'
import { AuthObject } from '../../models/Auth'
import { Dispatch } from 'react'

export const storeAuth = (authObject: AuthObject) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: AuthActionsEnum.STORE, payload: authObject })
  }
}

export const clearAuth = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: AuthActionsEnum.CLEAR })
  }
}
