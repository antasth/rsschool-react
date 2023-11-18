import { RenderResult, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { GamesList } from '../components/GamesList/GamesList';
import { GamesContextProvider } from '../src/context/GamesContext';
import { IGame } from '../types';
import { gamesData } from './mockData';

describe('Tests for the Card List component', () => {
  it('Verify that the component renders the specified number of cards.', async () => {
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

    customRender(<GamesList />, { providerProps });

    const cards = await screen.findAllByText(/released/i);
    expect(cards).toHaveLength(providerProps.count);
  });

  it('Check that an appropriate message is displayed if no cards are present.', () => {
    const customRender = (
      children: React.ReactElement,
      { providerProps }: { providerProps: { count: number } }
    ): RenderResult => {
      return render(
        <GamesContextProvider {...providerProps}>
          {children}
        </GamesContextProvider>
      );
    };

    const providerProps = {
      count: 0,
    };

    customRender(<GamesList />, { providerProps });

    expect(
      screen.getByText('Nothing was found for your request')
    ).toBeInTheDocument();
  });
});
