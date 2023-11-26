import { IGameDetails } from '@/types';
import { reduceGameDescription } from '@/utils';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './GameDetails.module.css';

export const GameDetails = ({
  game,
}: {
  game: IGameDetails;
}): React.ReactElement => {
  const gameDetailsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const navigateBack = (): void => router.back();

  const handleClose = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    if (
      e.target instanceof HTMLElement &&
      gameDetailsRef.current &&
      !gameDetailsRef.current.contains(e.target)
    )
      navigateBack();
  };

  const gameDetailsContent = (
    <div className={styles.background} onClick={handleClose}>
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
  const contentWrapper = (
    <div className={styles.content_overlay}>
      <div className={styles.content_wrapper}>
        <div className={styles.content}>
          <div className={styles.content_body}>{gameDetailsContent}</div>
        </div>
      </div>
    </div>
  );
  return ReactDOM.createPortal(contentWrapper, document.body);
};

export default GameDetails;
