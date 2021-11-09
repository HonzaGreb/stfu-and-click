import GameWindow from './GameWindow';
import ClickButton from './ClickButton';
import TeamForm from './TeamForm';

const Game = () => {
  const isLoggedIn = true;

  return (
    <section>
      {!isLoggedIn && <TeamForm />}
      {isLoggedIn && <ClickButton />}
      <GameWindow />
    </section>
  );
};

export default Game;
