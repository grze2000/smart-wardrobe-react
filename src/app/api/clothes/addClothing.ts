import { API_URL } from 'app/config/env'
import axios, { AxiosResponse } from 'axios'
import * as yup from 'yup'

export const createClothingSchema = yup.object().shape({
  name: yup.string().nullable(),
  description: yup.string().nullable(),
  type: yup.string().nullable(),
  materialThickness: yup.string().nullable(),
  colors: yup.array().of(yup.string()).nullable(),
  status: yup.string().nullable(),
  purchaseDate: yup.date().nullable(),
  value: yup.number().nullable(),
  tagId: yup.string().nullable(),
  photoUrl: yup.string().nullable(),
})

export interface CreateClothingFormFields
  extends yup.InferType<typeof createClothingSchema> { }

export interface CreateClothingResponse {
  clothingId: string
}

export const addClothing = (
  data: CreateClothingFormFields,
): Promise<AxiosResponse<CreateClothingResponse>['data']> =>
  axios({ method: 'POST', url: `${API_URL}/clothes`, data }).then(
    ({ data }) => data,
  )

export const editClothing = (clothingId: string) => (
  data: CreateClothingFormFields,
): Promise<AxiosResponse<CreateClothingResponse>['data']> =>
  axios({ method: 'PUT', url: `${API_URL}/clothes/${clothingId}`, data }).then(
    ({ data }) => data,
  )
