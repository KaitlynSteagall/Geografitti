import React, { useState } from "react"; 
import Camera  from "react-html5-camera-photo";
import ImagePreview from "./imagepreview";  

function Photo (props) {
  const [dataUri, setDataUri] = useState(''); 

  function takePhotoAnims(dataUri) {
    console.log('take photo'); 
    setDataUri(dataUri); 
  }

  const isFullscreen = false; 
  return (
    <div>
      {
        (dataUri)
        ? <ImagePreview dataUri={dataUri}
        isFullscreen={isFullscreen}
        />
        : <Camera on takePhotoAnims = {takePhotoAnims}
        isFullscreen={isFullscreen}
        />
      }
    </div>
  ); 
}

export default Photo; 