import React, { Component } from 'react';
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import PariclesBackground from "./components/PariclesBackground";
import FaceRecognition from './components/FaceRecognition/FaceRecognition'

import './index.css'

const PAT = "92befb9d95ed45daa511d4987fed3688"
const USER_ID = "jsyxi2km4s9r"      
const APP_ID = "test"
const MODEL_ID = "face-detection"
const MODEL_VERSION_ID = "6dc7e46bc9124c5c8824be4822abe105" 


class App extends Component {
  
  constructor() {
    super();
    this.state = {
      input: "",
      imgURL: null,
      box: {},
      route: 'signin',
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        jonied: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      jonied: data.jonied
    }})
  }

  

   calculateFaceLocation = (data) => {
    const faceLocation = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById("image");
    const width = Number(image.width)
    const height = Number(image.height)
    return {
      leftCol: faceLocation.left_col * width,
      rightCol: width - (faceLocation.right_col * width),
      topRow: faceLocation.top_row * height,
      bottomRow: height - (faceLocation.bottom_row * height),
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box})
  }


  onInputChange = (event) => {
    this.setState({ imgURL: event.target.value });
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  onSubmit = () => {
    const raw = JSON.stringify({
      "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
      },
      "inputs": [
        {
          "data": {
            "image": {
              "url": this.state.imgURL
            }
          }
        }
      ]
    });
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + PAT
      },
      body: raw
    };
  
    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
      .then(response => response.json())
      .then(data => {
        if(data){
          return fetch('https://face-detection-api-hdw7.onrender.com:10000/image', 
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
          .then(response => response.json())
          .then(responseData => {
              this.setState(Object.assign(this.state.user, {entries: responseData}))

            this.displayFaceBox(this.calculateFaceLocation(data))
          })
        }
      })
      .catch(error => console.log('error', error));
  }
  

  render() {
    return (
      <div className='App'>
        <PariclesBackground />
        {this.state.route === "home" ?
         (
          <div> 
          <Navigation onRouteChange={this.onRouteChange}/>
          <Logo />
          <Rank name={this.state.user.name} entries={this.state.user.entries}/>
          <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
          <FaceRecognition imgURL={this.state.imgURL} box={this.state.box} />
          </div>
        ) : (
            this.state.route === 'signin' ?
            <Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
            :
            <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
        )}
      </div>
    );
  }
  
}

export default App;


