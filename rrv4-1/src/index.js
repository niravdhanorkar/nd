//importing
import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter ,
  Route,
  Link,
  Switch
} from 'react-router-dom'


const BasicExample = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>
      <Switch>  
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>        
      </Switch>

    </div>
  </BrowserRouter>
)

const Home = () => (
  <div>
    <h2>Home</h2>
    <Link to="/about">go to About</Link>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
    <Link to="/"> &lt; &lt; Back Home</Link>
    &nbsp;&nbsp;&nbsp;
    <Link to="/topics">Next topic &gt; &gt;</Link>
  </div>
)

const Topics = () => {
  return(
    <div>
      <h2>Topics</h2>
      <Link to="/about">&lt;&lt; Back About</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/"> Finish &gt;&gt;</Link>
    </div>
  )
}




//render it to dom
ReactDOM.render(
  <BasicExample />,
  document.getElementById("root")
);





















/*


const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

*/