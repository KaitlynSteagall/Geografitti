import React, { useState } from "react";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import { Modal, Button } from "react-bootstrap";
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
      <Button variant="primary" onClick={handleShow}>
        <i class="fas fa-camera"></i>
      </Button>

      <Modal show={show} onHide={handleClose} dialogClassName="modal-90w" size='lg'>
        {/* <Modal.Header closeButton></Modal.Header> */}
        <Modal.Body>
          <Camera
            idealFacingMode={FACING_MODES.ENVIRONMENT}
            onTakePhoto={dataUrl => {
              handleTakePhoto(dataUrl);
            }}
            imageType={IMAGE_TYPES.PNG}
            isImageMirror={true}
            isMaxResolution={true}
            isSilentMode={true}
            imageCompression={0}
            isFullScreen={true}
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
