import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { geolocated } from "react-geolocated";
import "./Map.scss";
const default_latitude = -6.17511;
const default_longitude = 106.865036;

class MapLocation extends React.Component {
  render() {
    const latitude = this.props.coords
      ? this.props.coords.latitude
      : default_latitude;
    const longitude = this.props.coords
      ? this.props.coords.longitude
      : default_longitude;

    return (
      <div>
        <MapContainer
          className="leaflet__container"
          center={[latitude, longitude]}
          zoom={12}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[latitude, longitude]}>
            <Popup>Yoo Yooo</Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(MapLocation);
