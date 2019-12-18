import React, { useState } from "react";
import { Modal } from "react-bootstrap";


function toolModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  return (
    <div>
      <button variant="primary" onClick={handleOpen}>Open Tools</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
      </Modal>
    </div>
  )
}

export default toolModal; 
