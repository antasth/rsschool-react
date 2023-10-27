import { Component } from 'react';
import styles from './GamesList.module.css';

class GamesList extends Component {
  render(): JSX.Element {
    return (
      <div className={styles.main}>
        <h1>GamesList</h1>
      </div>
    );
  }
}

export { GamesList };
