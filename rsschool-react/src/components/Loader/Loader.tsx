import { Component } from 'react';
import styles from './Loader.module.css';

class Loader extends Component {
  render(): JSX.Element {
    return <div className={styles.loader}>Loading...</div>;
  }
}

export { Loader };
