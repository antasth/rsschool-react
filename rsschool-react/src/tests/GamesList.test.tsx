import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { createMockRouter } from '@/mock/api/mockRouter';
import MainPage from '@/pages';
import { IGameDetails } from '@/types';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { MockData } from '../mock/api/mockResponse';
global.React = React;

describe('Tests for the Card List component', () => {
  it('Verify that the component renders the specified number of cards.', async () => {
    render(
      <RouterContext.Provider value={createMockRouter({ pathname: '/qwerty' })}>
        <MainPage games={MockData} gameDetails={{} as IGameDetails} />
      </RouterContext.Provider>
    );
    const cards = await screen.findAllByText(/released/i);
    expect(cards).toHaveLength(MockData.results.length);
  });

  it('Check that an appropriate message is displayed if no cards are present.', async () => {
    render(
      <RouterContext.Provider value={createMockRouter({ pathname: '/qwerty' })}>
        <MainPage games={MockData} gameDetails={{} as IGameDetails} />
      </RouterContext.Provider>
    );
    const button = screen.getByTestId('submit');
    const input: HTMLInputElement = screen.getByTestId('search-input');
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'qwerty1234567' } });
    fireEvent.click(button);

    waitFor(() => {
      expect(
        screen.getByText('Nothing was found for your request')
      ).toBeInTheDocument();
    });
  });
});
