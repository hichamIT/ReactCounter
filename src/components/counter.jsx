import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span style={{ fontSize: 20 }} className={this.getBadge()}>
            {this.formatvalue()}
          </span>
        </div>
        <div className="col">
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => this.props.onIncrement(this.props.counter)}
          >
            +
          </button>
          <button
            className="btn btn-secondary btn-sm m-2"
            onClick={() => this.props.onDecrement(this.props.counter)}
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            className="btn btn-danger btn-sm "
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            Delete
          </button>
        </div>

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
