import React, { Component } from 'react'
import './style.css'

class EditUser extends React.Component {
  render () {
    return (
      <div className='container'>
        <div
          style={{
            position: 'fixed',
            background: '#ff7d00',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0
          }}
        ></div>
        <form>
          <div className='form-group'>
            <label for='exampleInputEmail1'>Email address</label>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='Enter email'
            />
            <small id='emailHelp' className='form-text text-muted'>
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className='form-group'>
            <label for='exampleInputPassword1'>Password</label>
            <input
              type='password'
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Password'
            />
          </div>
          <div className='form-group'>
            <label for='exampleInputUsername1'>Username</label>
            <input
              type='username'
              className='form-control'
              id='exampleInputUsername1'
              placeholder='username'
            />
          </div>
          <div className='form-check'>
            <input
              type='checkbox'
              className='form-check-input'
              id='exampleCheck1'
            />
            <label className='form-check-label' for='exampleCheck1'>
              Check me out
            </label>
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default EditUser
