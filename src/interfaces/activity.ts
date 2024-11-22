export interface Activity {
  id: number
  name: string
  start_date: string
  distance: number
  moving_time: number
  total_elevation_gain: number
}

export interface ActivityDetails {
  name: string
  start_date: string
  distance: string
  moving_time: string
  total_elevation_gain: string
  description: string
}

export interface AggregatedData {
  month: string
  totalDistance: number
  totalTime: number
  totalElevation: number
}

export interface activityPlaceholder {
  id: number
  date: string
  distance: number
  time: number
  elevationGain: number
}
