import React from "react"; 
import Camera, {FACING_MODES, IMAGE_TYPES}  from "react-html5-camera-photo"; 
import 'react-html5-camera-photo/build/css/index.css';

function Photo (props) {
  

  function handleTakePhoto (dataUri) {
    console.log(dataUri); 
    console.log('takePhoto');
    // Post route needs to go here. need to post the datauri to firebase user authentication. 
  }


  const isFullscreen = true; 
  return (
    <Camera 
    idealFacingMode= {FACING_MODES.ENVIRONMENT}
    onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
    imageType = {IMAGE_TYPES.PNG}
    isImageMirror = {true}
    isMaxResolution = {true}
    isSilentMode = {true}
    />
  ); 
}

export default Photo; 