import { render, screen } from '@testing-library/react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { GameDetails } from '../src/components/GameDetails/GameDetails';
import { MainPage } from '../src/pages/MainPage/MainPage';
import { NotFound } from '../src/pages/NotFound/NotFound';

describe('Tests for the 404 Page component:', () => {
  it('Ensure that the 404 page is displayed when navigating to an invalid route', () => {
    const router = createBrowserRouter([
      {
        path: '/qwerty123',
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
    render(<RouterProvider router={router} />);
    expect(screen.getByText('PAGE NOT FOUND')).toBeInTheDocument();
  });
});
