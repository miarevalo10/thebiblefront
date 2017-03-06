import React, {Component} from 'react';
import axios from 'axios';
import Program from './program';
import Programs from './programs';
import {Link} from 'react-router';
import Navbarfix from './navbarfix';

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
          <div className='row'>
          <Navbarfix/>
          </div>
        <div className='row'>
          <div className='col-md-1'>
          </div>
          <div className='col-md-9'>
            {React.cloneElement(this.props.children, {...this.state})}
          </div>
          <div className='col-md-1'></div>
          </div>
      </div>



          )
    }
}

export default App;
