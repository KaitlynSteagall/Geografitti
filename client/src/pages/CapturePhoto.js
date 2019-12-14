import React, { Component } from "react";
import Camera from "../components/Camera/Camera"

class CapturePhoto extends Component {

  render() {
    return (
      <div>
        <Camera />
        <div>
          <i className="far fa-circle"></i>
        </div>
      </div>
    )
  }
}

export default CapturePhoto;