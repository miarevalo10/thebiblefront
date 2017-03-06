import React, {Component} from 'react';
import axios from 'axios';
import File from './file';
import {Link} from 'react-router';

const ROOT_URL = "https://thebibleapp.herokuapp.com/api";
// const ROOT_URL = "http://localhost:3000/api";

class Files extends Component {
    constructor(props) {
        super(props);

        this.state = {
            files: [],
            name:'',
            drive_url: '',
            _id:''
        }
    }
    /*
  * Hace un getall para traer todos los files en la pagina inicial
  */
    componentDidMount() {
        var id = this.props.params.courseId;
        console.log(ROOT_URL + "/programs/" + this.props.params.programId + "/courses/" + this.props.params.courseId + "/files");
          axios.get(ROOT_URL + "/programs/" + this.props.params.programId  + "/courses/" + this.props.params.courseId + "/files").then(response => {
              this.setState({files: response.data})
              // console.log("la respuesta" + response.data[0].name);
          })
    }


    render() {

        return (
            <div className="container-fluid">
              <h1>Files</h1>
              <hr />
            <div className="row">
                <div className="col-sm-12">
                  <ol className="breadcrumb">
                    <li>
                      <Link className="" to={'/programs' }>Programs</Link>
                    </li>
                    <li className="">
                      <Link className="" to={'/programs/' + this.props.params.programId + '/courses'}>Courses</Link>
                    </li>
                    <li className="active">
                      Files
                    </li>
                  </ol>
                </div>
              </div>
              
            <Link className="btn" to={'/programs/' + this.props.params.programId + '/courses/' +this.props.params.courseId }>
              <i className="fa fa-plus fa-2x btn">
                <span id="add">Add File</span>
              </i>
            </Link>

            <div className="row">

                    {this.state.files.map(file => {
                        return <File key={file._id} file={file}/>
                    })}

              </div>
            </div>
          )
}
}

export default Files;
