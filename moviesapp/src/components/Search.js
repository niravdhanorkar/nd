import React, { Component } from "react";
import {
  Form,
  FormControl,
  FormGroup,
  ControlLabel,
  Button
} from "react-bootstrap";
import { API_KEY } from "../secrets";
import { movies } from "../actions";
import {connect} from 'react-redux';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }
  search() {
    console.log("Search button clicked", this.state.query);
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${this
      .state.query}&page=1&include_adult=false`;
    console.log(url);
    fetch(url, {
      method: "GET"
    })
      .then(response => response.json())
      .then(jsonObj => {this.props.movies(jsonObj.results)} );
  }
  render() {
    return (
      <div>
        <Form inline className="col-md-12 col-md-offset-4">
          <FormGroup>
            <ControlLabel>Search</ControlLabel>{" "}
            <FormControl
              type="text"
              placeholder="wonder woman"
              onChange={event => this.setState({ query: event.target.value })}
            />{" "}
            <Button bsStyle="success" onClick={() => this.search()}>
              Submit
            </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
export default connect(null,{movies})(Search);
