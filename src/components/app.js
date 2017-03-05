import React, {Component} from 'react';
import axios from 'axios';
import Program from './program';
import Programs from './programs';

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
    //     getPrograms => {
    //         console.log(ROOT_URL + "/programs");
    //         axios.get(ROOT_URL + "/programs").then(response => {
    //             this.setState({programs: response.data})
    //             // console.log("la respuesta" + response.data[0].name);
    //         })
    //
    //     };
    // }



    render() {

        return (
            <div>
              <Programs/>

            </div>
          )
}
}

export default App;
