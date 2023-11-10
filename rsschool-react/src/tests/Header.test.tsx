import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import { Header } from '../components/Header/Header';

describe('Render Header component', () => {
  it('Shoud render Header component correctly'),
    (): void => {
      const setCurrentPageMock = (): void => {
        1;
      };

      render(
        <BrowserRouter>
          <Header setCurrentPage={setCurrentPageMock} />
        </BrowserRouter>
      );
    };
});
