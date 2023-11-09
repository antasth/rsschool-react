import React from 'react';
import { Link } from 'react-router-dom';
import { IGame } from '../../types';
import styles from './GamesList.module.css';

const GamesList = (props: {
  gamesList: IGame[];
  queryString: string;
}): React.ReactElement => {
  const { gamesList, queryString } = props;

  return (
    <div className={styles.games}>
      <div className={styles.container}>
        {gamesList.map((game) => (
          <Link to={`games/${game.slug}`} state={queryString} key={game.id}>
            <div key={game.name} className={styles.card}>
              <div className={styles.image}>
                <img
                  className={styles.img}
                  src={game.background_image}
                  alt="game image"
                />
              </div>
              <div className={styles.description}>
                <h1>{game.name}</h1>
                <h3>Rating: {game.metacritic}</h3>
                <h3>released: {game.released}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export { GamesList };
