import MarkerIcon from 'public/img/marker-icon.png'
import L from "leaflet"

export const markerIcon = L.icon({
  iconUrl: MarkerIcon,
  iconSize: [24, 34],
  iconAnchor: [12, 34],
})