import React, {Component} from 'react';
import axios from 'axios';
import Program from './program';
import {Link} from 'react-router';

const ROOT_URL = "https://thebibleapp.herokuapp.com/api";
// const ROOT_URL = "http://localhost:3000/api";

class Programs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            programs: [],
            name: '',
            description: '',
            url: '',
            _id: ''
        }
    }
    /*
  * Hace un getall para traer todos los programas en la pagina inicial
  */
    componentDidMount() {
        console.log(ROOT_URL + "/programs");
        axios.get(ROOT_URL + "/programs").then(response => {
            this.setState({programs: response.data})
        })
    }

    getPrograms() {
        console.log(ROOT_URL + "/programs");
        axios.get(ROOT_URL + "/programs").then(response => {
            this.setState({programs: response.data})
            // console.log("la respuesta" + response.data[0].name);
        })
    };

    render() {
        return (

            <div className="container-fluid">

              <h1>Programs</h1>
              <hr />
              <div className="row">
                <div className="col-sm-12">
                  <ol className="breadcrumb">
                    <li className="active">
                      Programs
                    </li>
                    
                  </ol>
                </div>
              </div>
                <Link className="btn" to={'/programs/add' }>
                  <i className="fa fa-plus fa-2x btn">
                    <span id="add">Add Program</span>
                  </i>
                </Link>
                <div className="row">
                    {this.state.programs.map(program => {
                        return <Program key={program._id} program={program}/>
                    })}

                </div>
            </div>
          )
}
}

export default Programs;
