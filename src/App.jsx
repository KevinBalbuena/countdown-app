import React, { Component } from "react";
import Clock from "./Clock";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "January 1, 2020",
      newDeadline: ""
    };
  }

  changeDeadline = () => {
    this.setState({ deadline: this.state.newDeadline });
  };

  render() {
    const { deadline } = this.state;
    return (
      <div className="App">
        <div className="App-title">Countdown to {deadline}</div>
        <Clock deadline={deadline} />
        <div>
          <input
            className="date-input"
            type="text"
            placeholder="Add New Date . . . "
            onChange={e => this.setState({ newDeadline: e.target.value })}
          />
          <button className="btn" onClick={() => this.changeDeadline()}>
            Add
          </button>
        </div>
      </div>
    );
  }
}
export default App;
