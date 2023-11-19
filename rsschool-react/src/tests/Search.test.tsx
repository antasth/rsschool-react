import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { RouterProvider, createMemoryRouter } from 'react-router';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { appRouter } from '../app/routes/router';
import { store } from '../store/store';
import { getFromLocalStorage } from '../utils';

const GAMES_KEY = 'searchString';

describe('Tests for the Search component:', () => {
  const getItemSpy = vi.spyOn(Storage.prototype, 'getItem');
  const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');

  afterEach(() => {
    getItemSpy.mockClear();
    setItemSpy.mockClear();
  });

  it('Verify that clicking the Search button saves the entered value to the local storage.', async () => {
    const router = createMemoryRouter(appRouter);

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    const button = await screen.findByTestId('submit');
    const input: HTMLInputElement = screen.getByTestId('search-input');
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'some test value' } });
    fireEvent.click(button);

    expect(getFromLocalStorage(GAMES_KEY)).toEqual(input.value);
  });

  it('Check that the component retrieves the value from the local storage upon mounting.', async () => {
    const router = createMemoryRouter(appRouter);

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );

    const input: HTMLInputElement = screen.getByTestId('search-input');
    expect(getFromLocalStorage(GAMES_KEY)).toEqual(input.value);
  });
});
