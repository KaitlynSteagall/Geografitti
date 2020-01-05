import React, { useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { usePosition } from '../../scripts/usePosition';
import { markerArray, markerClicked } from '../../scripts/markerHandlers'

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
              title = { marker._id }
              position = { marker.position }
              onClick = { markerClicked }
           />
          )
        })}
      </GoogleMap>
    </LoadScript>
  )
}


export default MapDiv;