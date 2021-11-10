import { useSelector } from 'react-redux';
import { State } from '../../store/reducers';

import GameWindow from './GameWindow';
import ClickButton from './ClickButton';
import TeamForm from './TeamForm';

const Game = () => {
  const isLoggedIn = useSelector((state: State) => state.login.isLoggedIn);

  return (
    <section>
      {!isLoggedIn && <TeamForm />}
      {isLoggedIn && <ClickButton />}
      <GameWindow />
    </section>
  );
};

export default Game;
