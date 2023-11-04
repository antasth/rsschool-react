import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getGameDetails } from '../../api/games';
import { IGameDetails } from '../../types/types';
import { Loader } from '../Loader/Loader';
import styles from './GameDetails.module.css';

const GameDetails = (): React.ReactElement => {
  const [gameDetails, setGameDetails] = useState<IGameDetails>();
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();

  const getGame = async (path: string): Promise<void> => {
    setIsLoading(true);
    const game = await getGameDetails(path);
    setGameDetails(game);
    setIsLoading(false);
  };

  useEffect(() => {
    getGame(location.pathname);
  }, [location.pathname]);

  return (
    <div className={styles.details}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.game}>
          <h1 className={styles.title}>{gameDetails?.name}</h1>
          <img
            src={gameDetails?.background_image}
            className={styles.image}
            alt="game image"
          />
          <h3 className={styles.description}>{gameDetails?.description_raw}</h3>
          <h3>{gameDetails?.released}</h3>
        </div>
      )}
    </div>
  );
};

export { GameDetails };
