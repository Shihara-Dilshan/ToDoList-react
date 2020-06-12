import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="row">
          <div className="col s8">
            <input
              type="text"
              name="title"
              placeholder="Add Todo..."
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <div style={buttonStyle} className="col s4">
            <button type="submit" className="btn grey darken-3">
              {" "}
              Submit{" "}
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const buttonStyle = {
  marginTop: "10px",
};

export default AddTodo;
