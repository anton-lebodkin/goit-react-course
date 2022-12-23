import React from "react";

export class VisibleComponent extends React.Component {
  handleKeyDown = (e) => {
    console.log("Key down", e.keyCode);
    const expectedDate = Date.now() + 1000;
    while (Date.now() < expectedDate) {}
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return <div>Hello world</div>;
  }
}
