import { MainPage } from '@/pages/MainPage';
import { ReactHookFormPage } from '@/pages/ReactHookFormPage';
import { UncontrolledFormPage } from '@/pages/UncontrolledFormPage';
import { createBrowserRouter } from 'react-router-dom';

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

export { router };
