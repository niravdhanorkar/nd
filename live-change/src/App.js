import React, { Component } from 'react';

class MarkdownEditor extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      value: 'Type some *markdown* here!'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});    
  }


  render() {
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <textarea
          onChange={this.handleChange}
          defaultValue={this.state.value} />

        <h3>Output</h3>

        <div className="content" id="content">{this.state.value}</div>
      </div>
    );
  }
}
// ReactDOM.render(React.createElement(MarkdownEditor, null), mountNode);

export default MarkdownEditor;
