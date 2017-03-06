import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router';



class Course extends Component {

  // borrarPrograma() {
  //   axios.delete(ROOT_URL+"/programs/"+this.props.estudiante.id).then(response => {
  //     console.log(response);
  //     console.log('Borro programa', this.props.nombre);
  //   })
  // }

  render(){
    return (
      <div className="col-md-6 col-sm-6">
        <div className="card">
          <div className="card-block">
            <h4 className="card-title">{this.props.course.name}</h4>
          <p className="card-text">{this.props.course.description}</p>

          </div>
          <div className="card-footer">
            <Link className="btn btn-primary" to={'/programs/' + this.props.course.program_id + '/courses/' +this.props.course._id + '/files' }>See files</Link>
          </div>
          {/* <button onClick={this.borrarEstudiante.bind(this)}>Borrar</button> */}
         </div>

      </div>


    );
  }
}

export default Course;
