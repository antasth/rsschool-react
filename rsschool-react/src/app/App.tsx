import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { appRouter } from './routes/router';

const router = createBrowserRouter(appRouter);

const App = (): React.ReactElement => {
  return <RouterProvider router={router} />;
};

export { App };
