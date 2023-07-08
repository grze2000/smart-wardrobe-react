import { Controller, useFormContext } from "react-hook-form";
import { MapContainer, Marker, Popup, TileLayer, useMapEvent } from "react-leaflet"
import { markerIcon } from "../map/MarkerIcon";

export interface LocationPickerProps {
  name: string
  defaultLocation?: {
    latitude: number
    longitude: number
  }
}

interface LocationPickerMarkerProps {
  location: {
    latitude: number
    longitude: number
  },
  onChange({ latitude, longitude }: {
    latitude: number
    longitude: number
  }): void
}


const LocationPickerMarker = ({ location, onChange }: LocationPickerMarkerProps) => {
  useMapEvent('click', (e) => {
    onChange({
      latitude: e.latlng.lat,
      longitude: e.latlng.lng
    })
  })

  return (location?.latitude && location?.longitude) ? <Marker position={[location.latitude, location.longitude]} icon={markerIcon}/> : null
}

export const LocationPicker = ({ name, defaultLocation }: LocationPickerProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange }, fieldState }) => {
        const { error } = fieldState

        return (
          <MapContainer
            center={defaultLocation?.longitude ? [defaultLocation?.latitude, defaultLocation?.longitude] : [50.04132, 21.99901]}
            zoom={14}
            maxZoom={18}
            scrollWheelZoom={true}
            className="w-full h-full min-h-[200px]"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationPickerMarker location={value} onChange={onChange} />
          </MapContainer>
        )
      }}
    />

  )
}