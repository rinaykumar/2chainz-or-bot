import React, { Component, useState, useEffect } from 'react';
import './css/App.css';

import LineBox from './component/lineBox';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fakeLine: ' ',
      line1: ' ',
      line2: ' ',
      correct: 0,
      total: 0,
      allLines: [' ', ' ', ' '],
    };
  }

  componentDidMount() {
    this.getLines();
    this.render();
  }

  getLines() {
    fetch('/line')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ fakeLine: data.line });
        this.setAllLines();
      });
    this.render();
  }

  setAllLines() {
    let num = Math.floor(Math.random() * 3);

    fetch('/random')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ line1: data.random });
      });

    fetch('/random')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ line2: data.random });
      });

    if (num === 0) {
      this.setState({
        allLines: [this.state.fakeLine, this.state.line1, this.state.line2],
      });
    } else if (num === 1) {
      this.setState({
        allLines: [this.state.line1, this.state.fakeLine, this.state.line2],
      });
    } else if (num === 2) {
      this.setState({
        allLines: [this.state.line1, this.state.line2, this.state.fakeLine],
      });
    }
  }

  counter(value) {
    let tot = this.state.total + 1;

    if (this.state.allLines[value] === this.state.fakeLine) {
      let cor = this.state.correct + 1;
      this.setState({ correct: cor });
    }

    this.setState({ total: tot });
    this.getLines();
  }

  renderLineBox() {
    return (
      <div className="">
        <div onClick={() => this.counter(0)}>
          <LineBox text={this.state.allLines[0]} />
        </div>

        <div onClick={() => this.counter(1)}>
          <LineBox text={this.state.allLines[1]} />
        </div>

        <div onClick={() => this.counter(2)}>
          <LineBox text={this.state.allLines[2]} />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <div className="grid-container">
          <div className="">
            <div onClick={() => this.counter(0)}>
              <LineBox text={this.state.allLines[0]} />
            </div>
            <div onClick={() => this.counter(1)}>
              <LineBox text={this.state.allLines[1]} />
            </div>
            <div onClick={() => this.counter(2)}>
              <LineBox text={this.state.allLines[2]} />
            </div>
          </div>
          <div className="right-panel">
            <p>
              Correct: {this.state.correct}
              &nbsp;&nbsp;&nbsp; Total: {this.state.total}
            </p>
            <br></br>
            <button className="reload-button" onClick={() => this.getLines()}>
              {' '}
              Reload Lines{' '}
            </button>
            <hr></hr>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
