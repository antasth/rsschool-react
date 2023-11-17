import React from 'react';
import { IGamesListProps } from '../../types';
import { GameCard } from '../GameCard/GameCard';
import styles from './GamesList.module.css';

const GamesList = ({ games }: IGamesListProps): React.ReactElement => {
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
