import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);

    this.state= {
      isToggleOn:false
    }    


     this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  
  render() {
    return (
    <section>        
        <button onClick={this.handleClick}  >
           {/*<button onMouseOut={this.handleClick}  >*/}
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
      </section>
    );
  }
}

export default App;
