import { Activity } from '../interfaces/activity'

export const aggregateDataFc = (activities: Activity[]) => {
  const monthlyData: {
    [key: string]: {
      totalDistance: number
      totalTime: number
      totalElevation: number
    }
  } = {}
  activities.forEach(activity => {
    const month = activity.start_date.substring(0, 7)
    if (!monthlyData[month]) {
      monthlyData[month] = {
        totalDistance: 0,
        totalTime: 0,
        totalElevation: 0
      }
    }
    monthlyData[month].totalDistance += activity.distance
    monthlyData[month].totalTime += activity.moving_time
    monthlyData[month].totalElevation += activity.total_elevation_gain
  })
  return monthlyData
}
