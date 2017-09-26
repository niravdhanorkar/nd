import React, { Component } from 'react';
import './App.css';
import ShowUser from './components/showuser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [
        { id: 1, name: 'Nirav', occupation: 'job' },
        { id: 2, name: 'Kunal', occupation: 'business' },
        { id: 3, name: 'Dharmik', occupation: 'job' },
        { id: 4, name: 'Divya', occupation: 'student' }
      ]
    };

  }

  checkClick(e, notyId) {
    alert(notyId);
  }

  render() {
    return <PopupOver func={this.checkClick} user='nd' key='11'  />
    // return (
    //   this.state.users.map(function(user, index){
    //     return <PopupOver func={this.checkClick} user={user} key={index}  />
    //   })      
    // )
  }
};

class PopupOver extends React.Component {

  constructor(props) {
    super(props);
    this.callFunc = this.callFunc.bind(this);
  }

  render() {

    let {user, key } = this.props;

    return (
      <div>
        <span onClick={this.callFunc} key={key}> {user} </span>
      </div>
    );
  }

  callFunc() {
    this.props.func(this, 'nirav');
  }

}

export default App;

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: [
//         { id: 1, name: 'Nirav', occupation: 'job' },
//         { id: 2, name: 'Kunal', occupation: 'business' },
//         { id: 3, name: 'Dharmik', occupation: 'job' },
//         { id: 4, name: 'Divya', occupation: 'student' }
//       ]
//     };
//     this.deleteUser = this.deleteUser.bind(this);
//   }

//   deleteUser(user) {

//     let localUser = this.state.users.filter(function (obj) {
//       return obj != user;
//     });
//     this.setState({
//       user: localUser
//     });
//   }

//   componentWillMount() {
//   }



//   render() {
//     return (
//       <ul>
//         {
//           this.state.users.map(function (obj, index) {
//             return <ShowUser user={obj} deleteUser={this.deleteUser} />
//           })
//         }
//       </ul>
//     );
//   }

//   componentDidMount() {
//     this.setState({
//       test: "test1"
//     });
//   }
// }

// export default App;