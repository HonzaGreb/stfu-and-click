import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import teamReducer from './teamReducer'
import authReducer from './authReducer'

const reducers = combineReducers({
  login: loginReducer,
  team: teamReducer,
  auth: authReducer,
})

export default reducers

export type State = ReturnType<typeof reducers>
