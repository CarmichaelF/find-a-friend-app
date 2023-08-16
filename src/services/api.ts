import axios from 'axios'

export const brasilAPI = axios.create({
  baseURL: 'https://brasilapi.com.br/api/ibge',
})
