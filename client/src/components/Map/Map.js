import React, { useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { usePosition } from '../../scripts/usePosition';
import { markerArray } from '../../scripts/markerHandlers'
import { Modal } from "react-bootstrap";
import API from "../../scripts/apiRoutes";

function MapDiv(props) {
  const [imgSource, setImgSource ] = useState("https://images.unsplash.com/photo-1519145897500-869c40ccb024?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80");
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
          const handleShow = (event) => { 
            setShow(true);
            console.log(`you clicked marker ${event.ya.target.title}!`);
            API.getSingleImage(event.ya.target.title).then(imageObj => {
              setImgSource(imageObj.imageLocation);
            })  
          }

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
                  <div style={{ maxWidth: "100%", maxHeight: "100%" }}>
                    <img src={imgSource} style={{ maxWidth: "100%", maxHeight: "100%" }}>
                      
                    </img>
                    <button className="btn" style={{ borderRadius: "150px", color: "red" }}>
                      <i class="fas fa-heart"></i>
                    </button>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <button className="btn" variant="secondary" onClick={handleClose}>
                    Close
                  </button>
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