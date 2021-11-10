import { Action, LoginEnum } from '../actions/LoginActions';
import { Login } from '../../models/Login';

const initialState: Login = {
  name: null,
  session: null,
  isLoggedIn: false,
};

const loginReducer = (state: Login = initialState, action: Action) => {
  switch (action.type) {
    case LoginEnum.LOGIN:
      return {
        name: action.payload.team,
        session: action.payload.session,
        isLoggedIn: true,
      };
    case LoginEnum.LOGOUT:
      return { name: null, session: null, isLoggedIn: false };
    default:
      return state;
  }
};

export default loginReducer;
