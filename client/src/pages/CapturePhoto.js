import React, { Component } from "react";
import {Link, BrowserRouter as Router } from "react-router-dom"
// import Camera from "../components/Camera/Camera"

class CapturePhoto extends Component {

  render() {
    return (
      <div className="container">
        {/* <Camera /> */}
        <button style={{backgroundColor:"transparent", border:"none"}}>
          <Link to="Create-Art" style={{color:"white", fontSize:"2em"}}><i className="far fa-circle"></i></Link>
        </button>
      </div>
    )
  }
}

export default CapturePhoto;