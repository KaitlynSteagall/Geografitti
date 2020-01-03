import React, { Component } from 'react'

class EditUser extends React.Component {
  state =  {
    userEmail: "",
    userName: "",
    userPassword: ""

    }
    handleEmailChange = (event) => {
      const value = event.target.value;
      this.setState({userEmail:value}) 
    }  
     handleNameChange = (event) => {
      const value = event.target.value;
      this.setState({userName:value}) 
    } 
     handlePasswordChange = (event) => {
      const value = event.target.value;
      this.setState({userPassword:value}) 
    } 
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
            <label>Email address</label>
            <input value={this.state.userEmail} 
             onChange={this.handleEmailChange}
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
            <label>Password</label>
            <input value={this.state.userPassword} 
             onChange={this.handlePasswordChange}
              type='password'
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Password'
            />
          </div>
          <div className='form-group'>
            <label>Username</label>
            <input value={this.state.userName} 
             onChange={this.handleNameChange}
              type='username'
              className='form-control'
              id='exampleInputUsername1'
              placeholder='username'
            />
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
