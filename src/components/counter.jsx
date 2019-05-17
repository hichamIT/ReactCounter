import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span style={{ fontSize: 20 }} className={this.getBadge()}>
          {this.formatvalue()}
        </span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
        {/* {this.renderList()} */}
      </div>
    );
  }

  /*   increment = () => {
    this.setState({ value: this.props.counter.value + 1 });
  }; */

  /* renderList() {
    if (this.state.tag.length === 0) return "No tage to render";
    return (
      <ul>
        {this.state.tag.map(tag => (
          <li key={tag}>tag</li>
        ))}
      </ul>
    );
  } */

  getBadge() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatvalue() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
