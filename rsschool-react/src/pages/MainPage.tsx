import { Component } from 'react';
import { getGames } from '../api/games';
import { GamesList } from '../components/GamesList/GamesList';
import { Header } from '../components/Header/Header';
import { IGame } from '../types/types';

class MainPage extends Component<
  Record<string, never>,
  { gamesList: IGame[] }
> {
  state = {
    gamesList: [],
  };
  getGamesList = async (): Promise<void> => {
    this.setState({ gamesList: await getGames(1) });
  };
  componentDidMount(): void {
    // this.getGamesList();
  }

  render(): JSX.Element {
    return (
      <>
        <Header />
        <h1>Games</h1>
        <GamesList />
      </>
    );
  }
}

export { MainPage };
