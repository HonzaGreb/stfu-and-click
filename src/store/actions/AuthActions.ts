import { AuthObject } from '../../models/Auth'

export enum AuthActionsEnum {
  STORE = 'STORE',
  CLEAR = 'CLEAR',
}

interface StoreAction {
  type: AuthActionsEnum.STORE
  payload: AuthObject
}

interface ClearAction {
  type: AuthActionsEnum.CLEAR
}

export type Action = StoreAction | ClearAction
