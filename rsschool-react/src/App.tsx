import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { GameDetails } from './components/GameDetails/GameDetails';
import { GamesContextProvider } from './context/GamesContext';
import { MainPage } from './pages/MainPage/MainPage';
import { NotFound } from './pages/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      {
        path: 'games/*',
        element: <GameDetails />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

const App = (): React.ReactElement => {
  return (
    <GamesContextProvider>
      <RouterProvider router={router} />
    </GamesContextProvider>
  );
};

export { App };
