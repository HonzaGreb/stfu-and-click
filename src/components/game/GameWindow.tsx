import { Team } from '../../models/Team';

import ClicksDetails from './ClicksDetails';
import Leaderboard from './leaderboard/Leaderboard';

const DUMMY_DATA: Team[] = [
  { name: 'Team 1', clicks: 0, order: 0 },
  { name: 'Team 2', clicks: 0, order: 0 },
  { name: 'Team 3', clicks: 0, order: 0 },
];

const GameWindow = () => {
  return (
    <section className="game-window">
      <h2 className="heading">top 10 clickers</h2>
      <ClicksDetails />
      <Leaderboard data={DUMMY_DATA} />
      <p>Want to be top? STFU and click!</p>
    </section>
  );
};

export default GameWindow;
