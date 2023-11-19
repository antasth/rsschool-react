import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it } from 'vitest';
import { appRouter } from '../app/routes/router';
import { store } from '../store/store';

describe('Tests for the Detailed Card component:', () => {
  beforeEach(() => {
    const router = createMemoryRouter(appRouter);

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
  });
  it('Check that a loading indicator is displayed while fetching data', async () => {
    const card = await screen.findAllByTestId('game-card');
    fireEvent.click(card[0]);
    await waitFor(() => {
      expect(screen.getByTestId('loader')).toBeInTheDocument();
    });
  });
  it('Make sure the detailed card component correctly displays the detailed card data', async () => {
    const card = await screen.findAllByTestId('game-card');
    fireEvent.click(card[0]);
    expect(screen.getByTestId('details')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByTestId('game-name')).toBeInTheDocument();
      expect(screen.getByTestId('game-description')).toBeInTheDocument();
      expect(screen.getByTestId('game-genres')).toBeInTheDocument();
      expect(screen.getByTestId('game-platforms')).toBeInTheDocument();
    });
  });
  it('Ensure that clicking the close button hides the component', async () => {
    const card = await screen.findAllByTestId('game-card');
    fireEvent.click(card[0]);
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
