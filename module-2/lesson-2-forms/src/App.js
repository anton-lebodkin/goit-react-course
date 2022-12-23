import React from "react";
import "./App.css";
import CreateFriend from "./CreateFriend";
import { VisibleComponent } from "./VisibleComponent";

class App extends React.Component {
  state = {
    isVisible: false,
  };

  toggleVisible = () => {
    this.setState((prevState) => ({ isVisible: !prevState.isVisible }));
  };

  render() {
    console.log(this.state);
    return (
      <>
        {this.state.isVisible && <VisibleComponent />}
        <button onClick={this.toggleVisible}>Toggle</button>
      </>
    );
  }
}

export default App;
