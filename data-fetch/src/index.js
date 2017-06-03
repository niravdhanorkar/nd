//importing
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

//component
class DataFetch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        var root = 'https://jsonplaceholder.typicode.com';
        $.ajax({
            url: root + '/users',
            method: 'GET',
            success:(data) => {
                this.setState({
                    users:data
                })
            }
        });
    }

    render() {
        const {users} = this.state;
        return (
            <ul>
                {
                    users.map( (user) => {
                        return <li>{user.name}</li>
                    })
                }
            </ul>        
        )
    }
};

//rendering component
ReactDOM.render(
  <DataFetch />,
  document.getElementById('root')
)