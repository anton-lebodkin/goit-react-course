import React from "react";
import { nanoid } from "nanoid";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";

const todoItem = {
  id: "12345",
  text: "Go to shop",
  status: "new",
};

const TODO_STATUS = {
  NEW: "new",
  DONE: "done",
};

class App extends React.Component {
  state = {
    todos: [],
  };

  addNewTodo = (todoValue) => {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: nanoid(), text: todoValue, status: TODO_STATUS.NEW },
      ],
    });
  };

  render() {
    return (
      <>
        <AddTodo onAddTodo={this.addNewTodo} />
        <TodoList todos={this.state.todos} />
      </>
    );
  }
}

export default App;
