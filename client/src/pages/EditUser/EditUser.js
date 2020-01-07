import React, { Component } from 'react'

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
            width: '100%',
            height: '100%',
            top: 0,
            left: 0
          }}
        ></div>
        <form>
          <div className='form-group'>
            <label>Current Username</label>
            <input
              value={this.state.currentUser}
              onChange={this.handleEmailChange}
              type='username'
              className='form-control'
              id='exampleInputUser1'
              aria-describedby='userHelp'
              placeholder='Current Username'
            />
          </div>
          <div className='form-group'>
            <label>New Username</label>
            <input
              value={this.state.newUserName}
              onChange={this.handleNameChange}
              type='username'
              className='form-control'
              id='exampleInputUsername1'
              placeholder='username'
            />
          </div>
          <div className='form-group'>
            <label>Current Password</label>
            <input
              value={this.state.userPassword}
              onChange={this.handlePasswordChange}
              type='password'
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Password'
            />
          </div>
          <div className='form-group'>
            <label>New Password</label>
            <input
              value={this.state.userPassword}
              onChange={this.handlePasswordChange}
              type='password'
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Password'
            />
          </div>
          <div className='form-group'>
            <label>Confirm New Password</label>
            <input
              value={this.state.userPassword}
              onChange={this.handlePasswordChange}
              type='password'
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Password'
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
        {/* TODO:SECOND FORM */}
      </div>
    )
  }
}

export default EditUser
