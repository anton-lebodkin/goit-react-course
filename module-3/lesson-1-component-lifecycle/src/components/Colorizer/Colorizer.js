import React from "react";

import styled from "styled-components";

import "./Colorizer.css";

function getRandomHexColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

const StyledSquare = styled.div`
  background-color: #${getRandomHexColor()};
  box-shadow: 0px 0px 25px 0px #333;
  width: 242px;
  height: 242px;
  margin-bottom: 15px;
`;

class Colorizer extends React.Component {
  colorInputRef = React.createRef();
  squareRef = React.createRef();

  handleAdd = () => {
    if (this.props.isContactExist()) {
      return;
    } else {
      this.props.handleSubmit();
    }
  };

  handleBackgroundChange = (e) => {
    e.preventDefault();

    const color = this.inputRef.current.value;

    this.squareRef.current.style.background = color;

    this.inputRef.current.focus();
    this.inputRef.current.value = "";
  };

  isContactExist = (formdate) => {
    return this.state.contacts.find((elem) => elem.name === formdate.name);
  };

  render() {
    return (
      <div className="colorArea">
        <StyledSquare />

        <form
          onSubmit={this.handleBackgroundChange}
          isContactExist={this.isContactExist}
        >
          <input
            id="color-input"
            ref={this.colorInputRef}
            placeholder="Enter a color value"
          ></input>
          <button type="submit">go</button>
        </form>
      </div>
    );
  }
}

export default Colorizer;
