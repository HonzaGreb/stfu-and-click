import { Action, AuthActionsEnum } from '../actions/AuthActions'
import { AuthObject } from '../../models/Auth'
import { Dispatch } from 'react'

export const store = (authObject: AuthObject) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: AuthActionsEnum.STORE, payload: authObject })
  }
}

export const verify = (idToken: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: AuthActionsEnum.VERIFY, payload: idToken })
  }
}

export const clear = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: AuthActionsEnum.CLEAR })
  }
}
