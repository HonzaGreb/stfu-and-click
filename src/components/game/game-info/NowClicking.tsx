import React from 'react';

const NowClicking: React.FC<{ name: string }> = (props) => {
  return (
    <p className="now-clicking">
      Clicking for team: <span>{props.name}</span>
    </p>
  );
};

export default NowClicking;
