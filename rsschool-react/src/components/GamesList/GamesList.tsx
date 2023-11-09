import React, { useContext } from 'react';
import { GamesContext } from '../../context/GamesContext';
import { GameCard } from '../GameCard/GameCard';
import styles from './GamesList.module.css';

const GamesList = (props: { queryString: string }): React.ReactElement => {
  const { queryString } = props;

  const games = useContext(GamesContext);

  return (
    <div className={styles.games}>
      <div className={styles.container}>
        {games.gamesList.map((game) => (
          <GameCard key={game.id} game={game} queryString={queryString} />
        ))}
      </div>
    </div>
  );
};

export { GamesList };
