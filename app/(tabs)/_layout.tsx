import { Tabs } from 'expo-router'
import React from 'react'

import { Activity, ChartSpline } from 'lucide-react-native'
import { HeaderScreen } from '@/src/components/shared/HeaderScreen'

export default function TabLayout () {
  const colorScheme = 'dark'

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        headerLeft: () => <HeaderScreen />
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Activities',
          tabBarIcon: ({ color, focused }) => (
            <Activity color={focused ? color : '#A8A8A8'} />
          )
        }}
      />
      <Tabs.Screen
        name='monthlyStats'
        options={{
          title: 'Statistics',
          tabBarIcon: ({ color, focused }) => (
            <ChartSpline color={focused ? color : '#A8A8A8'} />
          )
        }}
      />
    </Tabs>
  )
}
