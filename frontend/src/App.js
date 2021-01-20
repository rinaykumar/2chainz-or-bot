import React from 'react';
import './css/styles.css';
import './css/bootstrap.min.css';
import Header from './assets/img/header.jpg';
import Line from './assets/img/line.jpg';
import Timer from './assets/img/timer.gif';
import Timer2 from './assets/img/timer2.gif';
import { Modal } from 'react-bootstrap';
import Yup from './assets/img/yup2.gif';
import Nope from './assets/img/nope1.gif';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fakeLine: ' ',
      line1: 'Lorem ipsum dolor sit amet',
      line2:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit Aenean commo',
      correct: 0,
      total: 0,
      allLines: [' ', ' ', ' '],
      show: false,
      show2: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.showModal2 = this.showModal2.bind(this);
    this.hideModal2 = this.hideModal2.bind(this);
  }

  showModal() {
    this.setState({
      show: true,
    });
    document.getElementById('background').style.filter = 'blur(5px)';
  }

  hideModal() {
    this.setState({
      show: false,
    });
    document.getElementById('background').style.filter = 'blur(0)';
  }

  showModal2() {
    this.setState({
      show2: true,
    });
    document.getElementById('background').style.filter = 'blur(5px)';
  }

  hideModal2() {
    this.setState({
      show2: false,
    });
    document.getElementById('background').style.filter = 'blur(0)';
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

  handleStart = () => {
    document.getElementById('blurdiv').style.filter = 'blur(0)';
    document.getElementById('top-part').style.filter = 'blur(5px)';
    document.getElementById('start-button').style.visibility = 'hidden';
    //document.getElementById("skip-button").style.visibility = "visible";
    document.getElementById('lineBox').className += ' lineHover';
    document.getElementById('lineBox2').className += ' lineHover';
    document.getElementById('lineBox3').className += ' lineHover';
    this.getLines();
    //this.timerFunc();
  };

  timerFunc() {
    this.interval = setInterval(() => {
      this.getLines();
    }, 10000);
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

  componentDidMount() {
    this.getLines();
    this.render();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="background" id="background">
        <section className="text-center page title" id="top-part">
          <div className="d-flex d-lg-flex justify-content-center align-items-center justify-content-md-center align-items-md-center align-items-lg-center align-items-xl-center header-div">
            <img
              className="rounded-circle float-none header-img"
              src={Header}
              height="70px"
            />
            <h1>&nbsp;2CHAINZ OR NOT</h1>
          </div>
          <h2>2 lines are real 2Chainz lyrics</h2>
          <h2 className="fake">1 is fake from a bot&nbsp;</h2>
          <div>
            <p className="fake-line">Can you spot the fake line?</p>
          </div>
        </section>
        <div className="text-center blur-div" id="blurdiv">
          <section className="d-flex justify-content-center score">
            <div className="d-flex justify-content-between align-items-start align-items-md-start score-timer">
              {/* <div className="">
               <div
                className="progress-bar"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="10"
              >
                ROUND: 10
              </div>
               <p className="text-left d-flex justify-content-start score-text">
              &nbsp; &nbsp; ROUND: {this.state.total+1}
            </p>
              
            </div> */}
              {/* <img src={Timer2} /> */}

              <p className="text-left d-flex justify-content-start score-text">
                &nbsp; &nbsp; ROUND: {this.state.total + 1}
              </p>
              <p className="text-right d-flex justify-content-end align-items-md-center score-text">
                &nbsp; &nbsp; SCORE: {this.state.correct} CHAINZ
              </p>
            </div>
          </section>
          <section className="text-center d-flex float-none justify-content-center align-items-center lines">
            <div className="card text-center d-flex justify-content-center align-items-center align-content-center align-self-center">
              <div
                id="lineBox"
                className="d-flex align-items-center line1"
                onClick={() => this.counter(0)}
              >
                <img
                  className="rounded-circle d-flex justify-content-start"
                  src={Line}
                  height="72px"
                />
                <p className="text-left line-text">
                  "{this.state.allLines[0]}"
                </p>
              </div>
              <div
                id="lineBox2"
                className="d-flex align-items-center line1"
                onClick={() => this.counter(1)}
              >
                <img
                  className="rounded-circle d-flex justify-content-start"
                  src={Line}
                  height="72px"
                />
                <p className="text-left line-text">
                  "{this.state.allLines[1]}"
                </p>
              </div>
              <div
                id="lineBox3"
                className="d-flex align-items-center line1"
                onClick={() => this.counter(2)}
              >
                <img
                  className="rounded-circle d-flex justify-content-start"
                  src={Line}
                  height="72px"
                />
                <p className="text-left line-text">
                  "{this.state.allLines[2]}"
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="d-flex justify-content-center button-div">
          <button
            className="btn btn-dark btn-lg text-uppercase text-center rounded-pill"
            id="start-button"
            type="button"
            onClick={() => this.handleStart()}
          >
            START
          </button>
        </div>
        {/* About and Footer */}
        {/* <div className="about-text about dflex text-center">
        </div>
        <footer className="text-center footer">
          <p className="footer-text">
            ©&nbsp;2021 rinaykumar |&nbsp;
            <a href="https://github.com/rinaykumar/2chainz-or-not">GitHub</a>
          </p>
        </footer> */}

        <button
          bsStyle="success"
          className="btn-block"
          onClick={this.showModal}
        >
          Yup
        </button>

        <Modal show={this.state.show} onHide={this.hideModal} centered backdrop="static" keyboard={ false }>
          <Modal.Body centered>
            <div className="text-center d-flex float-none justify-content-center align-items-center align-content-center align-self-center">
              <img
                className="rounded-circle d-flex justify-content-start yupimg"
                src={Yup}
              />
              <h1 className="yup">YUP!</h1>
            </div>

            <br />

            <div className="text-center d-flex float-none justify-content-center align-items-center align-content-center align-self-center">
              <button
                className="btn btn-dark btn-lg text-uppercase text-center rounded-pill"
                id="next-button"
                type="button"
              >
                NEXT
              </button>
            </div>
          </Modal.Body>
        </Modal>


        <button
          bsStyle="success"
          className="btn-block"
          onClick={this.showModal2}
        >
          Nope
        </button>

        <Modal show={this.state.show2} onHide={this.hideModal2} centered backdrop="static" keyboard={ false }>
          <Modal.Body centered>
            <div className="text-center d-flex float-none justify-content-center align-items-center align-content-center align-self-center">
              <img
                className="rounded-circle d-flex justify-content-start yupimg"
                src={Nope}
              />
              <h1 className="yup">NOPE!</h1>
            </div>

            <br />

            <div className="text-center d-flex float-none justify-content-center align-items-center align-content-center align-self-center">
              <button
                className="btn btn-dark btn-lg text-uppercase text-center rounded-pill"
                id="next-button"
                type="button"
              >
                NEXT
              </button>
            </div>
          </Modal.Body>
        </Modal>




      </div>
    );
  }
}

export default App;
