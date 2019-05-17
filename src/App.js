import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 0, value: 4 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 }
    ]
  };

  handelDelete = counterId => {
    const counter = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counter });
  };

  onIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handelReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCount={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="App">
          <Counters
            counters={this.state.counters}
            handelDelete={this.handelDelete}
            onIncrement={this.onIncrement}
            handelReset={this.handelReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
