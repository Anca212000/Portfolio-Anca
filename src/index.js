import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './App';
import ProjectPage from './ProjectPage';

ReactDOM.render(
    <Router basename="/Portfolio-Anca">
      <Link to="/" ></Link>
      <Route exact path='/' component={App} />
      <Route exact path='/:titleProject/:id' component={ProjectPage} />
    </Router>,
  document.getElementById('root')
);
