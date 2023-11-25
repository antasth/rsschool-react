import { GamesList } from '@/components/GamesList/GamesList';
import { Pagination } from '@/components/Pagination/Pagination';
import { Search } from '@/components/Search/Search';
import { DEFAULT_PAGE_SIZE } from '@/constants';
import { api } from '@/store/api/api';
import { store } from '@/store/store';
import styles from '@/styles/MainPage.module.css';
import { IGamesResponseObject } from '@/types';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

interface IGetServerSideProps {
  props: {
    games: IGamesResponseObject | undefined;
  };
}
export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<IGetServerSideProps> => {
  const { page, page_size, search } = context.query;
  // const currentState = store.getState();

  const queryProps = {
    currentPage: page ? +page : 1,
    searchString: search ? search.toString() : '',
    pageSize: page_size ? +page_size : DEFAULT_PAGE_SIZE,
  };
  const { data } = await store.dispatch(
    api.endpoints.getGames.initiate(queryProps)
  );

  // await waitForAll([api.endpoints.getGames.initiate(queryProps)]);
  const games = data;

  return { props: { games } };
};
const MainPage = ({
  games,
}: {
  games: IGamesResponseObject;
}): React.ReactElement => {
  // const [isError, setIsError] = useState(false);
  // const [isDescription, setIsDescription] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  console.log('games', games);

  const router = useRouter();

  useEffect(() => {
    // Always do navigations after the first render
  }, []);
  const changeQueryParams = (param: string, value: string): void => {
    // let { query } = router;
    // query[param]: value;

    router.push(`/?${param}=${value}`, undefined, { shallow: true });
    console.log(router);
    // router.push(`/?${param}=${value}`, undefined, { shallow: true });
  };

  // useEffect(() => {
  //   setIsLoading(isFetching);
  // }, [isFetching, setIsLoading]);

  // useEffect(() => {
  //   location.pathname !== '/'
  //     ? setIsDescription(true)
  //     : setIsDescription(false);
  // }, [location.pathname]);

  // useEffect(() => {
  //   if (data) {
  //     setGamesCount(data.count);
  //   }
  //   const url = `?page=${currentPage}&search=${searchString}&page_size=${pageSize}`;
  //   navigate(url);
  // }, [currentPage, pageSize, navigate, searchString, setGamesCount, data]);

  // const setError = (): void => setIsError(true);

  // useEffect(() => {
  //   if (isError) throw new Error('Error for test ErrorBoundary');
  // }, [isError]);

  return (
    <div className={styles.mainPage}>
      <Search setCurrentPage={setCurrentPage} />
      <main
      // className={
      //   isDescription ? `${styles.main} ${styles.small}` : styles.main
      // }
      >
        {/* <button className={styles.button} type="button" onClick={setError}>
          Throw Error
        </button> */}
        <button
          className={styles.button}
          type="button"
          onClick={(): void => changeQueryParams('page', '5')}
        >
          changeQueryParams
        </button>
        <button
          className={styles.button}
          type="button"
          onClick={(): void => changeQueryParams('search', 'gta')}
        >
          changeQueryParams2
        </button>
        <div className={styles.container}>
          <div className={styles.content}>
            {
              <>
                <GamesList games={games.results} />
                <Pagination
                  currentPage={currentPage}
                  gamesCount={games.count}
                  setCurrentPage={setCurrentPage}
                />
              </>
            }
          </div>
          {/* <Outlet /> */}
        </div>
      </main>
    </div>
  );
};

export default MainPage;
