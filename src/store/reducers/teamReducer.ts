import { Team } from '../../models/Team';
import { Actions, TeamEnum } from '../actions/TeamActions';

const DUMMY_DATA: Team[] = [
  { name: 'Team 1', id: '1111111', clicks: { yourClicks: 0, teamClicks: 62 } },
  { name: 'Team 2', id: '2222222', clicks: { yourClicks: 0, teamClicks: 38 } },
  { name: 'Team 3', id: '3333333', clicks: { yourClicks: 0, teamClicks: 15 } },
];

const storedData: Team[] = JSON.parse(localStorage.getItem('teams')!);

const defaultTeamsState: Team[] = storedData || DUMMY_DATA;

const teamReducer = (state: Team[] = defaultTeamsState, action: Actions) => {
  switch (action.type) {
    case TeamEnum.ADD: {
      const updatedTeams = [...state, action.payload];
      localStorage.setItem('teams', JSON.stringify(updatedTeams));
      return updatedTeams;
    }
    case TeamEnum.CLICK: {
      const updatedTeams = [...state];
      const playerTeamIndex = updatedTeams.findIndex(
        (team) => team.id === action.payload
      );
      const playerTeam = updatedTeams[playerTeamIndex];
      playerTeam.clicks.yourClicks++;
      playerTeam.clicks.teamClicks++;

      localStorage.setItem('teams', JSON.stringify(updatedTeams));
      return updatedTeams;
    }
    case TeamEnum.RESET: {
      localStorage.setItem('teams', JSON.stringify(DUMMY_DATA));
      return DUMMY_DATA;
    }
    default:
      return state;
  }
};

export default teamReducer;
