import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { useGetGameDetailsQuery } from '../../store/api/api';
import { IGameDetails } from '../../types';
import { reduceGameDescription } from '../../utils';
import { Loader } from '../Loader/Loader';
import styles from './GameDetails.module.css';

const GameDetails = (): React.ReactElement => {
  const [gameDetails, setGameDetails] = useState<IGameDetails>();

  const location = useLocation();
  const navigate = useNavigate();
  const gameDetailsRef = useRef<HTMLDivElement>(null);
  const slug = location.pathname;

  const { isFetching, data } = useGetGameDetailsQuery({ slug });

  const { setIsLoading } = useActions();

  useEffect(() => {
    if (data) setGameDetails(data);
  }, [data]);

  useEffect(() => {
    setIsLoading(isFetching);
  }, [isFetching, setIsLoading]);

  const navigateBack = (): void => navigate(-1);

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
        {isFetching ? (
          <Loader />
        ) : (
          <div className={styles.game}>
            <div className={styles.title}>
              <h1 data-testid="game-name">{gameDetails?.name}</h1>
              <div
                onClick={navigateBack}
                className={styles.close}
                data-testid="close"
              >
                &#10005;
              </div>
            </div>
            <div className={styles.genres} data-testid="game-genres">
              {gameDetails?.genres?.map((genre) => (
                <h3 key={genre.id}>{genre.name}</h3>
              ))}
            </div>
            <img
              src={gameDetails?.background_image}
              className={styles.image}
              alt="game image"
            />
            <div className={styles.platforms} data-testid="game-platforms">
              {gameDetails?.platforms?.map((platform) => (
                <p key={platform.platform.id}>{platform.platform.name}</p>
              ))}
            </div>

            <h3 className={styles.description} data-testid="game-description">
              {reduceGameDescription(gameDetails?.description_raw)}
            </h3>
            <h3>{gameDetails?.released}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export { GameDetails };
