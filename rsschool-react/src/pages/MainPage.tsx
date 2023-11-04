import React, { useCallback, useEffect, useState } from 'react';
import { getGames } from '../api/games';
import { GamesList } from '../components/GamesList/GamesList';
import { Header } from '../components/Header/Header';
import { Loader } from '../components/Loader/Loader';
import { Pagination } from '../components/Pagination/Pagination';
import { IGame } from '../types/types';
import { getFromLocalStorage } from '../utils/utils';
import styles from './MainPage.module.css';

const MainPage = (): React.ReactElement => {
  const [gamesList, setGamesList] = useState<IGame[]>([]);
  const [gamesCount, setGamesCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  const getGamesList = useCallback(
    async (searchString: string): Promise<void> => {
      setIsLoading(true);
      const response = await getGames(searchString, currentPage, pageSize);
      setGamesCount(response.count);
      setGamesList(response.results);
      setIsLoading(false);
    },
    [currentPage, pageSize]
  );

  const setError = (): void => setIsError(true);

  useEffect(() => {
    const searchRequest = getFromLocalStorage();
    getGamesList(searchRequest);
  }, [getGamesList, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [pageSize]);

  useEffect(() => {
    if (isError) throw new Error('Error for test ErrorBoundary');
  }, [isError]);

  return (
    <>
      <Header searchGames={getGamesList} />
      <main className={styles.main}>
        <button className={styles.button} type="button" onClick={setError}>
          Throw Error
        </button>
        {isLoading ? <Loader /> : <GamesList gamesList={gamesList} />}
        {!isLoading && (
          <Pagination
            gamesCount={gamesCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setPageSize={setPageSize}
            pageSize={pageSize}
            getGamesList={getGamesList}
          />
        )}
        <Pagination
          gamesCount={150}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setPageSize={setPageSize}
          pageSize={pageSize}
          getGamesList={getGamesList}
        />
      </main>
    </>
  );
};

export { MainPage };
