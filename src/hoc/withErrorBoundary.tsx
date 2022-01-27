import React, { Component, ComponentType, ComponentClass } from 'react';

interface State {
  hasError: boolean;
}

const withErrorBoundary = <T extends Record<string, never>>(
  WrappedComponent: ComponentType<T>
): ComponentClass<T, State> =>
  class ErrorBoundary extends Component<T, State> {
    constructor(props: T) {
      super(props);
      this.state = {
        hasError: false,
      };
    }

    static getDerivedStateFromError(error: Error) {
      // Update state so the next render will show the fallback UI.
      console.log(error);
      return { hasError: true };
    }

    render() {
      if (this.state.hasError) {
        return <p>Something Went Wrong</p>;
      }
      return <WrappedComponent {...this.props} />;
    }
  };

export default withErrorBoundary;
