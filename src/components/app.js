import React, {Component} from 'react';
import axios from 'axios';
import Program from './program';

const ROOT_URL = "https://thebibleapp.herokuapp.com/api";
// const ROOT_URL = "http://localhost:3000/api";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      programs: [],
      name: '',
      description: '',
      url: ''
    }
  }

  // agregarEstudiante() {
  //   axios.post(ROOT_URL+ "/programs", {
  //     nombre: this.state.nombre,
  //     codigo: this.state.codigo,
  //     nota: this.state.nota
  //   })
  //   .then(response => {
  //     this.obtenerEstudiantes();
  //   })
  // }

  getPrograms() {
    console.log(ROOT_URL+ "/programs");
    axios.get(ROOT_URL+ "/programs")
    .then(response => {
      this.setState({
        programs: response.data
      })
      // console.log("la respuesta" + response.data[0].name);
    })

  }



  render() {
    return(
      <div>
        <button onClick={this.getPrograms.bind(this)}>
          Get programs
        </button>
      <div className="row">
        {this.state.programs.map(program => {
          return <Program program={program} />
        })}

        {/* Nombre:
        <input type="text" value={this.state.name} onChange={(event) => {
          this.setState({nombre: event.target.value})
        }} />

        Codigo:
        <input type="text" value={this.state.codigo} onChange={(event) => {
          this.setState({codigo: event.target.value})
        }} />
        Nota:
        <input type="text" value={this.state.nota} onChange={(event) => {
          this.setState({nota: event.target.value})
        }} /> */}

        {/* <button onClick={this.agregarEstudiante.bind(this)}>Guardar estudiante</button> */}
        </div>
      </div>
    )
  }
}

export default App;
