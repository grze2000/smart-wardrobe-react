import { API_URL } from 'app/config/env'
import { usePaginatedQuery, useQuery2 } from 'app/hooks'
import axios from 'axios'
import { Clothing } from '../interfaces/Clothes'

const getClothes = (category: string) =>
  axios({
    method: 'GET',
    url: `${API_URL}/clothes`,
    params: { category },
  }).then(({ data }) => data)

export const useGetClothes = (category: string) =>
  useQuery2<Clothing[]>({
    queryKey: ['app.clothes', category],
    queryFn: getClothes,
  })
