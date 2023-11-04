import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getGameDetails } from '../../api/games';
import { IGameDetails } from '../../types/types';
import styles from './GameDetails.module.css';

const GameDetails = (): React.ReactElement => {
  const [gameDetails, setGameDetails] = useState<IGameDetails>();

  const location = useLocation();

  const getGame = async (path: string): Promise<void> => {
    const game = await getGameDetails(path);
    setGameDetails(game);
  };

  useEffect(() => {
    console.log('useEffect');

    getGame(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <h1 className={styles.details}>Game Details</h1>
      {gameDetails?.description}
    </>
  );
};

export { GameDetails };
