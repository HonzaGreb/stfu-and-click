import React from 'react';
import { Team } from '../../../models/Team';

const Leaderboard: React.FC<{ data: Team[] }> = (props) => {
  return (
    <section>
      <header>
        <span>Team</span>
        <span>Clicks</span>
      </header>
      <ul>
        <li>Team 1</li>
        <li>Team 2</li>
      </ul>
    </section>
  );
};

export default Leaderboard;
