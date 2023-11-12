import {
  RenderResult,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { Mock, describe, expect, it, vi } from 'vitest';
import { GamesService } from '../src/api/games';
import { GameCard } from '../src/components/GameCard/GameCard';
import { GameDetails } from '../src/components/GameDetails/GameDetails';
import { GamesList } from '../src/components/GamesList/GamesList';
import { GamesContextProvider } from '../src/context/GamesContext';
import { MainPage } from '../src/pages/MainPage/MainPage';
import { IGame } from '../src/types';
import { gamesData } from './mockData';

describe('Tests for the Card component:', () => {
  const mockGame = gamesData[0];

  const { getByText } = render(
    <BrowserRouter>
      <GameCard game={mockGame} />
    </BrowserRouter>
  );

  it('Ensure that the card component renders the relevant card data', () => {
    expect(screen.getByText(mockGame.name)).toBeInTheDocument();
    expect(getByText(`released: ${mockGame.released}`)).toBeInTheDocument();
    expect(getByText(`Rating: ${mockGame.metacritic}`)).toBeInTheDocument();
    const image: HTMLImageElement = screen.getByRole('img');
    expect(image.src).toEqual(mockGame.background_image);
  });

  it('Validate that clicking on a card opens a detailed card component', async () => {
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
    expect(screen.getByTestId('details')).toBeInTheDocument();
  });

  it('Check that clicking triggers an additional API call to fetch detailed information.', async () => {
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
    const game = await GamesService.getGameDetails(gamesData[0].slug);
    expect(game).toEqual(gamesData[0]);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
