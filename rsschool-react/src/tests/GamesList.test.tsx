import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it } from 'vitest';
import { appRouter } from '../app/routes/router';
import { MockData } from '../mock/api/mockResponse';
import { store } from '../store/store';

describe('Tests for the Card List component', () => {
  beforeEach(() => {
    const router = createMemoryRouter(appRouter);

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
  });
  it('Verify that the component renders the specified number of cards.', async () => {
    const cards = await screen.findAllByText(/released/i);
    expect(cards).toHaveLength(MockData.results.length);
  });

  it('Check that an appropriate message is displayed if no cards are present.', async () => {
    const button = screen.getByTestId('submit');
    const input: HTMLInputElement = screen.getByLabelText('search-input');
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'noCardsPresentTest' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(
        screen.getByText('Nothing was found for your request')
      ).toBeInTheDocument();
    });
  });
});
