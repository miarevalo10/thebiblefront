import React, {Component} from 'react';
import Programs from './programs';
import Intro from './intro';

class Home extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         programs: [],
    //         name: '',
    //         description: '',
    //         url: ''
    //     }


    render() {

        return (
          <div>
          {/* <div className="row">
            <Navbar/>
          </div> */}
            <Intro/>
                </div>



          )
    }
}

export default Home;
