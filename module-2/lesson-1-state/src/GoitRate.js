import React from "react";

class StudentNameInput extends React.Component {
  render() {
    return (
      <input
        name="studentName"
        value={this.props.studentName}
        onChange={(e) => this.props.onStudentNameChange(e.target.value)}
      />
    );
  }
}

class FavouriteSubjectInput extends React.Component {
  render() {
    return (
      <input
        name="favouriteSubject"
        onChange={(e) => this.props.onFavouriteSubjectChange(e.target.value)}
        value={this.props.favouriteSubject}
      />
    );
  }
}

class DisplayResults extends React.Component {
  render() {
    return (
      <p>
        Hello {this.props.studentName}. So good, so far in GoIT with{" "}
        {this.props.favouriteSubject}!
      </p>
    );
  }
}

export class App extends React.Component {
  constructor() {
    super();

    this.state = {
      studentName: "Anton",
      favouriteSubject: "JavaScript",
    };
  }

  setStudentName = (studentName) => {
    this.setState({ ...this.state, studentName });
  };

  setFavouriteSubject = (favouriteSubject) => {
    this.setState({ ...this.state, favouriteSubject });
  };

  render() {
    return (
      <>
        <StudentNameInput
          studentName={this.state.studentName}
          onStudentNameChange={this.setStudentName}
        />
        <FavouriteSubjectInput
          favouriteSubject={this.state.favouriteSubject}
          onFavouriteSubjectChange={this.setFavouriteSubject}
        />
        <DisplayResults
          studentName={this.state.studentName}
          favouriteSubject={this.state.favouriteSubject}
        />
      </>
    );
  }
}
