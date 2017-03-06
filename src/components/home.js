import React, {Component} from 'react';
import Programs from './programs';

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
            <Programs/>
                </div>



          )
    }
}

export default Home;
