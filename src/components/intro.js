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
                <div className="text-center"><i className="fa fa-fw fa-5x fa-book"></i></div>
              <h1 className="text-center">Welcome</h1>
              <hr />
              <div className="text-justified">
              <h3>This is the bible app. </h3>
              <p>This project is a web application designed to storage academic files. The files are organized by program and course from Universidad de los Andes.</p>
              <p>The bible app allow the users create or delete an Undergraduate Program, create a Course and upload a file of any type (pdf's, png's, zip's, etc). </p>
                <p>Also, the user can download any of the files listed by the app.</p>
                <p>Note: avoid uploading sensitive files. These files are stored in Amazon S3</p>

                <p>Click Sign in button below to use the web app.</p>
                </div>
                <div className="text-center">
                <Link className="" to={'/programs' }>
                  <i className="fa fa-sign-in fa-2x btn text-center">
                    <span id="add">Sign in</span>
                  </i>
                </Link>
                </div>
            </div>
          )
}
}

export default Intro;
