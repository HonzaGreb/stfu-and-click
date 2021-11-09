import React from 'react';
import { Team } from '../../../models/Team';
import TeamDetail from './TeamDetail';

const Leaderboard: React.FC<{ data: Team[] }> = (props) => {
  return (
    <section>
      <header>
        <span>Team</span>
        <span>Clicks</span>
      </header>
      <ul>
        {props.data.map((team) => {
          return <TeamDetail team={team} />;
        })}
      </ul>
    </section>
  );
};

export default Leaderboard;
