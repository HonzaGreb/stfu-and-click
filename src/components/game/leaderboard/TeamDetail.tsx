import React from 'react';
import { Team } from '../../../models/Team';

const TeamDetail: React.FC<{ team: Team }> = (props) => {
  const { order, name, clicks } = props.team;

  return (
    <li>
      <span>{order}</span>
      <div>
        <span>{name}</span>
        <span>{clicks}</span>
      </div>
    </li>
  );
};

export default TeamDetail;
