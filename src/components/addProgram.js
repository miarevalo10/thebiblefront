import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router';


const ROOT_URL = "https://thebibleapp.herokuapp.com/api";


class AddProgram extends Component{

  constructor(props) {
   super(props);
   this.state = {
     programs:[],
     name: '',
     description: '',
     url: '',
   };
  //  this.addProgram = this.h.bind(this);
 }

 addProgram() {
   axios.post(ROOT_URL + "/programs", {
       name: this.state.name,
       description: this.state.description,
       url: this.state.url
   }).then(response => {
       console.log(this.state + "program added");
   })
 }



  render() {
    return (
          <div>
          Name:
          <input type="text" value={this.state.value} onChange={(event) => {
              this.setState({name: event.target.value})
          }} />

          Description:
          <input type="text" value={this.state.value} onChange={(event) => {
              this.setState({description: event.target.value})
          }} />

          URL:
          <input type="text" value={this.state.value} onChange={(event) => {
              this.setState({url: event.target.value})
          }}/>
        <button onClick={this.addProgram.bind(this)}>Save</button>
      <Link className="btn" to={'/programs' }>Go Back</Link>

      </div>

    );
  }
}

export default AddProgram;
