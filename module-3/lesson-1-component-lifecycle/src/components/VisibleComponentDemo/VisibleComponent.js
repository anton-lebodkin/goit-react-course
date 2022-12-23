import React from "react";

class VisibleComponent extends React.Component {
  handleKeyDown = (e) => {
    console.log(e.key);
    const targetDate = Date.now() + 500;
    while (Date.now() < targetDate) {}
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return <>Hello world</>;
  }
}

export default VisibleComponent;
