import React, { useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { usePosition } from '../../scripts/usePosition';
import { markerArray } from '../../scripts/markerHandlers'
// import LocationPhoto, { handleShow } from '../MapModal/MapModal';

function MapDiv(props) {

  const { latitude, longitude, error } = usePosition();

  return (
    <LoadScript
      id = "script-loader"
      googleMapsApiKey = { process.env.MAP_API_KEY }
    >
      <GoogleMap
        id = 'mapDiv'
        mapContainerStyle = {{ height: '100vh', width: '100%' }}
        center = {{ lat: latitude, lng: longitude }}
        zoom = { 10 }
      >
        { markerArray().map(marker => {
          return (
            <Marker
              className="locationPic"
              title = { marker._id }
              position = { marker.position }
              // onClick = { handleShow }
           />
          )
        })}
      </GoogleMap>
      {/* <LocationPhoto /> */}
    </LoadScript>
  )
}


export default MapDiv;