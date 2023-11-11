import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { GameCard } from '../components/GameCard/GameCard';
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
  // it('Validate that clicking on a card opens a detailed card component  ', () => {});
  // it('Check that clicking triggers an additional API call to fetch detailed information.', () => {});
});
