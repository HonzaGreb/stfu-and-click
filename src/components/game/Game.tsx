import { useSelector } from 'react-redux';

import { Team } from '../../models/Team';
import { Fragment } from 'react';
import { State } from '../../store/reducers';

import GameTop from './game-top/GameTop';
import Leaderboard from './leaderboard/Leaderboard';
import GameInfo from './game-info/GameInfo';

const Game = () => {
  const teams = useSelector((state: State) => state.team);
  const login = useSelector((state: State) => state.login);
  const { name, session } = login;

  const findArrayItem = (arr: any[], searchParams: (a1: any) => boolean) => {
    const array = [...arr];
    return array.find(searchParams);
  };

  const teamSearchParams = (team: Team) => {
    return team.name === name;
  };

  const playerTeam: Team = findArrayItem(teams, teamSearchParams);

  return (
    <Fragment>
      <GameInfo login={login} />
      <section className="game">
        <GameTop session={session!} team={playerTeam} />
        <Leaderboard teams={teams} />
        <p>Want to be top? STFU and click!</p>
      </section>
    </Fragment>
  );
};

export default Game;
