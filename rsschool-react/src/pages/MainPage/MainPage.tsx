import React, { useContext, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { GamesList } from '../../components/GamesList/GamesList';
import { Loader } from '../../components/Loader/Loader';
import { Pagination } from '../../components/Pagination/Pagination';
import { Search } from '../../components/Search/Search';
import { GamesContext } from '../../context/GamesContext';
import { useActions } from '../../hooks/useActions';
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

  useEffect(() => {
    location.pathname !== '/'
      ? setIsDescription(true)
      : setIsDescription(false);
  }, [location.pathname]);

  useEffect(() => {
    console.log('data', data);

    if (data) {
      setGamesCount(data.count);
      saveGamesList(data.results);
    }
    const url = `?page=${currentPage}&search=${searchString}&page_size=${pageSize}`;
    navigate(url);
  }, [
    data,
    currentPage,
    pageSize,
    navigate,
    searchString,
    setGamesCount,
    saveGamesList,
  ]);

  const setError = (): void => setIsError(true);

  useEffect(() => {
    if (isError) throw new Error('Error for test ErrorBoundary');
  }, [isError]);

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
            {isLoading ? (
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
