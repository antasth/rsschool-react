import { Component } from 'react';
import styles from './Header.module.css';

class Header extends Component {
  render(): JSX.Element {
    return (
      <header className={styles.header}>
        <div className={styles.search}>
          <input className={styles.input} type="text" />
          <button className={styles.button}>Search</button>
        </div>
      </header>
    );
  }
}

export { Header };
