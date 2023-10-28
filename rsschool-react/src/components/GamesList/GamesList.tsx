import { Component } from 'react';
import { IGame } from '../../types/types';
import styles from './GamesList.module.css';

type PropTypes = {
  gamesList: IGame[];
};
class GamesList extends Component<PropTypes> {
  render(): JSX.Element {
    return (
      <div className={styles.main}>
        <h1>GamesList</h1>
        {this.props.gamesList.map((game) => (
          <div key={game.id}>{game.name}</div>
        ))}
      </div>
    );
  }
}

export { GamesList };
