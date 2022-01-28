import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_HOST, API_KEY } from '../../constants/constants';
import { GameDesc } from '../../types/types';

type Id = {
  gameId: number;
};

const useFetchDes = ({ gameId }: Id) => {
  const [gamesDescription, setGamesDescription] = useState<GameDesc[]>([]);
  const [err, setErr] = useState<string>('');

  useEffect(() => {
    axios
      .get(`/game?id=${gameId}`, {
        baseURL: `https://${API_HOST}/api`,
        headers: {
          'X-rapidapi-key': API_KEY,
          'x-rapidapi-host': API_HOST,
        },
      })
      .then((res) => {
        setGamesDescription([res.data]);
      })
      .catch((err) => setErr(err.message));
  }, [gameId]);

  return { gamesDescription, error: err };
};

export default useFetchDes;
