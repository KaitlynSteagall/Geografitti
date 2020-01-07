import React, { useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { usePosition } from '../../scripts/usePosition';
import { markerArray } from '../../scripts/markerHandlers'
import { Modal, Button } from "react-bootstrap";


function MapDiv(props) {

  const { latitude, longitude, error } = usePosition();

  return (
    <LoadScript
      id="script-loader"
      googleMapsApiKey={process.env.MAP_API_KEY}
    >
      <GoogleMap
        id='mapDiv'
        mapContainerStyle={{ height: '100vh', width: '100%' }}
        center={{ lat: latitude, lng: longitude }}
        zoom={10}
      >
        {markerArray().map(marker => {
          const [show, setShow] = useState(false);
          const handleClose = () => setShow(false);
          const handleShow = (event) => {setShow(true); console.log(`you clicked marker ${event.ya.target.title}!`);}

          return (
            <>
              <Marker
                className="locationMarker"
                title={marker._id}
                position={marker.position}
                variant="primary"
                onClick={handleShow}
              />

              <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                  <div style={{maxWidth: "100%", maxHeight: "100%"}}>
                    <img></img>
                  {/* script to bring photo here */}
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          )
        })}
      </GoogleMap>
    </LoadScript>
  )
}


export default MapDiv;