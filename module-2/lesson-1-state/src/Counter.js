import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  decrement = () => {
    this.setState((prevState) => {
      return { count: prevState.count - 1 };
    });
  };

  render() {
    return (
      <>
        <button type="button" onClick={this.increment}>
          +
        </button>
        <button type="button" onClick={this.decrement}>
          -
        </button>
        <p>{this.state.count}</p>
      </>
    );
  }
}

export default App;
