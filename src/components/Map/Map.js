import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import './Map.css'

function ChangeMapView({ coords,zoom }) {
  const map = useMap();
  map.setView(coords, map.getZoom(zoom));

  return null;
}

function Map({center,zoom}) {


  
  return (
    <div className="Map">
        <MapContainer center={center} zoom={zoom}>
            <TileLayer
             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            ></TileLayer>
            <ChangeMapView coords={center} zoom={zoom}/>
        </MapContainer>
    </div>
  );
}

export default Map;
