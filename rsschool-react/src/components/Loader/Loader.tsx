import { Component } from 'react';
import styles from './Loader.module.css';

class Loader extends Component {
  render(): React.ReactElement {
    return (
      <div className={styles.loader}>
        <img src="/svg/loader.svg" alt="loader" />
      </div>
    );
  }
}

export { Loader };
