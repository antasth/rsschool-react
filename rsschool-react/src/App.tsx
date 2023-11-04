import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { MainPage } from './pages/MainPage';
import { GameDetails } from './components/GameDetails/GameDetails';

const App = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="game/*" element={<GameDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { App };
