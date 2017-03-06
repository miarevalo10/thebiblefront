import React, {Component} from 'react';
// import axios from 'axios';
// import Program from './program';
import {Link} from 'react-router';
import Program from './program';

const ROOT_URL = "https://thebibleapp.herokuapp.com/api";
// const ROOT_URL = "http://localhost:3000/api";

class Intro extends Component {
    
    /*
  * Hace un getall para traer todos los programas en la pagina inicial
  */
    render() {
        return (

            <div className="container-fluid">

              <h1>Welcome</h1>
              <hr />
              
              <h3><span><i className="fa fa-book"></i></span>This is the bible app. </h3>
              <p>This project is a web application designed to storage academic files. The files are organized by program and course from Universidad de los Andes.</p>
              <p>The bible app allow the users create or delete an Undergraduate Program, create a Course and upload a file of any type (pdf's, png's, zip's, etc). </p>
                <p>Also, the user can download any of the files listed by the app.</p>
                <p>Note: avoid uploading sensitive files. These files are stored in Amazon S3</p>

                <p>Click Sign in button below to use the web app.</p>

                <Link className="btn col-md-offset-4 col-xs-offset-4 col-md-4 col-xs-4" to={'/programs' }>
                  <i className="fa fa-sign-in fa-2x btn">
                    <span id="add">Sign in</span>
                  </i>
                </Link>
                
            </div>
          )
}
}

export default Intro;
