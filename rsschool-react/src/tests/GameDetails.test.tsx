import {
  RenderResult,
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { Mock, afterEach, describe, expect, it, vi } from 'vitest';
import { GameDetails } from '../components/GameDetails/GameDetails';
import { GamesList } from '../components/GamesList/GamesList';
import { MainPage } from '../pages/MainPage/MainPage';
import { GamesContextProvider } from '../src/context/GamesContext';
import { IGame } from '../types';
import { gamesData } from './mockData____';

describe('Tests for the Detailed Card component:', () => {
  afterEach(() => {
    cleanup();
  });
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => new Promise((resolve) => resolve(gamesData[0])),
    })
  ) as Mock;
  const customRender = (
    children: React.ReactElement,
    { providerProps }: { providerProps: { games: IGame[]; count: number } }
  ): RenderResult => {
    return render(
      <BrowserRouter>
        <GamesContextProvider {...providerProps}>
          {children}
        </GamesContextProvider>
      </BrowserRouter>
    );
  };
  const providerProps = {
    games: gamesData,
    count: 12,
  };
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPage />,
      children: [
        {
          path: '/games/*',
          element: <GameDetails />,
          index: true,
        },
      ],
    },
  ]);
  render(<RouterProvider router={router} />);
  customRender(<GamesList />, { providerProps });
  it('Check that a loading indicator is displayed while fetching data', async () => {
    render(<RouterProvider router={router} />);
    customRender(<GamesList />, { providerProps });
    const card = screen.getAllByTestId('game-card')[0];
    fireEvent.click(card);
    await waitFor(() => {
      expect(screen.getByTestId('loader')).toBeInTheDocument();
    });
  });
  it('Make sure the detailed card component correctly displays the detailed card data', async () => {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <MainPage />,
        children: [
          {
            path: '/games/*',
            element: <GameDetails />,
            index: true,
          },
        ],
      },
    ]);
    render(<RouterProvider router={router} />);
    customRender(<GamesList />, { providerProps });
    const card = screen.getAllByTestId('game-card')[0];
    fireEvent.click(card);
    await waitFor(() => {
      expect(screen.getByTestId('details')).toBeInTheDocument();
      expect(screen.getByTestId('game-name')).toBeInTheDocument();
      expect(screen.getByTestId('game-description')).toBeInTheDocument();
      expect(screen.getByTestId('game-genres')).toBeInTheDocument();
      expect(screen.getByTestId('game-platforms')).toBeInTheDocument();
    });
  });
  it('Ensure that clicking the close button hides the component', async () => {
    const customRender = (
      children: React.ReactElement,
      { providerProps }: { providerProps: { games: IGame[]; count: number } }
    ): RenderResult => {
      return render(
        <BrowserRouter>
          <GamesContextProvider {...providerProps}>
            {children}
          </GamesContextProvider>
        </BrowserRouter>
      );
    };
    const providerProps = {
      games: gamesData,
      count: 1,
    };
    customRender(<GameDetails />, { providerProps });
    await waitFor(() => {
      screen.getByTestId('details');
      const closeButton = screen.getByTestId('close');
      const detailsCard = screen.getByTestId('details');
      expect(detailsCard).toBeInTheDocument();
      expect(closeButton).toBeInTheDocument();
      fireEvent.click(closeButton);
      waitFor(() => {
        expect(detailsCard).not.toBeInTheDocument();
      });
    });
  });
});
