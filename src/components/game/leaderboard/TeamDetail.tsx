import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../../store/reducers';
import { OrderedTeam } from '../../../models/OrderedTeam';

const TeamDetail: React.FC<{ team: OrderedTeam }> = (props) => {
  const { name, clicks, id, order } = props.team;
  const session = useSelector((state: State) => state.login.session);

  const classNames = session === id ? 'player-team team-detail':'team-detail';

  return (
    <li className={classNames}>
      <div>
        <span className="order">{order}</span>
        <span>{name}</span>
      </div>
      <span>{clicks.teamClicks}</span>
    </li>
  );
};

export default TeamDetail;
