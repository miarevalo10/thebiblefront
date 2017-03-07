import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router';

// Maybe its better to extract this value to an Environment Variable?
// Just in case the backend is moved to another server or URL
const ROOT_URL = "https://thebibleapp.herokuapp.com/api";

class AddCourse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            url: '',
            code:''
        };
        //  this.addProgram = this.h.bind(this);
    }

    addCourse() {
        axios.post(ROOT_URL + "/programs/" + this.props.params.programId + "/courses", {
            name: this.state.name,
            description: this.state.description,
            url: this.state.url,
            code:this.state.code
        }).then(response => {
            console.log(this + "course added");
        })
        // After adding a course, the page should return to the main view, or display
        // a confirmation message.
    }

    render() {
        return (
          <div>
          <div className="form-group">
          <label className="control-label col-sm-2" for="nombre">Name:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={this.state.value} onChange={(event) => {
                  this.setState({name: event.target.value})
              }} />
            </div>
          </div>
          <div className="form-group">
          <label className="control-label col-sm-2" for="description">Description:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control"  value={this.state.value} onChange={(event) => {
                  this.setState({description: event.target.value})
              }} />
            </div>
          </div>
          <div className="form-group">
          <label className="control-label col-sm-2" for="url">URL:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control"  value={this.state.value} onChange={(event) => {
                  this.setState({url: event.target.value})
              }}/>
            </div>
          </div>
          <div className="form-group">
          <label className="control-label col-sm-2" for="url">Code:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control"  value={this.state.value} onChange={(event) => {
                  this.setState({code: event.target.value})
              }}/>
            </div>
          </div>
          <div className="form-group">
             <div className="col-sm-offset-2 col-sm-10">
               <div className="btn-group">
                  <button className="btn btn-success" onClick={this.addCourse.bind(this)}>Save</button>
                <Link className="btn btn-primary" to={'/programs/' + this.props.params.programId  +'/courses'}>Go Back</Link>
              </div>
            </div>
          </div>
      </div>

        );
    }
}

export default AddCourse;
