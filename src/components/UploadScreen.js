import React, { Component } from 'react';
import './App.css';
/*
Screen:LoginScreen
Loginscreen is the main screen which the user is shown on first visit to page and after
hitting logout
*/
import LoginScreen from './Loginscreen';
/*
Module:Material-UI
Material-UI is used for designing ui of the app
*/
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import Dropzone from 'react-dropzone';
import Login from './Login';

var apiBaseUrl = "http://localhost:4000/api/";
/*
Module:Dropzone
Dropzone is used for local file selection
*/

/*
Module:superagent
superagent is used to handle post/get requests to server
*/
var request = require('superagent');

class UploadScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
        messages: ["I like cheese", "Hello world", "dank memes"]
    };
  }
  render() {
    return (
      <div className="App">
        <div className="container">
            {this.showMessage()}
        </div>
      </div>
    );
  }
    showMessage(){
        const messages = [];
        this.state.messages.forEach((message) => {
            messages.push(
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <Login text={message}/>
                </div>
            );
           });
        return messages;
    }
}

export default UploadScreen;
