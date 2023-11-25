import { Component, ReactNode } from 'react';
import styles from './ErrorBoundary.module.css';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  componentDidCatch = (): void => {
    this.setState({ hasError: true });
  };

  render(): React.ReactElement {
    if (this.state.hasError) {
      return <h1 className={styles.error}>Something went wrong</h1>;
    }

    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;
