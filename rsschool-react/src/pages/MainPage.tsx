import { Component } from 'react';
import { GamesList } from '../components/GamesList/GamesList';
import { Header } from '../components/Header/Header';

class MainPage extends Component {
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
