import './App.css';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { MainPage } from './pages/MainPage';

function App(): React.ReactElement {
  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <MainPage />;
    </ErrorBoundary>
  );
}

export default App;
