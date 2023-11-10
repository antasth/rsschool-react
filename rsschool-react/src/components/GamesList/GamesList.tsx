import React, { useContext } from 'react';
import { GamesContext } from '../../context/GamesContext';
import { GameCard } from '../GameCard/GameCard';
import styles from './GamesList.module.css';

const GamesList = (): React.ReactElement => {
  const { gamesList } = useContext(GamesContext);

  return (
    <div className={styles.games}>
      <div className={styles.container}>
        {gamesList.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export { GamesList };
