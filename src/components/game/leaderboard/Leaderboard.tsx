import React from 'react';
import { OrderedTeam } from '../../../models/OrderedTeam';
import TeamDetail from './TeamDetail';

const Leaderboard: React.FC<{ data: OrderedTeam[] }> = (props) => {
  return (
    <section>
      <header>
        <span>Team</span>
        <span>Clicks</span>
      </header>
      <ul>
        {props.data.map((team) => {
          return <TeamDetail team={team} key={team.key} />;
        })}
      </ul>
    </section>
  );
};

export default Leaderboard;
