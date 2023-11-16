import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { GamesService } from '../../api/games';
import { GamesList } from '../../components/GamesList/GamesList';
import { Loader } from '../../components/Loader/Loader';
import { Pagination } from '../../components/Pagination/Pagination';
import { Search } from '../../components/Search/Search';
import { GamesContext } from '../../context/GamesContext';
import { useActions } from '../../hooks/useActions';
import { useFetching } from '../../hooks/useFetching';
import { useSearch } from '../../hooks/useSearch';
import { useGetGamesQuery } from '../../store/api/api';
import styles from './MainPage.module.css';

const MainPage = (): React.ReactElement => {
  const [isError, setIsError] = useState(false);
  const [isDescription, setIsDescription] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { currentPage, pageSize, setGamesCount } = useContext(GamesContext);

  const { searchString } = useSearch();

  const { saveGamesList } = useActions();

  const { isLoading, data } = useGetGamesQuery({
    currentPage,
    searchString,
    pageSize,
  });

  console.log('data', data, isLoading);

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
      setGamesCount(response.count);
      saveGamesList(response.results);
    }, [currentPage, pageSize, searchString, setGamesCount, saveGamesList])
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
                <Pagination />
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
