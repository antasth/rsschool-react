import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GamesService } from '../../api/games';
import { useFetching } from '../../hooks/useFetching';
import { IGameDetails } from '../../types';
import {
  getFromLocalStorage,
  reduceGameDescription,
  saveToLocalStorage,
} from '../../utils';
import { Loader } from '../Loader/Loader';
import styles from './GameDetails.module.css';

const GameDetails = (): React.ReactElement => {
  const [gameDetails, setGameDetails] = useState<IGameDetails>();
  const [prevLocation, setPrevLocation] = useState(
    getFromLocalStorage('location')
  );

  const location = useLocation();
  const navigate = useNavigate();
  const gameDetailsRef = useRef<HTMLDivElement>(null);

  const [fetchGameDetails, isLoading, fetchError] = useFetching(
    useCallback(async () => {
      const response = await GamesService.getGameDetails(location.pathname);
      setGameDetails(response);
    }, [location.pathname])
  );

  useEffect(() => {
    fetchGameDetails();
    if (location.state) {
      setPrevLocation(location.state);
      saveToLocalStorage('location', location.state);
    }
  }, [location.pathname, location.state, prevLocation, fetchGameDetails]);

  const handleNavigate = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    if (
      e.target instanceof HTMLElement &&
      gameDetailsRef.current &&
      !gameDetailsRef.current.contains(e.target)
    ) {
      return navigate(`/${prevLocation}`);
    }
  };

  useEffect(() => {
    if (fetchError) throw new Error('Game Details Fetch Error');
  }, [fetchError]);

  return (
    <div className={styles.background} onClick={handleNavigate}>
      <div ref={gameDetailsRef} className={styles.details}>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={styles.game}>
            <div className={styles.title}>
              <h1>{gameDetails?.name}</h1>
              <Link to={`/${prevLocation}`} className={styles.close}>
                &#10005;
              </Link>
            </div>
            <div className={styles.genres}>
              {gameDetails?.genres.map((genre) => (
                <h3 key={genre.id}>{genre.name}</h3>
              ))}
            </div>
            <img
              src={gameDetails?.background_image}
              className={styles.image}
              alt="game image"
            />
            <div className={styles.platforms}>
              {gameDetails?.platforms.map((platform) => (
                <p key={platform.platform.id}>{platform.platform.name}</p>
              ))}
            </div>

            <h3 className={styles.description}>
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
