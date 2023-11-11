import { RenderResult, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { GamesList } from '../components/GamesList/GamesList';
import { GamesContextProvider } from '../context/GamesContext';

describe('Tests for the Card List component', () => {
  it('Verify that the component renders the specified number of cards.', () => {
    //
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
