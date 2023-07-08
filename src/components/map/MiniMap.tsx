import { MapContainer, Marker, TileLayer } from "react-leaflet"
import MinimapMarkerIcon from 'public/img/minimap-marker-icon.png'
import L from "leaflet"

export interface MiniMapProps {
  location: {
    latitude: number
    longitude: number
  }
  className?: string
}

export const markerIcon = L.icon({
  iconUrl: MinimapMarkerIcon,
  iconSize: [24, 24],
})

export const MiniMap = ({ location, className }: MiniMapProps) => {
  return (
    <MapContainer
      center={[location.latitude, location.longitude]}
      zoom={14}
      dragging={false}
      zoomControl={false}
      scrollWheelZoom={false}
      boxZoom={false}
      doubleClickZoom={false}
      className={`w-full h-full rounded-xl ${className}`}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        <Marker
          position={[location.latitude, location.longitude]}
          icon={markerIcon}
        />
    </MapContainer>
  )
}