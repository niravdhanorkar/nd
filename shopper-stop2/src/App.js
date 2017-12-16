import React, { Component } from 'react';
import './App.css';
import Grocery from './components/Grocery'
import Bag from './components/Bag';
import Stats from './components/Stats';
import PocketMoney from './components/PocketMoney';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header text-center">
          <h1>Shopper Stop</h1>
          <p className="App-intro">Your needs end here</p>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <PocketMoney />
            </div>
          </div>
          <br/>
          <div className='row'>
            <div className='col-md-4'>
              <Grocery />
            </div>
            <div className='col-md-4'>
              <Bag />
            </div>
            <div className='col-md-4'>
              <Stats />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
