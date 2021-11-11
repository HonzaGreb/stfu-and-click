import React from 'react';
import { OrderedTeam } from '../../../models/OrderedTeam';
import { Team } from '../../../models/Team';
import TeamDetail from './TeamDetail';

const Leaderboard: React.FC<{ teams: Team[] }> = (props) => {
  const sortAndOrder = (arr: any[]) => {
    const array = [...arr];
    array.sort((t1: Team, t2: Team) => {
      return t2.clicks.teamClicks - t1.clicks.teamClicks;
    });
    const mappedArray = array.map((team: Team, index) => {
      return {
        name: team.name,
        id: team.id,
        clicks: team.clicks,
        order: index + 1,
        key: team.id,
      };
    });

    return mappedArray;
  };

  const sortedTeams: OrderedTeam[] = sortAndOrder(props.teams);

  return (
    <section className="leaderboard">
      <header>
        <span>Team</span>
        <span>Clicks</span>
      </header>
      <ul className="leaderboard-teams">
        {sortedTeams.map((team) => {
          return <TeamDetail team={team} key={team.id} />;
        })}
      </ul>
    </section>
  );
};

export default Leaderboard;
