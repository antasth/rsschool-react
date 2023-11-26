import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { IGameCardProps } from '../../types';
import styles from './GameCard.module.css';

const GameCard = ({ game }: IGameCardProps): React.ReactElement => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleGameCardClick = (): void => {
    if (searchParams) {
      const current = new URLSearchParams(
        Array.from(searchParams.entries())
      ).toString();
      console.log(current);

      const query = `?${current}`;
      router.push(`games/${game.slug}${query}`);
    }
  };

  return (
    <div
      className={styles.card}
      onClick={handleGameCardClick}
      data-testid="game-card"
    >
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
  );
};

export { GameCard };
