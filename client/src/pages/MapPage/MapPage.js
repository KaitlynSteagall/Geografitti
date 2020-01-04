import React from 'react';
import MapDiv from "../../components/Map/Map"
import './style.css';

function MapPage() {
  return (<body>
    <div >
      <MapDiv 
        currentLat = {45.5051}
        currentLng = {122.6750}
      />
    </div>
  </body>)
}

export default MapPage