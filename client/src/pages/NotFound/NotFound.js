import React from 'react';
import './style.css';
import { Link, BrowserRouter as Router } from "react-router-dom";

function NotFound() {
  return (
    <div className="container">
      <div
        style={{
          position: 'fixed',
          background: 'black',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0
        }}
      ></div>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404 mb-5">
            <h1 className="mb-5">404</h1>
            <h2 className="my-5">Page not found</h2>
          </div>
          <a className="mt-5" href="#">Homepage</a>
        </div>
      </div>
    </div>
  )
}

export default NotFound;