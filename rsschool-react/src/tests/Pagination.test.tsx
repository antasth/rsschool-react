import { createMemoryHistory } from '@remix-run/router';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { MainPage } from '../pages/MainPage/MainPage';
import { store } from '../store/store';

describe('Tests for the Pagination component:', () => {
  const route = '/';
  const history = createMemoryHistory();
  history.push(route);
  window.history.pushState({}, '', route);

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={route} element={<MainPage />} />
          <Route
            path="/games?page=2&search=page_size=12"
            element={<MainPage />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );

  it('Make sure the component updates URL query parameter when page changes', async () => {
    const nextButton = await screen.findByTestId('next');
    fireEvent.click(nextButton);
    expect(global.window.location.href).toContain('?page=2');

    const prevButton = await screen.findByTestId('prev');
    fireEvent.click(prevButton);
    expect(global.window.location.href).toContain('?page=1');
  });
});
