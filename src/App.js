import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      loginClicked : false,
      nameClicked : false,
      password : ''
    }
  }

  nameEntered = () => {
    this.setState({nameClicked : true})
  }

  emailEntered = () => {
    this.setState({loginClicked : true})
  }

  getFirstNameClass = () => {
    if(!this.state.nameClicked){
      return "loginInput appearAnimation"
    }else{
      return "loginInput"
    }
  }

  getLastNameClass = () => {
    if(!this.state.nameClicked){
        return "secondPasswordInput secondAppearAnimation"
      }else{
        return "secondPasswordInput"
      }
    }

  getNameButtonClass = () => {
    if(!this.state.nameClicked){
        return "passwordButton secondAppearAnimation"
      }else{
        return "passwordButton"
      }
    }

  getLoginInputClass = () => {
    if(this.state.nameClicked){
      return "passwordButton appearAnimation"
    }else{
      return "passwordButton"
    }
  }

  getLoginButtonClass = () => {
    if(this.state.nameClicked){
      return "loginButton appearAnimation"
    }else{
      return "loginButton"
    }
  }

  getPasswordClass = () => {
    if(this.state.loginClicked){
      return "passwordInput passwordAnimation"
    }else{
      return "passwordInput"
    }
  }

  getSecondPasswordClass = () => {
    if(this.state.loginClicked){
      return "secondPasswordInput secondPasswordAnimation"
    }else{
      return "secondPasswordInput"
    }
  }

  getPasswordButtonClass = () => {
    if(this.state.loginClicked){
      return "passwordButton secondPasswordAnimation"
    }else{
      return "passwordButton"
    }
  }

  setPassword = () => {
    // this.setstate({password : })
  }

  render() {
    return (
      <div className="App">
        <div className="LoginModal cf">
          <div className="loginLeft">
            <div className="loginHeading">Hello,</div>
            <input type="text" className={this.getFirstNameClass()} placeholder="First Name"></input>
            <input type="text" className={this.getLastNameClass()} placeholder="Last Name"></input>
            <div className={this.getNameButtonClass()} onClick={()=>this.nameEntered()}>Submit</div>
            {/*<input type="email" className={this.getLoginInputClass()} placeholder="email"></input>
            <div className={this.getLoginButtonClass()} onClick={()=>this.emailEntered()}>Submit</div>
            <input type="password" className={this.getPasswordClass()} placeholder="password"></input>
            <input type="password" className={this.getSecondPasswordClass()} placeholder="re-type password"></input>
            <div className={this.getPasswordButtonClass()} onClick={()=>this.setPassword()}>Set Password</div>*/}
          </div>
          <div className="loginRight cf">
            <div className="loginDescPrimary">Welcome to DeltaBase</div>
            <div className="loginSecondaryWrpr">
              <div className="loginDescSecondary">This portal will provide you with an interface to access your firebase database in a more interactive mode than firebase provides
                natively. Also, once you create an account, you will have a lifetime free access to a unique compiled dashboard specific to your business needs.
                This portal will provide you with an interface to access your firebase database in a more interactive mode than firebase provides
                natively. Also, once you create an account, you will have a lifetime free access to a unique compiled dashboard specific to your business needs.
              </div>
              <div className="loginDescSecondary">This portal will provide you with an interface to access your firebase database in a more interactive mode than firebase provides
                natively. Also, once you create an account, you will have a lifetime free access to a unique compiled dashboard specific to your business needs.
              </div>
            </div>
          </div>
        </div>
        <div className="meteor"></div>
        <div className="meteor"></div>
        <div className="meteor"></div>
        <div className="meteor"></div>
        <div className="meteor"></div>
      </div>
    );
  }
}

export default App;
