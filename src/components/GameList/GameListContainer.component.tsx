import axios from 'axios';
import React, { ReactElement, useEffect, useState } from 'react';
import { API_HOST, API_KEY } from '../../constants/constants';
import { Game } from '../../types/types';
import GameList from './GameList.component';

const GameListContainer = (): ReactElement => {
  const [games, setGames] = useState<Game[]>([]);
  const [err, setErr] = useState<string>('');

  useEffect(() => {
    axios
      .get('/games', {
        baseURL: `https://${API_HOST}/api`,
        headers: {
          'X-rapidapi-key': API_KEY,
          'x-rapidapi-host': API_HOST,
        },
        params: {
          platform: 'browser',
        },
      })
      .then((res) => setGames(res.data))
      .catch((err) => setErr(err.message));
  }, []);

  return <GameList err={err} games={games} />;
};

export default GameListContainer;
