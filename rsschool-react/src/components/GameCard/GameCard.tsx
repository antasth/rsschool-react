import { Link } from 'react-router-dom';
import { IGameCardProps } from '../../types';
import styles from './GameCard.module.css';

const GameCard = ({ game }: IGameCardProps): React.ReactElement => {
  return (
    <Link to={`games/${game.slug}`}>
      <div className={styles.card} data-testid="game-card">
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
