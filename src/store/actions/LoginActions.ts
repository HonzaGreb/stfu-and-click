import { Session } from '../../models/Session';

export enum LoginEnum {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

interface LoginAction {
  type: LoginEnum.LOGIN;
  payload: Session;
}

interface LogoutAction {
  type: LoginEnum.LOGOUT;
}

export type Action = LoginAction | LogoutAction;
