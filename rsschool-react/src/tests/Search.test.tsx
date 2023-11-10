import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Search } from '../components/Search/Search';

describe('Tests for the Search component:', () => {
  render(<Search />);
  const input = screen.getByLabelText('search-input');

  it('Shoud Search component correctly '),
    (): void => {
      expect(input).toBeInTheDocument();
    };
});
