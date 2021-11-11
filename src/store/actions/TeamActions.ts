import { Team } from '../../models/Team';

export enum TeamEnum {
  ADD = 'ADD_TEAM',
  CLICK = 'CLICK',
  RESET = 'RESET'
}

export interface AddTeam {
  type: TeamEnum.ADD;
  payload: Team;
}

export interface Click {
  type: TeamEnum.CLICK;
  payload: string;
}

export interface Reset {
  type: TeamEnum.RESET;
}

export type Actions = AddTeam | Click | Reset;
