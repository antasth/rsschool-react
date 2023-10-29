import { ChangeEvent, Component, FormEvent } from 'react';
import { saveToLocalStorage } from '../../utils/utils';
import styles from './Header.module.css';

type Props = {
  searchGames: (searchString: string) => void;
};
type State = {
  search: string;
};

class Header extends Component<Props, State> {
  state: State = { search: '' };

  handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ search: e.target.value });
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    this.props.searchGames(this.state.search);
    saveToLocalStorage(this.state.search);
  };

  render(): React.ReactElement {
    return (
      <header className={styles.header}>
        <form className={styles.search} onSubmit={this.handleSubmit}>
          <input
            className={styles.input}
            type="text"
            placeholder="search..."
            value={this.state.search}
            onChange={this.handleChange}
          />
          <button className={styles.button} type="submit">
            Search
          </button>
        </form>
      </header>
    );
  }
}

export { Header };
