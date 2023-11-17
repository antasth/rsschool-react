import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { GamesList } from '../../components/GamesList/GamesList';
import { Loader } from '../../components/Loader/Loader';
import { Pagination } from '../../components/Pagination/Pagination';
import { Search } from '../../components/Search/Search';
import { usePageSize } from '../../hooks/usePageSize';
import { useSearch } from '../../hooks/useSearch';
import { useGetGamesQuery } from '../../store/api/api';
import styles from './MainPage.module.css';

const MainPage = (): React.ReactElement => {
  const [isError, setIsError] = useState(false);
  const [isDescription, setIsDescription] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesCount, setGamesCount] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  const { searchString } = useSearch();
  const { pageSize } = usePageSize();

  const { data, isFetching } = useGetGamesQuery({
    currentPage,
    searchString,
    pageSize,
  });
  const games = data ? data.results : [];

  useEffect(() => {
    location.pathname !== '/'
      ? setIsDescription(true)
      : setIsDescription(false);
  }, [location.pathname]);

  useEffect(() => {
    if (data) {
      setGamesCount(data.count);
    }
    const url = `?page=${currentPage}&search=${searchString}&page_size=${pageSize}`;
    navigate(url);
  }, [currentPage, pageSize, navigate, searchString, setGamesCount, data]);

  const setError = (): void => setIsError(true);

  useEffect(() => {
    if (isError) throw new Error('Error for test ErrorBoundary');
  }, [isError]);

  return (
    <div className={styles.mainPage}>
      <Search setCurrentPage={setCurrentPage} />
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
            {isFetching ? (
              <Loader />
            ) : (
              <>
                <GamesList games={games} />
                <Pagination
                  currentPage={currentPage}
                  gamesCount={gamesCount}
                  setCurrentPage={setCurrentPage}
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
