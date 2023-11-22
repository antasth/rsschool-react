import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  RouterProvider,
  createMemoryRouter,
} from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { appRouter } from '../app/routes/router';
import { GameCard } from '../components/GameCard/GameCard';
import { isApiCall, isApiCallClear } from '../mock/api/handlers';
import { MockData } from '../mock/api/mockResponse';
import { store } from '../store/store';

describe('Tests for the Card component:', () => {
  it('Ensure that the card component renders the relevant card data', () => {
    const mockGame = MockData.results[0];

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
    const router = createMemoryRouter(appRouter);

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );

    const card = await screen.findAllByTestId('game-card');
    fireEvent.click(card[2]);
    const detailsCard = await screen.findByTestId('details');
    expect(detailsCard).toBeInTheDocument();
  });

  it('Check that clicking triggers an additional API call to fetch detailed information.', async () => {
    const router = createMemoryRouter(appRouter);

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );

    isApiCallClear();
    const card = await screen.findAllByTestId('game-card');
    fireEvent.click(card[0]);
    await waitFor(() => {});
    expect(isApiCall).toBe(true);
  });
});
