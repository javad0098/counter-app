import { library } from "@fortawesome/fontawesome-svg-core";
import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 1,
    tags: ["number1", "number2", "number3", "number4", "number5"],
  };
  formatCount() {
    const { count } = this.state;
    return count ? this.state.count : "zero";
  }
  handleIncreament = () => {
    const count = this.state.count + 1;
    this.setState({ count });
  };
  handleDecreament = () => {
    const count = this.state.count - 1;
    this.setState({ count });
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.classess()}>{this.formatCount()}</span>
        <button
          onClick={this.handleDecreament}
          className="m-1 btn btn-danger btn-sm"
        >
          -
        </button>
        <button
          onClick={this.handleIncreament}
          className="m-1 btn btn-secondary btn-sm"
        >
          +
        </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>tag</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  classess() {
    let classes = "badge m-3  bg-";
    classes += this.state.count ? "primary" : "warning";
    return classes;
  }
}

export default Counter;
