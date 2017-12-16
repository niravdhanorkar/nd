// two way binding
// 

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "nirav"
    };
  }

  changeInputVal = (event) => {
    let value= event.target.value;
    this.setState({
      value
    });
  }

  changeValueByChild = (newValue) => {
    this.setState({
      value:newValue
    });
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <input
            type="text"
            value={this.state.value}
            onChange={this.changeInputVal}
          />
          <br />
          <Child
            inputVal={this.state.value}
            changeInputVal={this.changeValueByChild}
          />
        </p>
      </div>
    );
  }
}

class Child extends Component {

  setValueFunc = (event) => {
    let newVal = event.target.value;
    this.props.changeInputVal(newVal);
  };

  render() {
    return (
      <input
        type="text"
        value={this.props.inputVal}
        onChange={this.setValueFunc}
      />
    );
  }
}

export default App;
