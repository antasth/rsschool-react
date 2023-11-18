import { GameDetails } from '../../components/GameDetails/GameDetails';
import { MainPage } from '../../pages/MainPage/MainPage';
import { NotFound } from '../../pages/NotFound/NotFound';

export const appRouter = [
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
];
