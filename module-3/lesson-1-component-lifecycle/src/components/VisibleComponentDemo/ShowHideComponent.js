import React from "react";
import VisibleComponent from "./VisibleComponent";

class ShowHideComponent extends React.Component {
  state = {
    isVisible: false,
  };

  handleToggle = () => {
    this.setState((prevState) => ({ isVisible: !prevState.isVisible }));
  };

  render() {
    return (
      <>
        <button onClick={this.handleToggle}>Toggle</button>
        {this.state.isVisible && <VisibleComponent />}
      </>
    );
  }
}

export default ShowHideComponent;
