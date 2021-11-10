import React from 'react';
import { OrderedTeam } from '../../../models/OrderedTeam';

const TeamDetail: React.FC<{ team: OrderedTeam }> = (props) => {
  const { name, clicks, order } = props.team;

  return (
    <li>
      <span>{order}</span>
      <div>
        <span>{name}</span>
        <span>{clicks.teamClicks}</span>
      </div>
    </li>
  );
};

export default TeamDetail;
