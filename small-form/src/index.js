import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class FormDemo extends React.Component {
  constructor(props) {
    super(props);

    //default state
    this.state = {
      name:"",
      email:"",
      password:'',
      gen:'f',
      role:'admin',
      address:'',
      noOfUsers:20,
      remember:true
    };
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitForm =  this.submitForm.bind(this);
  }

  handleInputChange(event) {
      const target = event.target;
      const value = (target.type === 'checkbox') ? target.checked : target.value;
      const name = target.name;

    //ES6
       this.setState({
         [name]: value
       });
  }

  submitForm(e){
    console.log(this.state);
    e.preventDefault();
  }

  render() {

    return (
  <div className="container">
    <h4> Sign-up Form </h4>
      <form onSubmit={this.submitForm} className="form-horizontal">
          
          <div className="form-group">
            <label className="control-label col-sm-2" >Full Name:</label>
            <div className="col-sm-10">
              <input
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleInputChange} />
            </div>          
          </div>


          <div className="form-group">
            <label className="control-label col-sm-2" >Email Address:</label>
            <div className="col-sm-10">
            <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleInputChange} />  
            </div>          
          </div>
          

          <div className="form-group">
            <label className="control-label col-sm-2" >Password:</label>
            <div className="col-sm-10">
            <input
              name='password'
              type="password"
              checked={this.state.password}
              onChange={this.handleInputChange} />
            </div>          
          </div>

          
          <div className="form-group">
            <label className="control-label col-sm-2" >Gender:</label>
            <div className="col-sm-10">
              <input type='radio' checked={this.state.gen==='m'} name='gen' value='m'  onChange={this.handleInputChange} /> Male
              <input type='radio' checked={this.state.gen==='f'} name='gen' value='f'  onChange={this.handleInputChange} /> Female           
            </div>          
          </div>


          <div className="form-group">
            <label className="control-label col-sm-2" >Role:</label>
            <div className="col-sm-10">
              <select name='role' value={this.state.role} onChange={this.handleInputChange}>
                <option value="admin">Admin</option>
                <option value="designer">Designer</option>
                <option value="developer">Developer</option>
              </select>
            </div>          
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2" >Address:</label>
            <div className="col-sm-10">
            <textarea
              name="address"
              value={this.state.address}
              onChange={this.handleInputChange} rows='10' />
            </div>          
          </div>



          <div className="form-group">
            <label className="control-label col-sm-2" >No Of Users:</label>
            <div className="col-sm-10">
            <input
              name="noOfUsers"
              type="number"
              value={this.state.noOfUsers}
              onChange={this.handleInputChange} />
            </div>          
          </div>


          <div className="form-group">  
            <div className="col-sm-2">&nbsp;</div>          
            <div className="col-sm-10">
            <input
              name="remember"
              type="checkbox"
              checked={this.state.remember}
              onChange={this.handleInputChange} />
              Remember
            </div>          
          </div>

        <div className="form-group">        
              <div className="col-sm-offset-2 col-sm-10">
                  <input type='submit' value='submit' />        
              </div>
        </div>

      </form>
    </div>
    );
  }
}

ReactDOM.render(
  <FormDemo />,
  document.getElementById('root')
);

