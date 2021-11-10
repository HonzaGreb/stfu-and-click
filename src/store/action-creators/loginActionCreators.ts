import { Action, LoginEnum } from '../actions/LoginActions';
import { Session } from '../../models/Session';
import { Dispatch } from 'react';

export const login = (loginData: Session) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: LoginEnum.LOGIN, payload: loginData });
  };
};

export const logout = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: LoginEnum.LOGOUT });
  };
};
