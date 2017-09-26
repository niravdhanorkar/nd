//imporing
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

//component
class DataFetch2 extends Component{
    constructor(props){
        super(props);        
        this.state = {
            users : []
        }
    }

    componentDidMount(){
        $.ajax({
            url:"https://jsonplaceholder.typicode.com/users",
            method:"GET",
            success: (data) => {
                this.setState({ 
                    users : data
                });
            }
        });
    }

    render(){
        const {users} = this.state;
        return (
            <table >
                <tbody>{
                users.map((user) => {
                    return <tr key={user.id}> 
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>                    
                        <td>{user.website}</td>                    
                     </tr>
                } )
                }          
                </tbody>      
            </table>

        );

    }
}

//rendering to dom
ReactDOM.render( <DataFetch2 />, document.getElementById("root") );
