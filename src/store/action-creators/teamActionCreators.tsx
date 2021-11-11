import { Actions, TeamEnum } from '../actions/TeamActions';
import { Dispatch } from 'redux';
import { Team } from '../../models/Team';

export const addTeam = (teamObj: Team) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({ type: TeamEnum.ADD, payload: teamObj });
  };
};

export const dispatchClick = (teamId: string | any) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: TeamEnum.CLICK, payload: teamId });
  };
};

export const resetTeams = () => {
  return (dispatch: Dispatch) => {
    dispatch({type: TeamEnum.RESET})
  }
}