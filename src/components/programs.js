import React, {Component} from 'react';
import axios from 'axios';
import Program from './program';

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

    addProgram() {
        axios.post(ROOT_URL + "/programs", {
            name: this.state.name,
            description: this.state.description,
            url: this.state.url
        }).then(response => {
            this.getPrograms();
        })
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
        // const {  navbar } = this.props;
        return (

            <div className="container-fluid">

              <h1>Programs</h1>
              <hr />
                <div className="row">

                    {this.state.programs.map(program => {
                        return <Program key={program._id} program={program}/>
                    })}

                </div>

                  Name:
                  <input type="text" value={this.state.name} onChange={(event) => {
                      this.setState({name: event.target.value})
                  }}/>

                  Description:
                  <input type="text" value={this.state.description} onChange={(event) => {
                      this.setState({description: event.target.value})
                  }}/>

                  URL:
                  <input type="text" value={this.state.url} onChange={(event) => {
                      this.setState({url: event.target.value})
                  }}/>


                  <button onClick={this.addProgram.bind(this)}>Save</button>
            </div>
          )
}
}

export default Programs;
