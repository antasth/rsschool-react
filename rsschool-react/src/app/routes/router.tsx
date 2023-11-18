import { createBrowserRouter } from 'react-router-dom';
import { GameDetails } from '../../components/GameDetails/GameDetails';
import { MainPage } from '../../pages/MainPage/MainPage';
import { NotFound } from '../../pages/NotFound/NotFound';

export const router = createBrowserRouter([
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
