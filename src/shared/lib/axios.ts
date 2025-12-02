import axios, { AxiosError } from 'axios'
import { API_URL } from '@/shared/constants'
import { getToken } from '@/shared/utils'
import type { IErrorResponse } from '../types'

export const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const token = getToken('at')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error.response?.data as IErrorResponse)
  },
)
