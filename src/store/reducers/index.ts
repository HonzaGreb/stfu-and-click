import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import teamReducer from './teamReducer';

const reducers = combineReducers({
  login: loginReducer,
  team: teamReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
