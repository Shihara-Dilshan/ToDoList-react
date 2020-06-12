import React, { Component } from "react";
import Todoitems from "./Todoitems";

class Todos extends Component {
  state = {};
  render() {
    return this.props.todos.map((todo) => (
      <Todoitems key={todo.id} todo={todo} />
    ));
  }
}

export default Todos;
