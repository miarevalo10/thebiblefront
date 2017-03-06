import React, {Component} from 'react';
import axios from 'axios';

const ROOT_URL = "https://thebibleapp.herokuapp.com";


class AddFile extends Component{

  constructor(props) {
      super(props);

      this.state = {
          files:[],
          name:'',
          size:'',
          fileurl:'',
          courseid:''
      }
  }

  addFile() {
    console.log(ROOT_URL + "/api/upload");
    console.log(this);
    console.log(this.state.files[0].name);
    console.log( "https://s3.amazonaws.com/thebibleapp/"+this.state.files[0].name);
    console.log(this.state.files[0].size);

      axios.post(ROOT_URL + "/api/upload", {
          name: this.state.files[0].name,
          filesize: this.state.files[0].size,
          fileurl: "https://s3.amazonaws.com/thebibleapp/"+ this.state.files[0].name,
          courseid: this.props.params.courseId
      }).then(response => {
          console.log("Se logró");
      })
  }

  uploadFile(file, signedRequest, url){
  var xhr = new XMLHttpRequest();
      console.log("adasd" + this.props.params.courseId);
      // console.log(this.state.file[0].courseId);

  xhr.open('PUT', signedRequest);
  xhr.onreadystatechange = () => {
    if(xhr.readyState === 4){
      if(xhr.status === 200){

        document.getElementById('preview').src = url;
        document.getElementById('avatar-url').value = url;
        // document.getElementById('file-url').value=url;
      }
      else{
        alert('Could not upload file.');
      }
    }
  };
  xhr.send(file);
  }


  getSignedRequest(file){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', ROOT_URL + '/sign-s3?file-name='+file.name +'&file-type=' + file.type);
    xhr.onreadystatechange = () => {
      if(xhr.readyState === 4){
        if(xhr.status === 200){
          const response = JSON.parse(xhr.responseText);
          console.log(response);

          this.uploadFile(file, response.signedRequest, response.url);

        }
        else{
          alert('Could not get signed URL.');
        }
      }
    };
    xhr.send();
    }

  initUpload(event){
    this.setState({files: event.target.files}) ;
    const file =  event.target.files[0];

    console.log(event.target.files[0]);
    if(file == null){
      return alert('No file selected.');
    }
    this.getSignedRequest(file);
}
  render(){
    return (
      <div>
            <h1>Add new files</h1>
            <hr />
            <h2>Your file</h2>
            <input type="file" id="file-input"  onChange={this.initUpload.bind(this)}/>
            <p id="status">Please select a file</p>


              <button onClick={this.addFile.bind(this)}>Save</button>





          </div>
    )
  }
}

export default AddFile;