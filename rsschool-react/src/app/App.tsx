import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';

const App = (): React.ReactElement => {
  return <RouterProvider router={router} />;
};

export { App };
