import React from 'react';

const Url: React.FC<{ session: string }> = (props) => {
  return (
    <p className="url">
      Too lazy to click? Let your pals click for you:
      {' '}
      <span>/{props.session}</span>
    </p>
  );
};

export default Url;
