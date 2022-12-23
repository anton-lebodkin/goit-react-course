import React from "react";

import { debounce } from "lodash";
const LOCAL_STORAGE_APP_STATE = "ls-demo-app-state";

class LocalStorageDemo extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  };

  componentDidMount() {
    const localStorageState = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_APP_STATE)
    );
    this.setState(localStorageState);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  autoSave = debounce(() => {
    localStorage.setItem(LOCAL_STORAGE_APP_STATE, JSON.stringify(this.state));
  }, 500);

  componentDidUpdate() {
    this.autoSave();
  }

  render() {
    console.log(this.state);

    return (
      <>
        <div>
          <label>First name</label>
          <input
            name="firstName"
            onChange={this.handleChange}
            value={this.state.firstName}
          />
        </div>

        <div>
          <label>Last name</label>
          <input
            name="lastName"
            onChange={this.handleChange}
            value={this.state.lastName}
          />
        </div>
      </>
    );
  }
}

export default LocalStorageDemo;
