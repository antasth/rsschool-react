import { api } from '@/store/api/api';
import { store } from '@/store/store';
import styles from '@/styles/GameDetails.module.css';
import { IGameDetails, IGetDetailsServerSideProps } from '@/types';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { reduceGameDescription } from '../../utils';

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<IGetDetailsServerSideProps> => {
  const slug = context.params?.slug;

  const queryProps = {
    slug: slug ? slug.toString() : '',
  };
  const { data } = await store.dispatch(
    api.endpoints.getGameDetails.initiate(queryProps)
  );

  const game = data;

  return { props: { game } };
};

const GameDetails = ({ game }: { game: IGameDetails }): React.ReactElement => {
  const gameDetailsRef = useRef<HTMLDivElement>(null);

  console.log('game', game);
  const router = useRouter();

  const navigateBack = (): void => router.back();

  const handleBackgroundClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    if (
      e.target instanceof HTMLElement &&
      gameDetailsRef.current &&
      !gameDetailsRef.current.contains(e.target)
    )
      navigateBack();
  };

  return (
    <div className={styles.background} onClick={handleBackgroundClick}>
      <div
        ref={gameDetailsRef}
        className={styles.details}
        data-testid="details"
      >
        <div className={styles.game}>
          <div className={styles.title}>
            <h1 data-testid="game-name">{game?.name}</h1>
            <div
              onClick={navigateBack}
              className={styles.close}
              data-testid="close"
            >
              &#10005;
            </div>
          </div>
          <div className={styles.genres} data-testid="game-genres">
            {game?.genres?.map((genre) => <h3 key={genre.id}>{genre.name}</h3>)}
          </div>
          <img
            src={game?.background_image}
            className={styles.image}
            alt="game image"
          />
          <div className={styles.platforms} data-testid="game-platforms">
            {game?.platforms?.map((platform) => (
              <p key={platform.platform.id}>{platform.platform.name}</p>
            ))}
          </div>

          <h3 className={styles.description} data-testid="game-description">
            {reduceGameDescription(game?.description_raw)}
          </h3>
          <h3>{game?.released}</h3>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
