import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  RouterProvider,
  createMemoryRouter,
} from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { GameCard } from '../components/GameCard/GameCard';
import { GameDetails } from '../components/GameDetails/GameDetails';
import { MainPage } from '../pages/MainPage/MainPage';
import { store } from '../store/store';
import { gamesData } from './mockData';

describe('Tests for the Card component:', () => {
  it('Ensure that the card component renders the relevant card data', () => {
    const mockGame = gamesData[0];

    const { getByText } = render(
      <BrowserRouter>
        <GameCard game={mockGame} />
      </BrowserRouter>
    );

    expect(screen.getByText(mockGame.name)).toBeInTheDocument();
    expect(getByText(`released: ${mockGame.released}`)).toBeInTheDocument();
    expect(getByText(`Rating: ${mockGame.metacritic}`)).toBeInTheDocument();
    const image: HTMLImageElement = screen.getByRole('img');
    expect(image.src).toEqual(mockGame.background_image);
  });

  it('Validate that clicking on a card opens a detailed card component', async () => {
    const router = createMemoryRouter([
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
    // const router = createMemoryRouter(routerConfig);
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );

    // customRender(<GamesList />, { providerProps });
    const card = await screen.findAllByTestId('game-card');
    fireEvent.click(card[0]);
    const detailsCard = await screen.findByTestId('details');
    expect(detailsCard).toBeInTheDocument();
    // expect(
    //   await screen.findByRole('heading', { name: CHECKED_VALUE, level: 2 })
    // ).toBeDefined();
  });

  // it('Check that clicking triggers an additional API call to fetch detailed information.', async () => {
  //   global.fetch = vi.fn(() =>
  //     Promise.resolve({
  //       json: () => new Promise((resolve) => resolve(gamesData[0])),
  //     })
  //   ) as Mock;

  //   const customRender = (
  //     children: React.ReactElement,
  //     { providerProps }: { providerProps: { games: IGame[]; count: number } }
  //   ): RenderResult => {
  //     return render(
  //       <BrowserRouter>
  //         <GamesContextProvider {...providerProps}>
  //           {children}
  //         </GamesContextProvider>
  //       </BrowserRouter>
  //     );
  //   };

  //   const providerProps = {
  //     games: gamesData,
  //     count: 12,
  //   };

  //   const router = createBrowserRouter([
  //     {
  //       path: '/',
  //       element: <MainPage />,
  //       children: [
  //         {
  //           element: <GameDetails />,
  //           index: true,
  //         },
  //       ],
  //     },
  //   ]);
  //   render(<RouterProvider router={router} />);

  //   customRender(<GamesList />, { providerProps });
  //   const card = screen.getAllByTestId('game-card')[0];
  //   fireEvent.click(card);
  //   const game = await GamesService.getGameDetails(gamesData[0].slug);
  //   expect(game).toEqual(gamesData[0]);
  //   expect(fetch).toHaveBeenCalledTimes(1);
  // });
});
