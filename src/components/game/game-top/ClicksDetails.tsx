import React, { Fragment } from 'react';
import { Team } from '../../../models/Team';
import { useParams } from 'react-router';

import ClickButton from './ClickButton';

const ClicksDetails: React.FC<{ team: Team }> = (props) => {
  const params = useParams()
  const { clicks } = props.team;

  console.log(params.session)

  return (
    <Fragment>
      <ClickButton />
      <div className="clicks-details">
        <div className="clicks-detail">
          <i>Your Clicks:</i>
          <span>{clicks.yourClicks}</span>
        </div>
        <div className="clicks-detail">
          <i>Team Clicks:</i>
          <span>{clicks.teamClicks}</span>
        </div>
      </div>
    </Fragment>
  );
};

export default ClicksDetails;
