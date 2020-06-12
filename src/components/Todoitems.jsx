import React, { Component } from "react";

class Todoitems extends Component {
  getStyle = () => {
    return {
      backgroundColor: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    const { id, title } = this.props.todo;

    return (
      <div>
        <h6 style={this.getStyle()}>
          <label
            style={{ verticalAlign: "-7px" }}
            onChange={this.props.markComplete.bind(this, id)}
          >
            <input type="checkbox" />
            <span></span>
          </label>
          {title}{" "}
          <label
            style={{ float: "right", cursor: "pointer" }}
            onClick={this.props.delTodo.bind(this, id)}
          >
            <button className="btn red">x</button>
            <span></span>
          </label>
        </h6>
      </div>
    );
  }
}

export default Todoitems;
