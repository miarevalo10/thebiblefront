import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Router,Route,Link, hashHistory} from 'react-router';
import Programs from './components/programs';
import Courses from './components/courses';




ReactDOM.render(
  <Router history={hashHistory} >
    <Route path="/" component={App} />
    <Route path="/programs" component={Programs} />
  <Route path="/programs/:programId/courses" component={Courses}/>


  </Router>, document.querySelector('.container'));
