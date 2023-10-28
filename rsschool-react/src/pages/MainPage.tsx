import { Component } from 'react';
import { getGames, searchGames } from '../api/games';
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
  searchGames = async (searchString: string): Promise<void> => {
    this.setState({ gamesList: await searchGames(searchString) });
  };
  componentDidMount(): void {
    this.getGamesList();
  }

  render(): JSX.Element {
    return (
      <>
        <Header searchGames={this.searchGames} />
        <GamesList gamesList={this.state.gamesList} />
      </>
    );
  }
}

export { MainPage };
