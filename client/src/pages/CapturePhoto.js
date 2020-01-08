import React from "react";
import Photo from "../components/Camera"; 
import TagArea from "../components/Canvas";
class CapturePhoto extends React.Component {
  
  render() {
    
    return (
      <div>
       <TagArea
       dataPhotoUrl={this.props.photoDataUrl}
       handlePhotoDataUrl={this.props.handlePhotoDataUrl}/>
      </div>

    );
  }
}

export default CapturePhoto;
  
  
  

