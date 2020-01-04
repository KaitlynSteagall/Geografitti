import React, { Component } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { usePosition } from '../../scripts/usePosition';

function MapDiv(props) {

  const { latitude, longitude, error } = usePosition();

  return (
    <LoadScript
      id="script-loader"
      googleMapsApiKey={process.env.MAP_API_KEY}
    >
      { latitude ? <GoogleMap
        id='mapDiv'
        mapContainerStyle={{ height: '100vh', width: '100%' }}
        center={{ lat: latitude, lng: longitude }}
        zoom={4}
      >
        <Marker
          position={{ lat: 45.5051, lng: -122.6750 }}
        />
      </GoogleMap> :  error } 
    </LoadScript>
  )
}


export default MapDiv;