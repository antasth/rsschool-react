import { Component } from 'react';
import { IGame } from '../../types/types';
import styles from './GamesList.module.css';

type PropTypes = {
  gamesList: IGame[];
};
class GamesList extends Component<PropTypes> {
  render(): React.ReactElement {
    return (
      <div className={styles.games}>
        <h1 className={styles.title}>Games List</h1>
        <div className={styles.container}>
          {this.props.gamesList.map((game) => (
            <div key={game.id} className={styles.card}>
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
          ))}
        </div>
      </div>
    );
  }
}

export { GamesList };
