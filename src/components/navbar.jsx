import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCount}
          </span>
        </a>
      </nav>
    );
  }
}

export default Navbar;
