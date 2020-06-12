import { store } from '../redux/store'

export const BaseRequest = async (url, config) => {
  const baseUrl = 'http://193.124.114.46:3001/';
  
  config.body = JSON.stringify(config.body)
  config.headers = headerController()
  
  try {
    const res = await fetch(baseUrl + url, config)

    if (res.ok) {
      const response = await res.json()
      return response
    } else {
      const response = await res.text()
      throw response
    }
  } catch (errors) {
    throw errors
  }
}


function headerController() {
  const token = store.getState().auth.token
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')

  if (token) {
    headers.append('Authorization', `Bearer ${token}`)
  }

  return headers
}