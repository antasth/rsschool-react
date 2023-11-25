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

  const queryProps = {
    currentPage: page ? +page : 1,
    searchString: search ? search.toString() : '',
    pageSize: page_size ? +page_size : DEFAULT_PAGE_SIZE,
  };
  const { data } = await store.dispatch(
    api.endpoints.getGames.initiate(queryProps)
  );

  const games = data;

  return { props: { games } };
};
const MainPage = ({
  games,
}: {
  games: IGamesResponseObject;
}): React.ReactElement => {
  const [isError, setIsError] = useState(false);
  const { query } = useRouter();
  const { page = 1 } = query;
  // page.toString();
  console.log('games', games);

  const setError = (): void => setIsError(true);

  useEffect(() => {
    if (isError) throw new Error('Error for test ErrorBoundary');
  }, [isError]);

  return (
    <div className={styles.mainPage}>
      <Search />
      <main
      // className={
      //   isDescription ? `${styles.main} ${styles.small}` : styles.main
      // }
      >
        <button className={styles.button} type="button" onClick={setError}>
          Throw Error
        </button>
        <div className={styles.container}>
          <div className={styles.content}>
            {
              <>
                <GamesList games={games.results} />
                <Pagination currentPage={+page} gamesCount={games.count} />
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
