import './App.css';
import { GamesList } from './components/GamesList/GamesList';
import { Header } from './components/Header/Header';

function App(): React.ReactElement {
  return (
    <>
      <Header />
      <h1>Games</h1>
      <GamesList />
    </>
  );
}

export default App;
