import { Team } from '../../models/Team';
import { Actions, TeamEnum } from '../actions/TeamActions';

const DUMMY_DATA: Team[] = [
  { name: 'Team 1', clicks: { yourClicks: 0, teamClicks: 15 } },
  { name: 'Team 2', clicks: { yourClicks: 0, teamClicks: 20 } },
  { name: 'Team 3', clicks: { yourClicks: 0, teamClicks: 6 } },
];

const defaultTeamsState: Team[] = DUMMY_DATA;

const teamReducer = (state: Team[] = defaultTeamsState, action: Actions) => {
  switch (action.type) {
    case TeamEnum.ADD:
      const updatedTeams = [...state, action.payload];
      return updatedTeams;
    case TeamEnum.CLICK: {
      const updatedTeams = [...state];
      const playerTeamIndex = updatedTeams.findIndex(
        (team) => team.name === action.payload
      );
      const playerTeam = updatedTeams[playerTeamIndex];
      playerTeam.clicks.yourClicks++;
      playerTeam.clicks.teamClicks++;

      return updatedTeams;
    }
    default:
      return state;
  }
};

export default teamReducer;
