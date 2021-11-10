import React from 'react';
import { Team } from '../../models/Team';

const ClicksDetails: React.FC<{ team: Team }> = (props) => {
  const { clicks } = props.team;

  return (
    <div className="clicks-details">
      <div className="clicks-detail">
        <h3>Your Clicks:</h3>
        <span>{clicks.yourClicks}</span>
      </div>
      <div className="clicks-detail">
        <h3>Team Clicks:</h3>
        <span>{clicks.teamClicks}</span>
      </div>
    </div>
  );
};

export default ClicksDetails;
