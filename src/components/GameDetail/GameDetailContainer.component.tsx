import React, { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import useFetchDescription from '../../hooks/useFetch/useFetchDescription';
import GameDetail from './GameDetail.component';

const GameDetailContainer = (): ReactElement => {
  const location = useLocation();
  const id: string = location.pathname.split('/')[2];
  const gameId: number = parseInt(id);

  const { gamesDescription, error } = useFetchDescription({ gameId });

  return <GameDetail gamesDescription={gamesDescription} err={error} />;
};

export default GameDetailContainer;
