import React, { ChangeEvent, ReactElement, useCallback, useState } from 'react';
import useFetch from '../../hooks/useFetch/useFetch';
import { Filter } from '../../types/types';
import GameList from './GameList.component';

const GameListContainer = (): ReactElement => {
  const [filter, setFilter] = useState<Filter>({
    platform: 'browser',
    sortBy: 'relevence',
  });
  const { games, error } = useFetch(filter);

  const onFilterChange = useCallback((e: ChangeEvent<HTMLFormElement>) => {
    setFilter((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
    e.preventDefault();
  }, []);

  return <GameList err={error} games={games} onFilterChange={onFilterChange} />;
};

export default GameListContainer;
