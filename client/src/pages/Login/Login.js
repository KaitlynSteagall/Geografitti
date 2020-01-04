/* eslint-disable react/jsx-no-duplicate-props */
import React, { Component } from 'react';
import './style.css';
import {Link, BrowserRouter as Router } from "react-router-dom";

class Login extends Component {
  state = { 
    signIn: "active-dx",
    signUp: "inactive-sx" 
  }
  onLoginClick = () => { 
    this.setState({ 
    signIn: "active-dx",
    signUp: "inactive-sx" 
  })
  } 
  onBackClick = () => {
    this.setState({
      signIn: "inactive-dx",
      signUp: "active-sx" 
    })
  }

  render () {
    return (
      <div className='container' required='true'>
        <form className={"signUp " + this.state.signUp} required='true'>
          <h3>Create Your Account</h3>
          <p>
            Just enter your email address
            <br />
            and your password for join.
          </p>
          <input
            className='w100'
            type='email'
            placeholder='Insert eMail'
            required
            autoComplete='off'
            required='true'
          />
          <input type='password' placeholder='Insert Password' required />
          <input type='password' placeholder='Verify Password' required />
          <button className="form-btn sx log-in w-100 " onClick={this.onLoginClick} type='button'>
           Create Account &amp; Login
          </button>
        </form>
        <form className={"signIn " + this.state.signIn}>
          <h3>
            Welcome
            <br />
            Back !
          </h3>
          <button className='fb' type='button' href='https://www.facebook.com'>
            Log In With Facebook
          </button>
          <p>- or -</p>
          <input
            type='email'
            placeholder='Insert eMail'
            autoComplete='off'
            required
          />
          <input type='password' placeholder='Insert Password' required />
          <button className="form-btn sx back " 
          onClick={this.onBackClick} type='button'>
           Sign Up
          </button>
          <button className='form-btn dx ' 
          type='submit'>
            <Link to="/menu" style={{color:"white"}}>Log In</Link>
          </button>
        </form>
      </div>
    )
  }
}

export default Login;
