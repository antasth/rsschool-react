import React, { useContext } from 'react';
import { GamesContext } from '../../context/GamesContext';
import { GameCard } from '../GameCard/GameCard';
import styles from './GamesList.module.css';

const GamesList = (): React.ReactElement => {
  const { gamesList, gamesCount } = useContext(GamesContext);

  return (
    <div className={styles.games}>
      <div className={styles.container}>
        {gamesCount ? (
          gamesList.map((game) => <GameCard key={game.id} game={game} />)
        ) : (
          <h1>Nothing was found for your request</h1>
        )}
      </div>
    </div>
  );
};

export { GamesList };
