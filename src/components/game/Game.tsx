import { useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';

import { Team } from '../../models/Team';
import { Fragment } from 'react';
import { State } from '../../store/reducers';

import GameContent from './GameContent';
import ClicksDetails from './ClicksDetails';
import ClickButton from './ClickButton';
import TeamForm from './TeamForm';
import TeamNotFound from './TeamNotFound';

const Game = () => {
  const teams = useSelector((state: State) => state.team);
  const isLoggedIn = useSelector((state: State) => state.login.isLoggedIn);
  const playerTeamId = useSelector((state: State) => state.login.name);

  const findArrayItem = (arr: any[], searchParams: (a1: any) => boolean) => {
    const array = [...arr];
    return array.find(searchParams);
  };

  const teamSearchParams = (team: Team) => {
    return team.name === playerTeamId;
  };

  const playerTeam: Team = findArrayItem(teams, teamSearchParams);

  return (
    <section>
      <Routes>
        <Route path="*" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<TeamForm />} />
        <Route
          path={`/:${playerTeamId}`}
          element={
            <Fragment>
              <ClickButton />
              {isLoggedIn && <ClicksDetails team={playerTeam} />}
            </Fragment>
          }
        />
        <Route path="*" element={<TeamNotFound />} />
      </Routes>
      <GameContent />
    </section>
  );
};

export default Game;
