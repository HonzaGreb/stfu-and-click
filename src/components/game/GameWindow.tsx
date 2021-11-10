import { useSelector } from 'react-redux';

import { State } from '../../store/reducers';
import { Team } from '../../models/Team';
import { OrderedTeam } from '../../models/OrderedTeam';

import ClicksDetails from './ClicksDetails';
import Leaderboard from './leaderboard/Leaderboard';

const GameWindow = () => {
  const teams = useSelector((state: State) => state.team);

  const findArrayItem = (arr: any[], searchParams: (a1: any) => boolean) => {
    const array = [...arr];
    return array.find(searchParams);
  };

  const sortAndOrder = (arr: any[]) => {
    const array = [...arr];
    array.sort((t1: Team, t2: Team) => {
      return t2.clicks.teamClicks - t1.clicks.teamClicks;
    });
    const mappedArray = array.map((team: Team, index) => {
      return {
        name: team.name,
        clicks: team.clicks,
        order: index + 1,
        key: team.name,
      };
    });
    
    return mappedArray;
  };

  const teamSearchParams = (team: Team) => {
    return team.name === 'Team 1';
  };

  const sortedTeams: OrderedTeam[] = sortAndOrder(teams);
  const playerTeam: Team = findArrayItem(teams, teamSearchParams);

  console.log(sortedTeams);
  console.log(playerTeam);

  return (
    <section className="game-window">
      <h2 className="heading">top 10 clickers</h2>
      <ClicksDetails team={playerTeam!} />
      <Leaderboard data={sortedTeams} />
      <p>Want to be top? STFU and click!</p>
    </section>
  );
};

export default GameWindow;
