import axios from 'axios'

export const brasilAPI = axios.create({
  baseURL: 'https://brasilapi.com.br/api/ibge',
})

export const findAFriendAPI = axios.create({
  baseURL: 'http://localhost:3333',
})
