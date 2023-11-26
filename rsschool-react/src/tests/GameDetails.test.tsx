import { MockData } from '@/mock/api/mockResponse';
import { createMockRouter } from '@/mock/api/mockRouter';
import MainPage from '@/pages';
import { IGameDetails } from '@/types';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import React from 'react';
import { describe, expect, it } from 'vitest';
global.React = React;
describe('Tests for the Detailed Card component:', () => {
  it('Make sure the detailed card component correctly displays the detailed card data', async () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <MainPage games={MockData} gameDetails={{} as IGameDetails} />
      </RouterContext.Provider>
    );
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
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <MainPage games={MockData} gameDetails={{} as IGameDetails} />
      </RouterContext.Provider>
    );
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
