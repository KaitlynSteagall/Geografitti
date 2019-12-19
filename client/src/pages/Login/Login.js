/* eslint-disable react/jsx-no-duplicate-props */
import React, { Component } from 'react'
import './style.css'
import $ from 'jquery'

class Login extends Component {
  componentDidMount () {
    $('.log-in').click(function () {
      $('.signIn').addClass('active-dx')
      $('.signUp').addClass('inactive-sx')
      $('.signUp').removeClass('active-sx')
      $('.signIn').removeClass('inactive-dx')
    })

    $('.back').click(function () {
      $('.signUp').addClass('active-sx')
      $('.signIn').addClass('inactive-dx')
      $('.signIn').removeClass('active-dx')
      $('.signUp').removeClass('inactive-sx')
    })
  }

  render () {
    return (
      <div className='container' reqired='true'>
        <form className='signUp' reqired='true'>
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
          <button className='form-btn sx log-in' type='button'>
            Log In
          </button>
          <button className='form-btn dx' type='submit'>
            Sign Up
          </button>
        </form>
        <form className='signIn'>
          <h3>
            Welcome
            <br />
            Back !
          </h3>
          <button className='fb' type='button' href='www.facebook.com'>
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
          <button className='form-btn sx back' type='button'>
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

export default Login
