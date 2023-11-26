import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import { store } from '@/store/store';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </Provider>
  );
}
