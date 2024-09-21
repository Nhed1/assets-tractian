import axios from 'axios'

export const tractianApi = axios.create({
  baseURL: 'https://fake-api.tractian.com/companies',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 5000
})
