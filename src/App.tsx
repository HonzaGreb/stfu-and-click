import './App.css';
import { Fragment } from 'react';
import Game from './components/game/Game';
import Header from './components/header/Header';

function App() {
  return (
    <Fragment>
      <Header />
      <Game />
    </Fragment>
  );
}

export default App;
