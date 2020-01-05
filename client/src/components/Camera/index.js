import React, {useState} from "react"; 
import Camera, {FACING_MODES, IMAGE_TYPES}  from "react-html5-camera-photo"; 
import {Modal, Button} from "react-bootstrap";
import 'react-html5-camera-photo/build/css/index.css';



function Photo(props) {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleTakePhoto = (dataUrl) => {
    props.handlePhotoDataUrl(dataUrl); 
    
    
    
    

    
    // Post route needs to go here. need to post the datauri to firebase user authentication. 
  }

  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Camera
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
        <Camera 
    idealFacingMode= {FACING_MODES.ENVIRONMENT}
    onTakePhoto = { (dataUrl) => { handleTakePhoto(dataUrl); } }
    imageType = {IMAGE_TYPES.PNG}
    isImageMirror = {true}
    isMaxResolution = {true}
    isSilentMode = {true}
    />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Photo; 



