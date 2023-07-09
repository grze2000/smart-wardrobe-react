import { useQuery2 } from 'app/hooks'
import axios from 'axios'
import { Clothing } from '../interfaces/Clothes'
import { OPENWEATHERMAP_API_KEY } from 'app/config/env'

const getWeather = () =>
  // axios({
  //   method: 'GET',
  //   url: `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=${OPENWEATHERMAP_API_KEY}`,
  // }).then(({ data }) => data)
  fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=${OPENWEATHERMAP_API_KEY}`, {
    method: 'GET',
    mode: 'no-cors',
  }).then((response) => response.json())

export const useGetWeather = () =>
  useQuery2<Clothing[]>({
    queryKey: ['app.weather'],
    queryFn: getWeather,
  })
