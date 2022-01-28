import React, { ChangeEvent, ReactElement } from 'react';
import { Game } from '../../types/types';
import GameCard from '../GameCard/GameCard.component';
import GameFilter from '../GameFilter/GameFilter.component';
import { List, ListItem } from './GameList.style';

interface Props {
  err?: string;
  games: Game[];
  onFilterChange: (e: ChangeEvent<HTMLFormElement>) => void;
}

const GameList = ({ err, games, onFilterChange }: Props): ReactElement => {
  if (err) {
    return <p>Unable to fetch games</p>;
  }
  if (!games?.length) {
    return <p>No Games Available</p>;
  }

  return (
    <>
      <GameFilter onChange={onFilterChange} />
      <List>
        {games.map((game) => (
          <ListItem key={game.id}>
            <GameCard content={game} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GameList;
