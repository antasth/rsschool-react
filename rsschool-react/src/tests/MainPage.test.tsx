import { DEFAULT_PAGE_SIZE } from '@/constants';
import { MockData } from '@/mock/api/mockResponse';
import { createMockRouter } from '@/mock/api/mockRouter';
import MainPage from '@/pages';
import { IGameDetails } from '@/types';
import { render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import React from 'react';
import { describe, expect, it } from 'vitest';
global.React = React;

describe('Tests for the Card component:', () => {
  it('Ensure that the application Main Page renders the initial card data', async () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <MainPage games={MockData} gameDetails={{} as IGameDetails} />
      </RouterContext.Provider>
    );
    const cards = await screen.findAllByText(/released/i);
    expect(cards).toHaveLength(DEFAULT_PAGE_SIZE);
  });
});
