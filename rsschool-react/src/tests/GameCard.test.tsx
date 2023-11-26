import { createMockRouter } from '@/mock/api/mockRouter';
import MainPage from '@/pages';
import { IGameDetails } from '@/types';
import { fireEvent, render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { GameCard } from '../components/GameCard/GameCard';
import { MockData } from '../mock/api/mockResponse';
global.React = React;

describe('Tests for the Card component:', () => {
  it('Ensure that the card component renders the relevant card data', () => {
    const mockGame = MockData.results[0];

    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <GameCard game={mockGame} />
      </RouterContext.Provider>
    );
    expect(screen.getByText(mockGame.name)).toBeInTheDocument();
    expect(
      screen.getByText(`released: ${mockGame.released}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Rating: ${mockGame.metacritic}`)
    ).toBeInTheDocument();
    const image: HTMLImageElement = screen.getByRole('img');
    expect(image.src).toEqual(mockGame.background_image);
  });

  it('Validate that clicking on a card opens a detailed card component', async () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <MainPage games={MockData} gameDetails={{} as IGameDetails} />
      </RouterContext.Provider>
    );
    const card = await screen.findAllByTestId('game-card');
    fireEvent.click(card[2]);
    const detailsCard = await screen.findByTestId('details');
    expect(detailsCard).toBeInTheDocument();
  });
});
