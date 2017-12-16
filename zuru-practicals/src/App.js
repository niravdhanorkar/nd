// two way binding
//

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      times: 0
    };
  }
  createList = event => {
    let times = event.target.value;
    this.setState({
      times
    });
  };

  getData = times => {
    let str = "";
    for (let i = 0; i < times; i++) {
      str += "<li key=" + i + ">input " + i + "</li>";
    }
    return <ul>{str}</ul>;
  };
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <input type="number" onChange={this.createList} />
          {this.getData(this.state.times)}
        </p>
      </div>
    );
  }
}
export default App;
