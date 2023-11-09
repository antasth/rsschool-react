import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getGameDetails } from '../../api/games';
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
  const [isLoading, setIsLoading] = useState(true);
  const [prevLocation, setPrevLocation] = useState(
    getFromLocalStorage('location')
  );

  const location = useLocation();
  const navigate = useNavigate();
  const gameDetailsRef = useRef<HTMLDivElement>(null);

  const getGame = async (path: string): Promise<void> => {
    setIsLoading(true);
    const game = await getGameDetails(path);
    setGameDetails(game);
    setIsLoading(false);
  };

  useEffect(() => {
    getGame(location.pathname);
    if (location.state) {
      setPrevLocation(location.state);
      saveToLocalStorage('location', location.state);
    }
  }, [location.pathname, location.state, prevLocation]);

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
