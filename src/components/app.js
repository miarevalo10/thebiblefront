import React, {Component} from 'react';
import axios from 'axios';
import Program from './program';
import Programs from './programs';
import {Link} from 'react-router';
import Navbar from './navbar';

const ROOT_URL = "https://thebibleapp.herokuapp.com/api";
// const ROOT_URL = "http://localhost:3000/api";

class App extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         programs: [],
    //         name: '',
    //         description: '',
    //         url: ''
    //     }


    render() {

        return (
          <div>
          {/* <div className="row">
            <Navbar/>
          </div> */}
            <Programs/>
                </div>



          )
    }
}

export default App;
