import React, { ReactElement } from 'react';
import GameDescription from '../GameDescription/GameDescription.component';
import { GameDesc } from '../../types/types';

interface Props {
  err?: string;
  gamesDescription: GameDesc[];
}

const GameDetail = ({ gamesDescription, err }: Props): ReactElement => {
  if (err) {
    return <p>Unable to fetch games</p>;
  }

  if (!gamesDescription?.length) {
    return <p>Description Not Found</p>;
  }

  return (
    <div>
      {gamesDescription.map((game) => (
        <div key={game.id}>
          <GameDescription content={game} />
        </div>
      ))}
    </div>
  );
};

export default GameDetail;
