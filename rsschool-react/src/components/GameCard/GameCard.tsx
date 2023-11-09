import { Link } from 'react-router-dom';
import { IGame } from '../../types';
import styles from './GameCard.module.css';

const GameCard = (props: {
  game: IGame;
  queryString: string;
}): React.ReactElement => {
  const { game, queryString } = props;

  return (
    <Link to={`games/${game.slug}`} state={queryString}>
      <div className={styles.card}>
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
  );
};

export { GameCard };
