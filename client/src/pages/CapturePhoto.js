import React, { Component } from "react";
// import Camera from "../components/Camera/Camera"

class CapturePhoto extends Component {

  render() {
    return (
      <div className="container">
        {/* <Camera /> */}
        <button>
          <span><i className="far fa-circle"></i></span>
        </button>
      </div>
    )
  }
}

export default CapturePhoto;