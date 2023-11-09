import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { GamesService } from '../api/games';
import { GamesList } from '../components/GamesList/GamesList';
import { Header } from '../components/Header/Header';
import { Loader } from '../components/Loader/Loader';
import { Pagination } from '../components/Pagination/Pagination';
import { DEFAULT_PAGE_SIZE } from '../constants';
import { GamesContext } from '../context/GamesContext';
import { useFetching } from '../hooks/useFetching';
import { IGame } from '../types';
import styles from './MainPage.module.css';

const MainPage = (): React.ReactElement => {
  const [gamesList, setGamesList] = useState<IGame[]>([]);
  const [gamesCount, setGamesCount] = useState(0);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [queryString, setQueryString] = useState('');
  const [isDescription, setIsDescription] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const games = useContext(GamesContext);

  useEffect(() => {
    location.pathname !== '/'
      ? setIsDescription(true)
      : setIsDescription(false);
  }, [location.pathname]);

  const [fetchGames, isGamesLoading, fetchError] = useFetching(
    useCallback(async (): Promise<void> => {
      const response = await GamesService.getAllGames(
        games.searchString,
        currentPage,
        pageSize
      );
      setGamesList(response.results);
      setGamesCount(response.count);
    }, [games.searchString, currentPage, pageSize])
  );

  useEffect(() => {
    fetchGames();
    const url = `?page=${currentPage}&search=${games.searchString}&page_size=${pageSize}`;
    setQueryString(url);
    navigate(url);
  }, [fetchGames, currentPage, pageSize, navigate, games.searchString]);

  const setError = (): void => setIsError(true);

  useEffect(() => {
    if (isError || fetchError) throw new Error('Error for test ErrorBoundary');
  }, [isError, fetchError]);

  return (
    <div className={styles.mainPage}>
      <Header setCurrentPage={setCurrentPage} />

      <main
        className={
          isDescription ? `${styles.main} ${styles.small}` : styles.main
        }
      >
        <button className={styles.button} type="button" onClick={setError}>
          Throw Error
        </button>
        <div className={styles.container}>
          <div className={styles.content}>
            {isGamesLoading ? (
              <Loader />
            ) : (
              <>
                <GamesList gamesList={gamesList} queryString={queryString} />
                <Pagination
                  gamesCount={gamesCount}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  setPageSize={setPageSize}
                  pageSize={pageSize}
                />
              </>
            )}
          </div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export { MainPage };
