/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "../../scripts/apiRoutes"
import Menu from "../../pages/Menu"


export default function Login(props) {
  const [signIn, setSignIn] = useState("active-dx");
  const [signUp, setSignUp] = useState("inactive-dx");
  const [email, setEmail] = useState("Insert eMail");
  const [password, setPassword] = useState("Password");

  return (
    <div className='container' required={true}>
      <form className={"signUp " + signUp} required={true}>
        <h3>Create Your Account</h3>
        <p>
          Just enter your email address
            <br />
          and your password to join.
          </p>
        <input
          className='w100'
          type='email'
          value={email}
          autoComplete='off'
          placeholder='Insert eMail'
          required={true}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type='password'
          value={password}
          placeholder='Insert password'
          required
          onChange={e => setPassword(e.target.value)}
        />
        <input type='password' value={password} placeholder='Verify Password' required 
          onChange={e => setPassword(e.target.value)}
        />
        <button className="form-btn sx log-in w-100 "
          onClick={event => {
            event.preventDefault();
            API.createNewUser({ email: email, password: password })
              .then(json => { console.log(`made new user: `, json) })
          }}
          type='button'>
          Create Account &amp; Login
          </button>
      </form>
      <form className={"signIn " + signIn}>
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
          value={email}
          autoComplete='off'
          required={true}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type='password'
          value={password}
          required
          onChange={e => setPassword(e.target.value)}
        />
        <button className="form-btn sx back "
          onClick={event =>{
            event.preventDefault();
            const holdClass = signIn;
            setSignIn(signUp);
            setSignUp(holdClass);
          }}
          type='button'>
          Sign Up
          </button>
        <button className='form-btn dx '
          type='submit'
          onClick={event => {
            event.preventDefault();
            API.loginExistingUser({ email: email, password: password })
              .then(json => {
                if (json.valid) {
                  console.log(`server heard query and sent response`);
                  return <Route render={() =><Menu />} />
                }
              })
          }}
          style={{ color: "white" }}
        >
          Log In
        </button>
      </form>
    </div>
  )

}
