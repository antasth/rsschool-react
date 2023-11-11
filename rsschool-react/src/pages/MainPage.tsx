import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { GamesService } from '../api/games';
import { GamesList } from '../components/GamesList/GamesList';
import { Loader } from '../components/Loader/Loader';
import { Pagination } from '../components/Pagination/Pagination';
import { Search } from '../components/Search/Search';
import { DEFAULT_PAGE_SIZE } from '../constants';
import { GamesContext } from '../context/GamesContext';
import { useFetching } from '../hooks/useFetching';
import styles from './MainPage.module.css';

const MainPage = (): React.ReactElement => {
  const [isError, setIsError] = useState(false);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [isDescription, setIsDescription] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const {
    searchString,
    currentPage,
    setGamesList,
    setCurrentPage,
    gamesCount,
    setGamesCount,
  } = useContext(GamesContext);

  useEffect(() => {
    location.pathname !== '/'
      ? setIsDescription(true)
      : setIsDescription(false);
  }, [location.pathname]);

  const [fetchGames, isGamesLoading, fetchError] = useFetching(
    useCallback(async (): Promise<void> => {
      const response = await GamesService.getAllGames(
        searchString,
        currentPage,
        pageSize
      );
      setGamesList(response.results);
      setGamesCount(response.count);
    }, [currentPage, pageSize, searchString, setGamesList, setGamesCount])
  );

  useEffect(() => {
    fetchGames();
    const url = `?page=${currentPage}&search=${searchString}&page_size=${pageSize}`;
    navigate(url);
  }, [fetchGames, currentPage, pageSize, navigate, searchString]);

  const setError = (): void => setIsError(true);

  useEffect(() => {
    if (isError || fetchError) throw new Error('Error for test ErrorBoundary');
  }, [isError, fetchError]);

  return (
    <div className={styles.mainPage}>
      <Search />
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
                <GamesList />
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
