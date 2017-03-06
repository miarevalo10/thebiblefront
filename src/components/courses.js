import React, {Component} from 'react';
import axios from 'axios';
import Course from './course';
import {Link} from 'react-router';


const ROOT_URL = "https://thebibleapp.herokuapp.com/api";
// const ROOT_URL = "http://localhost:3000/api";

class Courses extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: [],
            name: '',
            description: '',
            url: '',
            _id:'',
            program_id:''
        }
    }
    /*
  * Hace un getall para traer todos los programas en la pagina inicial
  */
    componentDidMount() {
        console.log(ROOT_URL + "/programs/" + this.props.params.programId + "/courses");
          axios.get(ROOT_URL + "/programs/" + this.props.params.programId + "/courses").then(response => {
              this.setState({courses: response.data})
              console.log("la respuesta" + response.data[0].name);
          })
    }

    render() {

        return (
            <div className="container-fluid">

              <h1>Courses</h1>
              <hr />
              <Link className="btn" to={'/programs/' + this.props.params.programId + '/addCourse' }>
                <i className="fa fa-plus fa-2x btn">
                  <span id="add">Add Course</span>
                </i>
              </Link>

              <div className="row">
                <div className="col-sm-12">
                  <ol className="breadcrumb">
                    <li>
                      <Link className="" to={'/programs' }>Programs</Link>
                    </li>
                    <li className="active">
                      Courses
                    </li>
                  </ol>
                </div>
              </div>

              <div className="row">

                    {this.state.courses.map(course => {
                        return <Course key={course._id} course={course}/>
                    })}

              </div>

            </div>
          )
}
}

export default Courses;
