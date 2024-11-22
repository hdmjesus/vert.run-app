import { useQuery } from 'react-query'
import { useAuthStorage } from '../store/useAuthStorage'

import axios from 'axios'

// Función para registrar la actividad

const fetchActivities = async ({
  page,
  perPage,
  token
}: {
  page: number
  perPage: number
  token: string
}) => {
  const response = await axios.get(
    `https://www.strava.com/api/v3/athlete/activities`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        page,
        per_page: perPage
      }
    }
  )
  return response.data
}

export const useActivities = (page: number, perPage: number) => {
  const { token } = useAuthStorage()
  return useQuery(
    ['activities', page, perPage],
    () => fetchActivities({ page, perPage, token: token! }),
    {
      keepPreviousData: true,
      staleTime: 1000 * 60
    }
  )
}
