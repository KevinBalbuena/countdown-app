import React, { Component } from "react";
import "./App.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  getTimeUntil = deadline => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    this.setState({ days, hours, minutes, seconds });
  };

  leading0 = num => {
    return num < 10 ? "0" + num : num;
  };

  render() {
    const { days, hours, minutes, seconds } = this.state;
    return (
      <div>
        <div className="Clock-days">{this.leading0(days)} Days</div>
        <div className="Clock-hours">{this.leading0(hours)} Hours</div>
        <div className="Clock-minutes">{this.leading0(minutes)} Minutes</div>
        <div className="Clock-seconds">{this.leading0(seconds)} Seconds</div>
      </div>
    );
  }
}
export default Clock;
