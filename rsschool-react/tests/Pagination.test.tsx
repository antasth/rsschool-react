import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import { Pagination } from '../src/components/Pagination/Pagination';
import { GamesContext } from '../src/context/GamesContext';
import { gamesData } from './mockData';

describe('Tests for the Pagination component:', () => {
  vi.mock('../contexts/GamesContext', () => ({
    __esModule: true,
    default: React.createContext({}),
  }));

  const mockValue = {
    currentPage: 2,
    gamesCount: 100,
    pageSize: 12,
    searchString: 'test',
    gamesList: gamesData,
    setGamesCount: vi.fn(),
    setCurrentPage: vi.fn(),
    setPageSize: vi.fn(),
    setGamesList: vi.fn(),
    setSearchString: vi.fn(),
  };
  it('Make sure the component updates URL query parameter when page changes', () => {
    render(
      <GamesContext.Provider value={mockValue}>
        <BrowserRouter>
          <Pagination />
        </BrowserRouter>
      </GamesContext.Provider>
    );
    const prevBtn = screen.getByTestId('prev');
    const nextBtn = screen.getByTestId('next');

    expect(prevBtn).toBeInTheDocument();
    expect(nextBtn).toBeInTheDocument();

    fireEvent.click(nextBtn);
    expect(global.window.location.href).toContain(
      `page=${mockValue.currentPage + 1}`
    );

    fireEvent.click(prevBtn);
    expect(global.window.location.href).toContain(
      `page=${mockValue.currentPage - 1}`
    );
  });
});
