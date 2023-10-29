import { Component } from 'react';
import styles from './Loader.module.css';

class Loader extends Component {
  render(): React.ReactElement {
    return <div className={styles.loader}>Loading...</div>;
  }
}

export { Loader };
