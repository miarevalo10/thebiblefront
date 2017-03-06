import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Router,Route,Link, hashHistory, IndexRoute} from 'react-router';
import Programs from './components/programs';
import Courses from './components/courses';
import Home from './components/home';
import Files from './components/files';
import AddFile from './components/addFile';





ReactDOM.render(
  <Router history={hashHistory} >
    {/* <Route path="/" component={App}/>
    <Route path="/programs" component={Programs} />
    <Route path="/programs/:programId/courses" component={Courses}/> */}
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='programs/:programId/courses' component={Courses}/>
      <Route path='programs/:programId/courses/:courseId/files' component={Files}/>
      <Route path='programs/:programId/courses/:courseId' component={AddFile}/>

    </Route>




  </Router>, document.querySelector('.container'));
