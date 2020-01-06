//what this will be upon completion:
  // takes in two params: current lat & lng
  // send that as an object to the server
  // the server will run a script to find nearby images
  // those images will come back as an array of objects:
  /* 
    {
      _id: 
      position: {
        lat:
        lng:
      }
    }
  */
  // this script will return that array
export const markerArray = (lat, lng) => {
  return ([
    { 
      _id: 'pic 1',
      position: { lat: 45.5051,
        lng: -122.6750 }
    },
    { 
      _id: 'pic 2',
      position: { lat: 45.6257,
         lng: -122.6761 }
    },
    { 
      _id: 'pic 3',
      position: { lat: 45.5528,
        lng: -122.5608 }
    },
  ])
}
