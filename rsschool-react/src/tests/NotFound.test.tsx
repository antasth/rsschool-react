import { MockData } from '@/mock/api/mockResponse';
import { createMockRouter } from '@/mock/api/mockRouter';
import MainPage from '@/pages';
import { IGameDetails } from '@/types';
import { act, render, screen, waitFor } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
global.React = React;

describe('Tests for the 404 Page component:', () => {
  it('Ensure that the 404 page is displayed when navigating to an invalid route', async () => {
    act(() => {
      render(
        <RouterContext.Provider value={createMockRouter({})}>
          <MainPage games={MockData} gameDetails={{} as IGameDetails} />
        </RouterContext.Provider>
      );
      vi.mock('next/router', () => vi.importActual('next-router-mock'));
      mockRouter.push('/invalid-path');
      waitFor(() => {
        expect(screen.getByText('PAGE NOT FOUND')).toBeInTheDocument();
      });
    });
  });
});
