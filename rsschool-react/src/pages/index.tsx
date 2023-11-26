import GameDetails from '@/components/GameDetails/GameDetails';
import { GamesList } from '@/components/GamesList/GamesList';
import { Pagination } from '@/components/Pagination/Pagination';
import { Search } from '@/components/Search/Search';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/constants';
import { api } from '@/store/api/api';
import { store } from '@/store/store';
import styles from '@/styles/MainPage.module.css';
import {
  IGameDetails,
  IGamesResponseObject,
  IGetServerSideProps,
} from '@/types';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<IGetServerSideProps> => {
  const { page, page_size, search, details } = context.query;

  const queryProps = {
    currentPage: page ? +page : DEFAULT_PAGE,
    searchString: search ? search.toString() : '',
    pageSize: page_size ? +page_size : DEFAULT_PAGE_SIZE,
  };
  const { data } = await store.dispatch(
    api.endpoints.getGames.initiate(queryProps)
  );

  const games = data;

  const slug = details;
  const queryDetailsProps = {
    slug: slug ? slug.toString() : '',
  };
  const response = await store.dispatch(
    api.endpoints.getGameDetails.initiate(queryDetailsProps)
  );
  const gameDetails = response.data ? response.data : null;

  return { props: { games, gameDetails } };
};
// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ): Promise<IGetServerSideProps> => {
//   const { page, page_size, search } = context.query;

//   const queryProps = {
//     currentPage: page ? +page : DEFAULT_PAGE,
//     searchString: search ? search.toString() : '',
//     pageSize: page_size ? +page_size : DEFAULT_PAGE_SIZE,
//   };
//   const { data } = await store.dispatch(
//     api.endpoints.getGames.initiate(queryProps)
//   );

//   const games = data;

//   return { props: { games } };
// };

const MainPage = ({
  games,
  gameDetails,
}: {
  games: IGamesResponseObject;
  gameDetails: IGameDetails;
}): React.ReactElement => {
  const [isError, setIsError] = useState(false);
  const { query } = useRouter();
  const { page = 1 } = query;
  console.log(query);

  console.log('games', games);
  console.log('gameDetails', gameDetails);

  const setError = (): void => setIsError(true);

  useEffect(() => {
    if (isError) throw new Error('Error for test ErrorBoundary');
  }, [isError]);
  // const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.mainPage}>
      <Search />
      {/* <button onClick={() => setShowModal(true)}>Open Modal</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} title="Modal">
          Modal112
        </Modal>
      )} */}
      {gameDetails && <GameDetails game={gameDetails} />}
      <main className={styles.main}>
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
