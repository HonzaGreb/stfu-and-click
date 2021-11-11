import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { Team } from '../../../models/Team';
import ClicksDetails from './ClicksDetails';
import LoginForm from './LoginForm';
import NotFound from './NotFound';

const GameTop: React.FC<{ session: string; team: Team }> = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path={'/:session'} element={<ClicksDetails team={props.team} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default GameTop;
