import { API_URL } from 'app/config/env'
import axios, { AxiosRequestConfig } from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { LoginResponse, RefreshTokenReturnData } from './auth'
import { clothes } from './mocks/clothes'

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}

export const setupMocks = () => {
  const mock = new MockAdapter(axios, {
    onNoMatch: 'passthrough',
    // delayResponse: 1000,
  })

  const singleClothingItem = new RegExp(`${API_URL}/clothes/(.*)`)


  mock.onPost(`${API_URL}/auth/sign-in`).reply((config: AxiosRequestConfig) => {
    const data = JSON.parse(config.data)
    const response: LoginResponse = {
      accessToken: 'he he access token',
      user: {
        id: 1,
        email: data?.email ?? 'test@test.pl',
        roles: ['USER'],
        firstName: 'Jan',
        lastName: 'Kowalski',
      },
    }
    return [200, response]
  })

  mock.onPost(`${API_URL}/auth/sign-up`).reply((config: AxiosRequestConfig) => {
    return [201]
  })

  mock
    .onPost(`${API_URL}/auth/refresh-token`)
    .reply((config: AxiosRequestConfig) => {
      const response: RefreshTokenReturnData = {
        accessToken: 'he he access token',
      }
      return [200, response]
    })


  mock.onGet(`${API_URL}/marketplace`).reply((config: AxiosRequestConfig) => {
    console.log('config', config.params?.category[0])
    
    const clothesToReturn = clothes
    .filter(
      (clothing) =>
        clothing.type === 'all' || clothing.type === config.params?.category[0]
    )
    // .map(({ id, name }) => ({
    //   id,
    //   name,
    // }))
    return [200, clothesToReturn]
  })

  mock.onGet(`${API_URL}/clothes`).reply((config: AxiosRequestConfig) => {
    console.log('config', config.params?.category[0])
    
    const clothesToReturn = clothes
    .filter(
      (clothing) =>
        clothing.type === 'all' || clothing.type === config.params?.category[0]
    )
    // .map(({ id, name }) => ({
    //   id,
    //   name,
    // }))
    return [200, clothesToReturn]
  })


  mock.onPost(`${API_URL}/clothes`).reply((config: AxiosRequestConfig) => {
    const newClothingItem = JSON.parse(config.data)
    const clothingId = 'clth' + Math.random().toString().slice(2, 10)
    clothes.push({
      id: clothingId,
      name: newClothingItem?.name,
      description: newClothingItem?.description,
      type: newClothingItem?.type,
      materialThickness: newClothingItem?.materialThickness,
      colors: newClothingItem?.colors,
      status: newClothingItem?.status,
      purchaseDate: new Date().toISOString(),
      value: newClothingItem?.value ?? Math.random().toString().slice(2, 5),
      tagId: newClothingItem?.tagId,
      photoUrl: newClothingItem?.photoUrl,
    })
    localStorage.setItem('clothes', JSON.stringify(clothes))
    return [201, { clothingId }]
  })

  mock.onPut(singleClothingItem).reply((config: AxiosRequestConfig) => {
    const data = JSON.parse(config.data)
    const clothingId = config?.url?.match(singleClothingItem)?.[1]
    const clothingIndex = clothes.findIndex(
      (clothingItem) => clothingItem.id === clothingId,
    )
    if (clothingIndex === -1) {
      return [404]
    } else {
      const newData = { ...clothes[clothingIndex], ...data }
      clothes[clothingIndex] = newData
      localStorage.setItem('clothes', JSON.stringify(clothes))
      return [200, newData]
    }
  })

  mock.onDelete(singleClothingItem).reply((config: AxiosRequestConfig) => {
    const params = config?.url?.match(singleClothingItem)
    const clothingId = params?.[1]
    const clothingIndex = clothes.findIndex(
      (clothingItem) => clothingItem.id === clothingId,
    )
    if (clothingIndex === -1) {
      return [404]
    } else {
      clothes.splice(clothingIndex, 1)
      localStorage.setItem('clothes', JSON.stringify(clothes))
      return [200]
    }
  })
}