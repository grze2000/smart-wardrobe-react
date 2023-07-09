import axios from 'axios'

export const uploadClothingImage = async (file: File, apiKey?: string) => {
  const formData = new FormData()
  formData.append('key', apiKey ?? '6d207e02198a847aa98d0a2a901485a5')
  formData.append('action', 'upload')
  formData.append('source', file)
  formData.append('format', 'json')

  // Proxy is required to avoid CORS issues when calling the API from the frontend
  //  ProxyPass /api/images https://freeimage.host
  //  ProxyPassReverse /api/images https://freeimage.host
  const response = await axios.post('/api/images/api/1/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

  return response.data
}
