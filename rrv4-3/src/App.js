import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: 'react', done: false },
        { name: 'Angular', done: true }
      ],
      text: ''
    }
    this.addTask = this.addTask.bind(this);
    this.changeText = this.changeText.bind(this);
  }
  addTask(e) {
    e.preventDefault();
    this.state.items.push({
      name: this.state.text,
      done: false
    })
    this.state.text = '';
    this.setState({});
  }
  changeText(e) {
    this.setState({
      text: e.target.value
    })
  }
  render() {
    return (
      <div className='block'>
        <h3> Add To do list</h3>
        <ShowData items={this.state.items} />
        <form onSubmit={this.addTask}>
          <input type='text' onChange={this.changeText} value={this.state.text} />
          <input type='submit' value='Add Task' />
        </form>
      </div>
    )
  }
}
class ShowData extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.items.map(function(itm){
            return <li key={itm.name} className={itm.done} onClick={()=>itm.done = !itm.done}>{itm.name}</li>
          })
        }
      </ul>
    )
  }
}
// ReactDOM.render(<App />, document.getElementById('root'));

export default App;
