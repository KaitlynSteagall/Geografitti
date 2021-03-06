import React from 'react';
import {usePosition} from '../../scripts/usePosition';
// usePosition is sent over from a separate script

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
