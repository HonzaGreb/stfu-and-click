import React from 'react';
import { Routes, Route } from 'react-router';
import NowClicking from './NowClicking';
import Url from './Url';
import { Login } from '../../../models/Login';

const GameInfo: React.FC<{ login: Login }> = (props) => {
  const { name, session } = props.login;

  const gameInfo = (
    <div className="game-info">
      <NowClicking name={name!} />
      <Url session={session!} />
    </div>
  );

  return (
    <Routes>
      <Route path={`/${session}`} element={gameInfo}></Route>
    </Routes>
  );
};

export default GameInfo;
