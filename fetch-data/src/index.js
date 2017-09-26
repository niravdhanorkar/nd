import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//components creationg
class FetchData extends Component{

  constructor(props){
    super(props);
    console.log("Constructor");
    this.state = {
      data:[]
    };
    this.addValue =  this.addValue.bind(this);
    this.removeValue = this.removeValue.bind(this);
  }

  componentWillMount(){
    console.log("CWM");
    
    fetch("https://rallycoding.herokuapp.com/api/music_albums")
    .then( (response) => {
      return response.json();           
    }).then((data) => {
      this.setState({
        data: data
      })
    })
  }

  addValue(){
    let obj = {
      artist:"nd",
      image:"https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
      thumbnail_image:"https://i.imgur.com/K3KJ3w4h.jpg",
      title:"nd",
      url:"https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6"
    }
    this.state.data.unshift(obj)  ;
    this.setState({});
  }

  removeValue(){
    this.state.data.shift();
    this.setState({});
  }

  render(){    
    console.log("Render");
    console.log(this.state.data);
    return (
      <div>      
      {        
         this.state.data.map((person, index) => {
            return  <p key={index}>Hello,id is {index} Name is {person.artist} from {person.title}!</p>
         })
      }
      {    <button onClick={this.addValue}>Add Task</button> }
      {    <button onClick={this.removeValue}>Remove Task</button> }

      
      </div>
    )
  }

  componentDidMount() {    
    console.log("CDM");
  }
}


ReactDOM.render(
  <FetchData />,
  document.getElementById('root')
);