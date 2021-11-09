import React from 'react';

const TeamDetail: React.FC<{ name: string; clicks: number; order: number }> = (
  props
) => {
  return (
    <li>
      <span>{props.order}</span>
      <div>
        <span>{props.name}</span>
        <span>{props.clicks}</span>
      </div>
    </li>
  );
};

export default TeamDetail;
