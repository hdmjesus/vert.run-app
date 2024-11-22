import { useQuery } from 'react-query'
import { useAuthStorage } from '../store/useAuthStorage'

import axios from 'axios'
import { ActivityDetails } from '../interfaces/activity'

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

const fetchActivitiesById = async ({
  id,
  token
}: {
  id: string
  token: string
}) => {
  const response = await axios.get(
    `https://www.strava.com/api/v3/activities/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
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

export const useActivityById = (id: string) => {
  const { token } = useAuthStorage()
  return useQuery<ActivityDetails>(
    ['activity', id],
    () => fetchActivitiesById({ id, token: token! }),
    {
      keepPreviousData: true,
      staleTime: 1000 * 60
    }
  )
}
