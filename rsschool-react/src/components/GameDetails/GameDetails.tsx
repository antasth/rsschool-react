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
    console.log('useEffect');

    getGame(location.pathname);
  }, [location.pathname]);

  return (
    <div className={styles.details}>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h1 className={styles.details}>Game Details</h1>
          <h3>{gameDetails?.description}</h3>
        </div>
      )}
    </div>
  );
};

export { GameDetails };
