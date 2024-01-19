import React from 'react'
import {MapContainer,TileLayer} from 'react-leaflet'
import GeoCoderMarker from './GeoCoderMarker'

const Map = ({address, city, country}) => {
  return (
    <MapContainer center={[30.35, 18.8]} zoom={1} scrollWheelZoom={false} style={{height: "50vh",marginTop: "20px",zIndex: 0}}>
        <TileLayer url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' />
        <GeoCoderMarker address={`${address} ${city} ${country}`} />

    </MapContainer>
  )
}

export default Map