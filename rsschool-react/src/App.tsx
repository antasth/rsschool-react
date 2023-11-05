import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { GameDetails } from './components/GameDetails/GameDetails';
import { MainPage } from './pages/MainPage';

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
  },
]);

const App = (): React.ReactElement => {
  return <RouterProvider router={router} />;
};

export { App };
