import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

const App = (): React.ReactElement => {
  return <RouterProvider router={router} />;
};

export { App };
