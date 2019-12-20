/* eslint-disable react/jsx-no-duplicate-props */
import React, { Component } from 'react';
import './style.css';


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
      <div className='container' reqired='true'>
        <form className={"signUp " + this.state.signUp} reqired='true'>
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
            reqired
            autoComplete='off'
            reqired='true'
          />
          <input type='password' placeholder='Insert Password' reqired />
          <input type='password' placeholder='Verify Password' reqired />
          <button className="form-btn sx log-in " onClick={this.onLoginClick} type='button'>
            Log In
          </button>
          <button className='form-btn dx' type='submit'>
            Sign Up
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
            reqired
          />
          <input type='password' placeholder='Insert Password' reqired />
          <button className="form-btn sx back " onClick={this.onBackClick} type='button'>
            Back
          </button>
          <button className='form-btn dx' type='submit'>
            Log In
          </button>
        </form>
      </div>
    )
  }
}

export default Login;
