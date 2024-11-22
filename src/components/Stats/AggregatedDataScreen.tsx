import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { ThemedText } from '../ui/ThemedText'

import { MonthlyStats } from './MonthlyStarts'
import { aggregateDataFc } from '@/src/constants/functions'
import { activities } from '@/src/constants/activities'

export const AggregatedDataScreen = () => {
  const [aggregatedData, setAggregatedData] = useState<AggregatedData[]>([])

  useEffect(() => {
    const monthlyData = aggregateDataFc(activities as any)
    setAggregatedData(
      Object.keys(monthlyData).map(month => ({
        month,
        ...monthlyData[month]
      }))
    )
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
