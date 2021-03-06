import React, { useState } from "react";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import { Modal } from "react-bootstrap";
import "react-html5-camera-photo/build/css/index.css";
import "./Camera.css"; 

function Photo(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleTakePhoto = dataUrl => {
    props.handlePhotoDataUrl(dataUrl);

    // Post route needs to go here. need to post the datauri to firebase user authentication.
  };

  return (
    <>
      <button className="btn" variant="secondary" onClick={handleShow} style={{borderRadius: "150px"}}> 
        <i class="fas fa-camera"></i>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Camera
            idealFacingMode={FACING_MODES.ENVIRONMENT}
            onTakePhoto={dataUrl => {
              handleTakePhoto(dataUrl);
            }}
            imageType={IMAGE_TYPES.PNG}
            isImageMirror={true}
            isMaxResolution={true}
            idealResolution={{width: "100vw", height: "100vh"}}
            isSilentMode={true}
            imageCompression={0}
            isFullScreen={true}
          />
        </Modal.Body>
        <Modal.Footer>
          <button className="btn" variant="secondary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Photo;
