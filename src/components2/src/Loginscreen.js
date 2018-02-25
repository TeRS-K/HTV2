//the page which acts as a container to switch between logina nd registration components defined on Login.js and Register.js
//I have sent context of Loginscreen.js page as parentContext prop which allows us to manipulate state variables of loginscreen from child.
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login';
import Register from './Register';
class Loginscreen extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      loginscreen:[],
      loginmessage:'',
      buttonLabel:'Register',
      isLogin:true
    }
  }
  componentWillMount(){
    var loginscreen=[];
    loginscreen.push(
    	<div>
    	<Login parentContext={this} appContext={this.props.parentContext}/>
    	</div>
    	);
    var loginmessage = "Not registered yet, Register Now";
    this.setState({
                  loginscreen:loginscreen,
                  loginmessage:loginmessage
                    })
  }
   handleClick(event){
    // console.log("event",event);
    var loginmessage;
    if(this.state.isLogin){
      var loginscreen=[];
      loginscreen.push(
      	<div>
      	<Register parentContext={this}/>
      	</div>
      	);
      loginmessage = "Already registered.Go to Login";
      this.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     buttonLabel:"Login",
                     isLogin:false
                   });
    }
    else{
      var loginscreen=[];
      loginscreen.push(
      	<div>
      	<Login parentContext={this}/>
      	</div>
      	);
      loginmessage = "Not Registered yet.Go to registration";
      this.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     buttonLabel:"Register",
                     isLogin:true
                   });
    }
  }
  render() {
    return (
      <div className="loginscreen">
        {this.state.loginscreen}
        <div>
          {this.state.loginmessage}
          <MuiThemeProvider>
            <div>
               <RaisedButton label={this.state.buttonLabel} primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
           </div>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

const style = {
  margin: 15,
};
export default Loginscreen;