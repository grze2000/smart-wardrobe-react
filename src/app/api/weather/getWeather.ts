import { useQuery2 } from 'app/hooks'
import axios from 'axios'
import { Clothing } from '../interfaces/Clothes'
import { OPENWEATHERMAP_API_KEY } from 'app/config/env'
export interface GeolocationPosition {
  coords: {
    latitude: number
    longitude: number
  }
}

function getCurrentPosition(options = {}): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options)
  })
}

// Proxy is required to avoid CORS issues when calling the API from the frontend
//  ProxyPass /api/weather http://api.openweathermap.org/
//  ProxyPassReverse /api/weather http://api.openweathermap.org/
const getWeather = async () => {
  let lat = 52.237049
  let lon = 21.017532
  try {
    const position = await getCurrentPosition()
    lat = position.coords.latitude
    lon = position.coords.longitude
  } finally {
    return axios({
      method: 'GET',
      url: `/api/weather/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${OPENWEATHERMAP_API_KEY}&exclude=minutely,hourly,daily&units=metric&lang=pl`,
    }).then(({ data }) => data)
  }
}

export const useGetWeather = () =>
  useQuery2<Clothing[]>({
    queryKey: ['app.weather'],
    queryFn: getWeather,
  })
