import { Action, LoginEnum } from '../actions/LoginActions';
import { Login } from '../../models/Login';

const initialState: Login = {
  name: null,
  session: null,
  isLoggedIn: false,
};

const storedLogin: Login = JSON.parse(localStorage.getItem('login')!);

const loginReducer = (
  state: Login = storedLogin || initialState,
  action: Action
) => {
  switch (action.type) {
    case LoginEnum.LOGIN: {
      const updatedLogin = {
        name: action.payload.team,
        session: action.payload.session,
        isLoggedIn: true,
      };

      localStorage.setItem('login', JSON.stringify(updatedLogin));
      return updatedLogin;
    }
    case LoginEnum.LOGOUT: {
      const updatedLogin = { name: null, session: null, isLoggedIn: false };
      localStorage.setItem('login', JSON.stringify(updatedLogin));
      return updatedLogin;
    }
    default:
      return state;
  }
};

export default loginReducer;
