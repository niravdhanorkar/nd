//importing
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


//component Creation
class PropTypeString extends Component{

  render(){
    return <div>{this.props.name}</div>;
  }  

}

PropTypeString.propTypes = {
    name: PropTypes.string.isRequired,
    obj: PropTypes.object,
    objArr : PropTypes.array
};

//Rendering
ReactDOM.render(
    // <PropTypeDemo />,
    <PropTypeString id={"11"} name={"nirav"} obj={{a:1,b:'22'}} objArr={[1,2,3]}  />,
     document.getElementById("root")
);


