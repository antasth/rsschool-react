import { MainPage } from '@/pages/MainPage/MainPage';
import { ReactHookFormPage } from '@/pages/ReactHookFormPage/ReactHookFormPage';
import { UncontrolledFormPage } from '@/pages/UncontrolledFormPage/UncontrolledFormPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/uncontrolled-form',
    element: <UncontrolledFormPage />,
  },
  {
    path: 'react-hook-form',
    element: <ReactHookFormPage />,
  },
]);

const App = (): React.ReactElement => {
  return <RouterProvider router={router} />;
};

export { App };
