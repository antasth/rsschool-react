import { Component } from 'react';
import { getGames } from '../api/games';
import { GamesList } from '../components/GamesList/GamesList';
import { Header } from '../components/Header/Header';
import { Loader } from '../components/Loader/Loader';
import { IGame } from '../types/types';
import { getFromLocalStorage } from '../utils/utils';
import styles from './MainPage.module.css';

interface State {
  gamesList: IGame[];
  isLoading: boolean;
  isError: boolean;
}

class MainPage extends Component<Record<string, never>, State> {
  state: State = {
    gamesList: [],
    isLoading: true,
    isError: false,
  };

  getGamesList = async (searchString: string): Promise<void> => {
    this.setState({ isLoading: true });
    this.setState({
      gamesList: await getGames(searchString),
      isLoading: false,
    });
  };

  setError = (): void => {
    this.setState({ isError: true });
  };

  componentDidMount(): void {
    const searchRequest = getFromLocalStorage();
    this.getGamesList(searchRequest);
  }

  render(): React.ReactElement {
    if (this.state.isError) {
      throw new Error('Error for test ErrorBoundary');
    }
    return (
      <>
        <Header searchGames={this.getGamesList} />
        <main className={styles.main}>
          <button
            className={styles.button}
            type="button"
            onClick={this.setError}
          >
            Throw Error
          </button>
          {this.state.isLoading ? (
            <Loader />
          ) : (
            <GamesList gamesList={this.state.gamesList} />
          )}
        </main>
      </>
    );
  }
}

export { MainPage };
