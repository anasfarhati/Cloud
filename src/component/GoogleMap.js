import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const center = {
  lat: 40.712776,
  lng: -74.005974,
};

function Map() {
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '500px' }}
        center={center}
        zoom={13}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;