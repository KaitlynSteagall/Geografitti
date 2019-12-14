
// navigator.geolocation is a pretty sophisticated system built into the browser that should, of its own accord, ask for user authorization to track, and also choose appropriate location methods (GPS/wifi/MAC) and throttle queries to a reasonable number so the client device doesn't lose battery too quickly or spam nearby towers

import {useState, useEffect} from 'react';
// get state method for hooks to avoid stateful components

export const usePosition = () => {
  // set our states: position, an object with lat/long, and a returnable error
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);
  
  // when the navigator sends new coordinates, change the state
  const onChange = ({coords}) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  };

  // when the navigator throws an error, change the state
  const onError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    // ask the browser where it is
    const geo = navigator.geolocation;
    // throw an error if geolocation is not available (this should also trigger on permission denial)
    if (!geo) {
      setError('Geolocation is not supported');
      return;
    }
    // watchposition is provided by the geolocation service
    let watcher = geo.watchPosition(onChange, onError);
    return () => geo.clearWatch(watcher);
  }, []);

  return {...position, error};
}
