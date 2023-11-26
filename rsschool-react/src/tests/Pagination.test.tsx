import { MockData } from '@/mock/api/mockResponse';
import { createMockRouter } from '@/mock/api/mockRouter';
import MainPage from '@/pages';
import { IGameDetails } from '@/types';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
global.React = React;

describe('Tests for the Pagination component:', () => {
  it('Make sure the component updates URL query parameter when page changes', async () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <MainPage games={MockData} gameDetails={{} as IGameDetails} />
      </RouterContext.Provider>
    );
    vi.mock('next/router', () => vi.importActual('next-router-mock'));
    const nextButton = await screen.findByTestId('next');
    fireEvent.click(nextButton);
    waitFor(() => {
      expect(mockRouter).toMatchObject({
        pathname: '?page=2',
      });
    });
  });
});
