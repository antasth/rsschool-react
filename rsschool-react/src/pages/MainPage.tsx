import { Component } from 'react';
import { getGames, searchGames } from '../api/games';
import { GamesList } from '../components/GamesList/GamesList';
import { Header } from '../components/Header/Header';
import { IGame } from '../types/types';
import { getFromLocalStorage } from '../utils/utils';

class MainPage extends Component<
  Record<string, never>,
  { gamesList: IGame[] }
> {
  state = {
    gamesList: [],
    page: 1,
  };
  getAllGamesList = async (): Promise<void> => {
    this.setState({ gamesList: await getGames(this.state.page) });
  };
  getSearchGamesList = async (searchString: string): Promise<void> => {
    this.setState({ gamesList: await searchGames(searchString) });
  };
  componentDidMount(): void {
    const searchRequest = getFromLocalStorage();
    searchRequest
      ? this.getSearchGamesList(searchRequest)
      : this.getAllGamesList();
  }

  render(): JSX.Element {
    return (
      <>
        <Header searchGames={this.getSearchGamesList} />
        <GamesList gamesList={this.state.gamesList} />
      </>
    );
  }
}

export { MainPage };
