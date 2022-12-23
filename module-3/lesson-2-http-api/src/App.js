import React from "react";
import "./App.css";

import FriendsPage from "./components/Friends/FriendsPage/FriendsPage";

export class App extends React.Component {
  state = {};

  componentDidMount = () => {};

  render() {
    return (
      <>
        <FriendsPage />
      </>
    );
  }
}

export default App;
