import { MockData } from '@/mock/api/mockResponse';
import { createMockRouter } from '@/mock/api/mockRouter';
import MainPage from '@/pages';
import { IGameDetails } from '@/types';
import { fireEvent, render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import React from 'react';
import { describe, expect, it } from 'vitest';
global.React = React;

describe('Tests for the Card component:', () => {
  it('Check value in search input', async () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <MainPage games={MockData} gameDetails={{} as IGameDetails} />
      </RouterContext.Provider>
    );

    const button = screen.getByTestId('submit');
    const input: HTMLInputElement = screen.getByTestId('search-input');
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'dota' } });
    fireEvent.click(button);
    expect(input.value).toBe('dota');
  });
});
