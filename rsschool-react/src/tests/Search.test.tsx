import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import { Search } from '../components/Search/Search';

describe('Render Header component', () => {
  it('Shoud render Header component correctly'),
    (): void => {
      const setCurrentPageMock = (): void => {
        1;
      };

      render(
        <BrowserRouter>
          <Search setCurrentPage={setCurrentPageMock} />
        </BrowserRouter>
      );
    };
});
