import { create } from 'apisauce'

const base_Url = 'https://fakestoreapi.com/'

export const api = create({
  baseURL: base_Url,
  headers: { Accept: 'application/vnd.github.v3+json' },
})

