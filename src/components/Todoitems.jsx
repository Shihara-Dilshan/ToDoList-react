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

  markComplete = (e) => {};

  render() {
    return (
      <div>
        <h6 style={this.getStyle()}>
          <label style={{ verticalAlign: "-7px" }} onChange={this.markComplete}>
            <input type="checkbox" />
            <span></span>
          </label>
          {this.props.todo.title}{" "}
        </h6>
      </div>
    );
  }
}

export default Todoitems;
