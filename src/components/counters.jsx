import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { handelReset, handelDelete, onIncrement } = this.props;
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.handelReset}
        >
          Reset
        </button>
        {this.props.counters.map(count => (
          <Counter
            key={count.id}
            counter={count}
            onDelete={this.props.handelDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
