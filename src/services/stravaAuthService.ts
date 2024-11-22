import { CLIENT_ID, CLIENT_SECRET } from '../constants/authConfig'

export const exchangeCodeForToken = async (
  code: string
): Promise<string | null> => {
  try {
    const response = await fetch('https://www.strava.com/api/v3/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
        grant_type: 'authorization_code'
      })
    })

    const data = await response.json()

    if (response.ok) {
      return data.access_token
    } else {
      console.error('Error exchanging code for token:', data)
      return null
    }
  } catch (error) {
    console.error('Error exchanging code for token:', error)
    return null
  }
}

export const getUserInfo = async (token: string): Promise<any> => {
  try {
    const response = await fetch('https://www.strava.com/api/v3/athlete', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    const data = await response.json()

    if (response.ok) {
      return data
    } else {
      console.error('Error getting user info:', data)
      return null
    }
  } catch (error) {
    console.error('Error getting user info:', error)
    return null
  }
}
