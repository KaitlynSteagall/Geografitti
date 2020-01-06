import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export const handleShow = (event) => {
  alert(`you clicked marker ${event.ya.target.title}!`);
  // const [setShow] = useState(false);
  // setShow(true);
}

function LocationPhoto() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return(
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        {/* script to bring photo here */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
          </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default LocationPhoto; 
