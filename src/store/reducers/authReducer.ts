import { AuthObject } from '../../models/Auth'
import { Action, AuthActionsEnum } from '../actions/AuthActions'

const initialState: AuthObject = {
  idToken: '',
  email: '',
  refreshToken: '',
  expiresIn: '',
  localId: '',
}

const authReducer = (state: AuthObject | null = initialState, action: Action) => {
  switch (action.type) {
    case AuthActionsEnum.STORE: {
      return action.payload
    }
    case AuthActionsEnum.VERIFY: {
      return state
    }
    case AuthActionsEnum.CLEAR: {
      return initialState
    }
    default: {
      return initialState
    }
  }
}

export default authReducer
