import React from 'react';
import './css/styles.css';
import './css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
// Images
import Header from './assets/img/header.jpg';
import Yup from './assets/img/yup2.gif';
import Nope from './assets/img/nope2.gif';
import Line from './assets/img/line-img/line.jpg';
import Line2 from './assets/img/line-img/line2.jpeg';
import Line3 from './assets/img/line-img/line3.jpg';
import Line4 from './assets/img/line-img/line4.jpg';
import Line5 from './assets/img/line-img/line5.jpg';
import Line6 from './assets/img/line-img/line6.jpg';
import Line7 from './assets/img/line-img/line7.jpg';
import Line8 from './assets/img/line-img/line8.jpg';
import Line9 from './assets/img/line-img/line9.jpg';
import Line10 from './assets/img/line-img/line10.jpg';
import Line11 from './assets/img/line-img/line11.jpg';
import Line12 from './assets/img/line-img/line12.jpeg';
import Line13 from './assets/img/line-img/line13.jpg';
import Line14 from './assets/img/line-img/line14.jpg';
import Line15 from './assets/img/line-img/line15.jpg';
import Line16 from './assets/img/line-img/line16.jpeg';
import Line17 from './assets/img/line-img/line17.jpeg';
import Line18 from './assets/img/line-img/line18.jpg';
import Line19 from './assets/img/line-img/line19.jpg';
import Line20 from './assets/img/line-img/line20.jpg';
import Line21 from './assets/img/line-img/line21.jpg';
import Line22 from './assets/img/line-img/line22.jpg';
import Line23 from './assets/img/line-img/line23.jpg';
import Line24 from './assets/img/line-img/line24.jpg';
import Line25 from './assets/img/line-img/line25.png';
import Line26 from './assets/img/line-img/line26.jpeg';
import Line27 from './assets/img/line-img/line27.jpeg';
import Line28 from './assets/img/line-img/line28.jpeg';
import Line29 from './assets/img/line-img/line29.jpeg';
import Line30 from './assets/img/line-img/line30.jpeg';
import Akon from './assets/img/line-img/akon.jpg';
import Heart from './assets/img/heart.png';
import Chain from './assets/img/chain.png';

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
      show3: false,
      lineImg1: Line,
      lineImg2: Line2,
      lineImg3: Line3,
      lives: 100,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.showModal2 = this.showModal2.bind(this);
    this.hideModal2 = this.hideModal2.bind(this);
    this.showModal3 = this.showModal3.bind(this);
    this.hideModal3 = this.hideModal3.bind(this);
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
    this.setState({ lives: this.state.lives - 25 });
    switch (this.state.lives) {
      case 100:
        document.getElementById('heart4').src = '';
        break;
      case 75:
        document.getElementById('heart3').src = '';
        break;
      case 50:
        document.getElementById('heart2').src = '';
        break;
      default:
        break;  
    }
  }

  hideModal2() {
    this.setState({
      show2: false,
    });
    document.getElementById('background').style.filter = 'blur(0)';
  }

  showModal3() {
    this.setState({ lives: 0 });
    document.getElementById('heart1').src = '';
    this.setState({
      show3: true,
    });
    document.getElementById('background').style.filter = 'blur(5px)';
  }

  hideModal3() {
    this.setState({
      show3: false,
    });
    document.getElementById('background').style.filter = 'blur(0)';
  }

  handleNext() {
    this.hideModal();
    this.hideModal2();
    this.hideModal3();
    this.getLines();
  }

  handleAgain() {
    this.hideModal();
    this.hideModal2();
    this.hideModal3();
    this.setState({
      lives: 100,
      correct: 0,
    });
    document.getElementById('heart1').src = Heart;
    document.getElementById('heart2').src = Heart;
    document.getElementById('heart3').src = Heart;
    document.getElementById('heart4').src = Heart;
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
    document.getElementById('start-button').style.visibility = 'hidden';
    document.getElementById('lineBox').className += ' lineHover';
    document.getElementById('lineBox2').className += ' lineHover';
    document.getElementById('lineBox3').className += ' lineHover';
    this.getLines();
  };

  setLineImg1() {
    let num = Math.floor(Math.random() * 10);
    num++;
    switch (num) {
      case 1:
        this.setState({ lineImg1: Line });
        break;
      case 2:
        this.setState({ lineImg1: Line2 });
        break;
      case 3:
        this.setState({ lineImg1: Line3 });
        break;
      case 4:
        this.setState({ lineImg1: Line4 });
        break;
      case 5:
        this.setState({ lineImg1: Line5 });
        break;
      case 6:
        this.setState({ lineImg1: Line6 });
        break;
      case 7:
        this.setState({ lineImg1: Line7 });
        break;
      case 8:
        this.setState({ lineImg1: Line8 });
        break;
      case 9:
        this.setState({ lineImg1: Line9 });
        break;
      default:
        this.setState({ lineImg1: Line10 });
        break;
    }
  }

  setLineImg2() {
    let num = Math.floor(Math.random() * 10);
    num++;
    switch (num) {
      case 1:
        this.setState({ lineImg2: Line11 });
        break;
      case 2:
        this.setState({ lineImg2: Line12 });
        break;
      case 3:
        this.setState({ lineImg2: Line13 });
        break;
      case 4:
        this.setState({ lineImg2: Line14 });
        break;
      case 5:
        this.setState({ lineImg2: Line15 });
        break;
      case 6:
        this.setState({ lineImg2: Line16 });
        break;
      case 7:
        this.setState({ lineImg2: Line17 });
        break;
      case 8:
        this.setState({ lineImg2: Line18 });
        break;
      case 9:
        this.setState({ lineImg2: Line19 });
        break;
      default:
        this.setState({ lineImg2: Line20 });
    }
  }

  setLineImg3() {
    let num = Math.floor(Math.random() * 10);
    num++;
    switch (num) {
      case 1:
        this.setState({ lineImg3: Line21 });
        break;
      case 2:
        this.setState({ lineImg3: Line22 });
        break;
      case 3:
        this.setState({ lineImg3: Line23 });
        break;
      case 4:
        this.setState({ lineImg3: Line24 });
        break;
      case 5:
        this.setState({ lineImg3: Line25 });
        break;
      case 6:
        this.setState({ lineImg3: Line26 });
        break;
      case 7:
        this.setState({ lineImg3: Line27 });
        break;
      case 8:
        this.setState({ lineImg3: Line28 });
        break;  
      case 9:
        this.setState({ lineImg3: Line29 });
        break;
      default:
        this.setState({ lineImg3: Line30 });
        break;
    }
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

    if (this.state.total === 2) {
      this.setState({
        allLines: [
          'Chain the color of Akon',
          this.state.fakeLine,
          this.state.line2,
        ],
        lineImg1: Akon,
      });
    } else {
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

    if (this.state.total !== 2) {
      this.setLineImg1();
    }
    this.setLineImg2();
    this.setLineImg3();

    console.log('Fake: ' + this.state.fakeLine);
  }

  counter(value) {
    let tot = this.state.total + 1;

    if (this.state.allLines[value] === this.state.fakeLine) {
      let cor = this.state.correct + 1;
      this.setState({ correct: cor });
      this.showModal();
    } else {
      console.log('Lives: ' + this.state.lives);
      if (this.state.lives === 25) {
        this.showModal3();
      } else {
        this.showModal2();
      }
    }

    this.setState({ total: tot });
    this.getLines();
  }

  componentDidMount() {
    this.getLines();
    this.render();
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
              alt=""
            />
            <h1>&nbsp;2CHAINZ OR NOT</h1>
          </div>
          <h2>2 lines are real 2Chainz lyrics</h2>
          <h2 className="fake">1 is fake from a bot&nbsp;</h2>
          <div>
            <p className="fake-line">Can you spot the fake line?</p>
          </div>
        </section>
        <div className="outer-div text-center">
          <button
            className="btn btn-dark btn-lg text-uppercase text-center rounded-pill"
            id="start-button"
            type="button"
            onClick={() => this.handleStart()}
          >
            START
          </button>
          <div className="text-center blur-div" id="blurdiv">
            <section className="d-flex justify-content-center score">
              <div className="d-flex justify-content-between align-items-start align-items-md-start score-timer">
                <div className="d-flex align-items-start heartdiv">
                  <img id="heart1" src={Heart} className="heartimg" alt=""/>
                  <img id="heart2" src={Heart} className="heartimg" alt=""/>
                  <img id="heart3" src={Heart} className="heartimg" alt=""/>
                  <img id="heart4" src={Heart} className="heartimg" alt=""/>
                </div>
                <p className="score-text">
                {this.state.correct} <img src={Chain} className="chainimg" alt=""/>
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
                    src={this.state.lineImg1}
                    height="70px"
                    alt=""
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
                    src={this.state.lineImg2}
                    height="70px"
                    alt=""
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
                    src={this.state.lineImg3}
                    height="70px"
                    alt=""
                  />
                  <p className="text-left line-text">
                    "{this.state.allLines[2]}"
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Modal
          show={this.state.show}
          onHide={this.hideModal}
          centered
          backdrop="static"
          keyboard={false}
        >
          <Modal.Body centered="true">
            <div className="text-center d-flex float-none justify-content-center align-items-center align-content-center align-self-center">
              <img
                className="rounded-circle d-flex justify-content-start yupimg"
                src={Yup}
                alt=""
              />
              <h1 className="yup">YUP!</h1>
            </div>
            <br />
            <div className="text-center d-flex float-none justify-content-center align-items-center align-content-center align-self-center">
              <button
                className="btn btn-dark btn-lg text-uppercase text-center rounded-pill"
                id="next-button"
                type="button"
                onClick={() => this.handleNext()}
              >
                NEXT
              </button>
            </div>
          </Modal.Body>
        </Modal>
        <Modal
          show={this.state.show2}
          onHide={this.hideModal2}
          centered
          backdrop="static"
          keyboard={false}
        >
          <Modal.Body centered="true">
            <div className="text-center d-flex float-none justify-content-center align-items-center align-content-center align-self-center">
              <img
                className="rounded-circle d-flex justify-content-start yupimg"
                src={Nope}
                alt=""
              />
              <h1 className="yup">NOPE!</h1>
            </div>
            <br />
            <div className="text-center d-flex float-none justify-content-center align-items-center align-content-center align-self-center">
              <button
                className="btn btn-dark btn-lg text-uppercase text-center rounded-pill"
                id="next-button"
                type="button"
                onClick={() => this.handleNext()}
              >
                NEXT
              </button>
            </div>
          </Modal.Body>
        </Modal>
        <Modal
          show={this.state.show3}
          onHide={this.hideModal3}
          centered
          backdrop="static"
          keyboard={false}
        >
          <Modal.Body centered="true">
            <div className="text-center d-flex float-none justify-content-center align-items-center align-content-center align-self-center">
              <h1 className="gameover">GAME OVER</h1>
            </div>
            <br />
            <div className="text-center d-flex float-none justify-content-center align-items-center align-content-center align-self-center">
              <button
                className="btn btn-dark btn-lg text-uppercase text-center rounded-pill"
                id="next-button"
                type="button"
                onClick={() => this.handleAgain()}
              >
                PLAY AGAIN
              </button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default App;
