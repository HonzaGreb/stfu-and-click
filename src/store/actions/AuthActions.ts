import { AuthObject } from '../../models/Auth'

export enum AuthActionsEnum {
  STORE = 'STORE',
  VERIFY = 'VERIFY',
  CLEAR = 'CLEAR',
}

interface StoreAction {
  type: AuthActionsEnum.STORE
  payload: AuthObject
}

interface VerifyAction {
  type: AuthActionsEnum.VERIFY
  payload: string
}

interface ClearAction {
  type: AuthActionsEnum.CLEAR
}

export type Action = StoreAction | VerifyAction | ClearAction
