import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import './Map.css'
import {showMapData} from '../../util/util'

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

function Map({center,zoom,mapCountries,casesType}) {


  
  return (
    <div className="Map">
        <MapContainer center={center} zoom={zoom}>
            <ChangeView center={center} zoom={zoom} /> 
            <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
         
            {showMapData(mapCountries,casesType)}
        </MapContainer>
    </div>
  );
}

export default Map;
