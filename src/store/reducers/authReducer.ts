import { AuthObject } from '../../models/Auth'
import { Action, AuthActionsEnum } from '../actions/AuthActions'

const initialState: AuthObject = {
  kind: '',
  idToken: '',
  email: '',
  refreshToken: '',
  expiresIn: '',
  localId: '',
}

const authReducer = (state: AuthObject | null = initialState, action: Action) => {
  switch (action.type) {
    case AuthActionsEnum.STORE: {
      const storedData = { ...action.payload }
      return storedData
    }
    case AuthActionsEnum.CLEAR: {
      return initialState
    }
    default: {
      return state
    }
  }
}

export default authReducer
