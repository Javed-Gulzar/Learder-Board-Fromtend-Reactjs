import React, { Component } from "react";
import "./student.css";

class Student extends Component {
  constructor() {
    super();
    this.state = {
      score: 0
    };
  }

  componentDidMount() {
    this.setState({
      score: this.props.score
    });
  }

  addScore() {
    this.setState({
      score: this.state.score + 1
    });
  }
  minusScore() {
    this.setState({
      score: this.state.score - 1
    });
  }

  render() {
    return (
      <div className="student">
        <div className="left">
          <h3>
            {this.props.name}
            <button className="addScorebtn" onClick={() => this.addScore()}>
              +
            </button>{" "}
            <button className="minusScorebtn" onClick={() => this.minusScore()}>
              -
            </button>
          </h3>
          <p>{this.props.university}</p>
        </div>
        <div className="right">
          <h3>{this.state.score}</h3>
        </div>
      </div>
    );
  }
}

export default Student;
