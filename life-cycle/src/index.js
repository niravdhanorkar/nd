import React from 'react';
import ReactDOM from 'react-dom';

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date : new Date(),
      updated : true
    };
  //  this.changePlay =  this.changePlay.bind(this);
  }

  componentWillMount(){
    console.log("componentWillMount");
  }

//should not call in initial time but then after everytime it calls...
  shouldComponentUpdate(){ 
    if(this.state.updated)   
      return true;
      
    return false;
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );        
    console.log("componentDidMount");
  }

  componentWillUnmount() {
     clearInterval(this.timerID);
  }
 
  // componentWillReceiveProps(newProps){
  //   console.log("CWRP");    
  //   console.log(this.state);    
  //   console.log(newProps);    
  // }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  changePlay(){
    this.setState({
      updated: !this.state.updated
    })
  }

  render() {
    console.log("rendering...");
    return (
      <div>
        <h1>Hello, world!</h1>        
        <FormattedDate date={this.state.date} />
        <button onClick={this.changePlay}> Play/Stop </button>
      </div>
    );
  }
}


ReactDOM.render(
  <Clock />,
  document.getElementById('root')  
);