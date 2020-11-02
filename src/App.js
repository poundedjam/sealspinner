import React from "react";
import { CSSTransition } from "react-transition-group";
import ReactTimeout from "react-timeout";
import "./App.css";
import seal from "./seal.png";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Counter: 0,
      spining: false,
    };
    this.sealStop = this.sealStop.bind(this);
    this.Handlespin = this.Handlespin.bind(this)
  }

  sealStop = () => {
    console.log("spin spin")
    this.setState({
      spining: false,
    });
  };

  Handlespin(){
     this.setState({
       spining: !this.state.spining,
       Counter: this.state.Counter + 1,
     });
     setTimeout(() => {
       {this.sealStop()}
     }, 2000);
  }
  render() {
    return (
      <div className="app">
        <div className="SealSpineerHeader">
          <h1>Seal Spinner</h1>
          <hr></hr>
        </div>
        <p>{this.state.Counter}</p>
        <div className="bodyseal">
          <div className="Sel">
            <CSSTransition
              in={this.state.spining}
              timeout={60000}
              classNames="seal"
            >
              <div>
                {<img src={seal} alt="seal" onClick={() => this.Handlespin()} />}
                {console.log(this.state.spining)}
              </div>
            </CSSTransition>
          </div>
        </div>
      </div>
    );
  }
}

export default ReactTimeout(App);
