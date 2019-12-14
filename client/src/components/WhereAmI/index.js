import React from 'react';
import {usePosition} from './usePosition';
// usePosition is a pretty sophisticated system built into the browser that should, of its own accord, ask for user authorization to track, and also choose appropriate location methods (GPS/wifi/MAC) and throttle queries to a reasonable number so the client device doesn't lose battery too quickly or spam nearby towers

// this particular component just makes a div that asks the device where it is and displays it to the user in text

export const WhereAmI = () => {
  // functional with hook because Classes Are Hard For Humans And Computers
  const {latitude, longitude, error} = usePosition();
  return (
    <div>
      latitude: {latitude}<br/>
      longitude: {longitude}<br/>
      error: {error}
    </div>
  );
};