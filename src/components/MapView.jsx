import React, { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Tooltip,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../estilos.css";

// Función para generar URL de UI Avatars
const generateAvatarUrl = (name) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=64`;

function MapCenter({ center }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, 13); // Ajusta el nivel de zoom según sea necesario
    }
  }, [center, map]);

  return null;
}

function MapView({ selectedTrack, selectedCyclists, center }) {
  return (
    <div id="map">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {center && <MapCenter center={center} />}
        {selectedTrack && <Polyline positions={selectedTrack.coordinates} />}
        {selectedCyclists.map((cyclist) => {
          const cyclistIcon = new L.Icon({
            iconUrl: generateAvatarUrl(cyclist.name),
            iconSize: [40, 40],
            iconAnchor: [20, 20],
            popupAnchor: [0, -20],
            tooltipAnchor: [20, -20],
            shadowUrl:
              "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
            shadowSize: [41, 41],
          });

          return (
            <Marker
              key={cyclist.name}
              position={cyclist.position}
              icon={cyclistIcon}
            >
              <Tooltip>{cyclist.name}</Tooltip>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

export default MapView;
