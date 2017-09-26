import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProfileDetails from './components/ProfileDetails';
import LoginDetails from './components/LoginDetails';
import ImageUpload from './components/ImageUpload';
import ShowAllInfo from './components/ShowAllInfo';
import Profile from './components/Profile'
import Home from './components/Home';

//declare all the route for application
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/login' component={Login} />
              <Route path="/profiledetails" component={ProfileDetails} />
              <Route path="/logindetails" component={LoginDetails} />
              <Route path="/imageupload" component={ImageUpload} />
              <Route path="/showallinfo" component={ShowAllInfo} />
              <Route path="/showprofile" component={Profile} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
