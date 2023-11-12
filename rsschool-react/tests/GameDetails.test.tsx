import {
  RenderResult,
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
import { Mock, describe, expect, it, vi } from 'vitest';
import { GameDetails } from '../src/components/GameDetails/GameDetails';
import { GamesList } from '../src/components/GamesList/GamesList';
import { GamesContextProvider } from '../src/context/GamesContext';
import { MainPage } from '../src/pages/MainPage';
import { IGame } from '../src/types';
import { gamesData } from './mockData';

describe('Tests for the Detailed Card component:', () => {
  it('Check that a loading indicator is displayed while fetching data', async () => {
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
            path: '/games',
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
      expect(screen.getByTestId('loader')).toBeInTheDocument();
    });
  });
  it('Make sure the detailed card component correctly displays the detailed card data', () => {});
  it('Ensure that clicking the close button hides the component', () => {});
});
