import * as React from "react";

class ComponentA extends React.Component {
  public render(): JSX.Element | null {
    return (
      <div>
        This should display the click count:
        <output data-testid="output"/>
      </div>
    );
  }
}

class ComponentB extends React.Component<unknown, { count?: number }> {
  public readonly state = {
    count: 0
  };

  public render(): JSX.Element | null {
    return (
      <button
        type="button"
        data-testid="input"
      >
        count: <span data-testid="input-client">{this.state.count}</span>
      </button>
    );
  }
}

export const ReactLift: React.FunctionComponent = () => {
  return (
    <>
      <ComponentA />
      <ComponentB />
    </>
  );
};
