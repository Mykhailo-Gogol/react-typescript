import React, { Component } from "react";

type TCounterState = {
  count: number;
};
type TCounterProps = {
  readonly title: string;
};

class AppClass extends Component<TCounterProps, TCounterState> {
  constructor(props: TCounterProps) {
    super(props);

    this.state = { count: 0 };
  }

  static defaultProps: TCounterProps = { title: "Default string" };

  // static getDerivedStateFromProps(
  //   props: TCounterProps,
  //   state: TCounterState
  // ): TCounterState | null {
  //   return true ? { count: 2 } : null;
  // }

  componentDidMount(): void {}

  shouldComponentUpdate(
    nextProps: TCounterProps,
    nextState: TCounterState
  ): boolean {
    return true;
  }

  handleClick = () => {
    this.setState(({ count }) => ({
      count: ++count,
    }));
  };

  render() {
    return (
      <section>
        <h1>{this.state.count}</h1>
        <button
          onClick={this.handleClick}
        >{`Increment ${this.props.title}`}</button>
      </section>
    );
  }
}

export default AppClass;
