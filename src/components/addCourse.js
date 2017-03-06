import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router';

const ROOT_URL = "https://thebibleapp.herokuapp.com/api";

class AddCourse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            url: '',
            codigo:''
        };
        //  this.addProgram = this.h.bind(this);
    }

    addCourse() {
        axios.post(ROOT_URL + "/programs/" + this.props.params.programId + "/courses", {
            name: this.state.name,
            description: this.state.description,
            url: this.state.url,
            codigo:this.state.codigo
        }).then(response => {
            console.log(this + "course added");
        })
    }

    render() {
        return (
            <div>
                Name:
                <input type="text" value={this.state.value} onChange={(event) => {
                    this.setState({name: event.target.value})
                }}/>

                Description:
                <input type="text" value={this.state.value} onChange={(event) => {
                    this.setState({description: event.target.value})
                }}/>

              Codigo:
                <input type="text" value={this.state.value} onChange={(event) => {
                    this.setState({codigo: event.target.value})
                }}/>

                URL:
                <input type="text" value={this.state.value} onChange={(event) => {
                    this.setState({url: event.target.value})
                }}/>
                <button onClick={this.addCourse.bind(this)}>Save</button>
            </div>

        );
    }
}

export default AddCourse;
