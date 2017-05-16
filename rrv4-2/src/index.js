//importing
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, 
  NavLink,
  Switch,
  Route,
  Prompt
} from 'react-router-dom';


//componet creation
class DemoRoute extends Component{
  render(){
    return(
      <BrowserRouter>
        <div>
          <Links  />
          <div className="col-sm-8">
            <MainContaint />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

const Links = () => {
  return(
     <div className="list-group col-sm-4">
        <NavLink exact className="list-group-item" activeClassName="active" to="/" >HOME</NavLink>
        <NavLink  className="list-group-item" activeClassName="active" to="/about" >ABOUT</NavLink>
        <NavLink  className="list-group-item" activeClassName="active" to="/career" >CAREER</NavLink>
        <NavLink className="list-group-item" activeClassName="active"  to="/contact" >CONTACT</NavLink>
        <NavLink className="list-group-item" activeClassName="active"  to="/nested" >Nested</NavLink>
      </div>
  )
}

const MainContaint = () => {
  return(
    <Switch>  
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/career' component={Career}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/nested' component={Nested}/>
      <Route render={()=>  <h1>Not Found</h1>} /> 
    </Switch>
  )
}


const Nested=() => {
  return(
    <div>
      <NavLink className="list-group-item" activeClassName="active"  to="/nested/city" >City</NavLink>
      <NavLink className="list-group-item" activeClassName="active"  to="/nested/sport" >Sport</NavLink>      
      <Route  path="/nested/:contentName" component={ContentDetails} />
    </div>
  ) 
}

const ContentDetails = (props) => {  

  let parameName = props.match.params.contentName;
  if(parameName === 'city'){
    return (
      <img alt='cityimage' src={'https://images.pexels.com/photos/2324/skyline-buildings-new-york-skyscrapers.jpg?h=350&auto=compress&cs=tinysrgb'} />
    )
  }else if(parameName === 'sport'){
      return (
      <img alt='cityimage' src={'http://www.mahurangi.school.nz/mahu2/img/Sport/academysm.jpg'} />
    )
  }else{
    return null;
  }  
}

const Home=() => {
  return <div>Home</div>;
}

const About=() => {
  return <div>About</div>;
}
const Career=() => {
  return <div>Career</div>;
}

class Contact extends Component {  
  constructor(props){
    super(props);
    this.state = {
      isUpdated :false
    }
    this.dataInputed = this.dataInputed.bind(this);
  }
  render(){
    return (  
      <div>
        <Prompt 
            when={this.state.isUpdated} 
            message="Are you sure you want to leave?" 
        />

        <div>
          <input type="text" onChange={this.dataInputed} />
        </div>
      </div>
    )
  }

  dataInputed(){
    this.setState({
      isUpdated:true
    });
  }
}

//render it to dom
ReactDOM.render(
  <DemoRoute />,
  document.getElementById("root")
);