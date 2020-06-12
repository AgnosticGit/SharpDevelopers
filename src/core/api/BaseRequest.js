export const BaseRequest = async (url, config) => {

  const baseUrl = 'http://193.124.114.46:3001/';
  // const token = store.getState().auth.auth_token
  config.body = JSON.stringify(config.body)

  const headers = new Headers()
  headers.append('Content-Type', 'application/json')

  config.headers = headers
  url = baseUrl + url

  try {
    const res = await fetch(url, config)

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
