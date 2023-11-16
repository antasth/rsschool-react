import React from 'react';
import { useGames } from '../../hooks/useGames';
import { GameCard } from '../GameCard/GameCard';
import styles from './GamesList.module.css';

const GamesList = (): React.ReactElement => {
  const { games } = useGames();

  return (
    <div className={styles.games}>
      <div className={styles.container}>
        {games.length ? (
          games.map((game) => <GameCard key={game.id} game={game} />)
        ) : (
          <h1>Nothing was found for your request</h1>
        )}
      </div>
    </div>
  );
};

export { GamesList };
