import React from 'react';
// import PropTypes from 'prop-types';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Map(props) {
  const position = [-36.8885, 174.7633];
  const zoom = 13;
  return (
    <LeafletMap
      center={position}
      zoom={zoom}
      style={{ width: '100%', height: '100%', position: 'absolute' }}
      minZoom={3}
      maxZoom={20}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </LeafletMap>
  );
}

// Map.propTypes = {};

export default Map;
