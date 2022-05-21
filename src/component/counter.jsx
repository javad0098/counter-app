import { counter, library } from "@fortawesome/fontawesome-svg-core";
import React, { Component } from "react";
class Counter extends Component {
  formatCount() {
    return this.props.counter.value ? this.props.counter.value : "zero";
  }

  render() {
    return (
      <div>
        <span className={this.classess()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onHandleDecreament(this.props.counter)}
          className="m-1 btn btn-warning btn-sm"
        >
          -
        </button>
        <button
          onClick={() => this.props.onHandleIncreament(this.props.counter)}
          className="m-1 btn btn-secondary btn-sm"
        >
          +
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="m-1 btn btn-danger btn-sm"
        >
          Big Fat Delete
        </button>
      </div>
    );
  }

  classess() {
    let classes = "badge m-3  bg-";
    classes += this.props.counter.value ? "primary" : "warning";
    return classes;
  }
}

export default Counter;
