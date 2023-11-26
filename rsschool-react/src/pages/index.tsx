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
import React from 'react';

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

const MainPage = ({
  games,
  gameDetails,
}: {
  games: IGamesResponseObject;
  gameDetails: IGameDetails;
}): React.ReactElement => {
  const { query } = useRouter();
  const { page = 1 } = query;

  return (
    <div className={styles.mainPage}>
      <Search />
      {gameDetails && <GameDetails game={gameDetails} />}
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            {
              <>
                <GamesList games={games.results} />
                <Pagination currentPage={+page} gamesCount={games.count} />
              </>
            }
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
