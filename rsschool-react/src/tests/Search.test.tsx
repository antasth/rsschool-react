import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Search } from '../components/Search/Search';
import { getFromLocalStorage } from '../utils';

const GAMES_KEY = 'searchString';

describe('Tests for the Search component:', () => {
  const getItemSpy = vi.spyOn(Storage.prototype, 'getItem');
  const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');

  afterEach(() => {
    localStorage.clear();
    getItemSpy.mockClear();
    setItemSpy.mockClear();
  });

  it('Verify that clicking the Search button saves the entered value to the local storage.', (): void => {
    render(<Search />);

    const button = screen.getByRole('button');
    const input: HTMLInputElement = screen.getByLabelText('search-input');
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'some test value' } });
    fireEvent.click(button);

    expect(getFromLocalStorage(GAMES_KEY)).toEqual(input.value);
  });

  it('Check that the component retrieves the value from the local storage upon mounting.', (): void => {
    render(<Search />);
    const input: HTMLInputElement = screen.getByLabelText('search-input');
    expect(getFromLocalStorage(GAMES_KEY)).toEqual(input.value);
  });
});
