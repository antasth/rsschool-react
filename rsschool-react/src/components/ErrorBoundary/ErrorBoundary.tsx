import { Component, ReactNode } from 'react';

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
      return <h1>Something went wrong</h1>;
    }

    return <>{this.props.children}</>;
  }
}

export { ErrorBoundary };
