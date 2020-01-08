import React, { Component } from 'react'
import "../EditUser/EditUser.css"

class EditUser extends React.Component {
  state = {
    currentUser: '',
    newUserName: '',
    userPassword: ''
  }
  handleEmailChange = event => {
    const value = event.target.value
    this.setState({ currentUser: value })
  }
  handleNameChange = event => {
    const value = event.target.value
    this.setState({ newUserName: value })
  }
  handlePasswordChange = event => {
    const value = event.target.value
    this.setState({ userPassword: value })
  }
  render () {
    return (
      <div className='container'>
        <div
          style={{
            position: 'fixed',
            background: 'rgba(255, 125, 0, 0.72)',
            width: '100vw',
            height: '100vh',
            top: 0,
            left: 0
          }}
        ></div>
        <form className="ml-1 m-0">
          <div className='form-group form-group-sm m-0'>
            <label className='topLabel'>Current Username</label>
            <input
              value={this.state.currentUser}
              onChange={this.handleEmailChange}
              type='username'
              className='form-control input-sm m-0'
              id='exampleInputUser1'
              aria-describedby='userHelp'
              // placeholder='Current Username'
            />
          </div>
          <div className='form-group form-group-sm m-0'>
            <label>New Username</label>
            <input
              value={this.state.newUserName}
              onChange={this.handleNameChange}
              type='Username'
              className='form-control input-sm m-0'
              id='exampleInputUsername1'
              // placeholder='Username'
            />
          </div>
          <div className='form-group form-group-sm m-0'>
            <label>Current Password</label>
            <input
              value={this.state.userPassword}
              onChange={this.handlePasswordChange}
              type='password'
              className='form-control input-sm m-0'
              id='exampleInputPassword1'
              // placeholder='Password'
            />
          </div>
          <div className='form-group form-group-sm m-0'>
            <label>New Password</label>
            <input
              value={this.state.userPassword}
              onChange={this.handlePasswordChange}
              type='password'
              className='form-control input-sm m-0'
              id='exampleInputPassword1'
              // placeholder='Password'
            />
          </div>
          <div className='form-group form-group-sm m-0'>
            <label>Confirm New Password</label>
            <input
              value={this.state.userPassword}
              onChange={this.handlePasswordChange}
              type='password'
              className='form-control input-sm m-0 pb-2'
              id='exampleInputPassword1'
              // placeholder='Password'
            />
          </div>
          <button type='submit' className='btn mt-3'>
            Submit
          </button>
        </form>
        {/* TODO:SECOND FORM */}
      </div>
    )
  }
}

export default EditUser
