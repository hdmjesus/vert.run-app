import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { ThemedText } from '../ui/ThemedText'

import { MonthlyStats } from './MonthlyStarts'

const activities = [
  { id: 1, date: '2024-09-15', distance: 10, time: 60, elevationGain: 200 },
  { id: 2, date: '2024-09-20', distance: 15, time: 75, elevationGain: 300 },
  { id: 3, date: '2024-10-05', distance: 20, time: 90, elevationGain: 400 },
  { id: 4, date: '2024-10-10', distance: 25, time: 120, elevationGain: 500 },
  { id: 5, date: '2024-11-01', distance: 30, time: 150, elevationGain: 600 }
]

interface AggregatedData {
  month: string
  totalDistance: number
  totalTime: number
  totalElevation: number
}

export const AggregatedDataScreen = () => {
  const [aggregatedData, setAggregatedData] = useState<AggregatedData[]>([])

  const aggregateData = () => {
    const monthlyData: {
      [key: string]: {
        totalDistance: number
        totalTime: number
        totalElevation: number
      }
    } = {}
    activities.forEach(activity => {
      const month = activity.date.substring(0, 7)
      if (!monthlyData[month]) {
        monthlyData[month] = {
          totalDistance: 0,
          totalTime: 0,
          totalElevation: 0
        }
      }
      monthlyData[month].totalDistance += activity.distance
      monthlyData[month].totalTime += activity.time
      monthlyData[month].totalElevation += activity.elevationGain
    })

    setAggregatedData(
      Object.keys(monthlyData).map(month => ({
        month,
        ...monthlyData[month]
      }))
    )
  }

  useEffect(() => {
    aggregateData()
  }, [])

  return (
    <View
      style={{
        paddingHorizontal: 20
      }}
    >
      <ThemedText
        style={{
          marginTop: 10
        }}
        type='title'
      >
        Last three months...
      </ThemedText>
      <MonthlyStats aggregatedData={aggregatedData} />
    </View>
  )
}
