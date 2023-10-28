import { Component } from 'react';
import { getGames } from '../api/games';
import { GamesList } from '../components/GamesList/GamesList';
import { Header } from '../components/Header/Header';
import { IGame } from '../types/types';
import { getFromLocalStorage } from '../utils/utils';
import styles from './MainPage.module.css';

class MainPage extends Component<
  Record<string, never>,
  { gamesList: IGame[] }
> {
  state = {
    gamesList: [],
  };

  getGamesList = async (searchString: string): Promise<void> => {
    this.setState({ gamesList: await getGames(searchString) });
  };
  componentDidMount(): void {
    const searchRequest = getFromLocalStorage();
    this.getGamesList(searchRequest);
  }

  render(): JSX.Element {
    return (
      <>
        <Header searchGames={this.getGamesList} />
        <main className={styles.main}>
          <GamesList gamesList={this.state.gamesList} />
        </main>
      </>
    );
  }
}

export { MainPage };
