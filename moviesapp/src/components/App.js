import React, { Component } from "react";
import MoviesResults from "./MoviesResults";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <div className="jumbotron">
            <h1>Movies App</h1>
            <p> Who doesn't Love Movies ?</p>
          </div>
        </div>
        <div className="row">
          <MoviesResults />
        </div>
      </div>
    );
  }
}

export default App;
