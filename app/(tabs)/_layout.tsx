import { Tabs } from 'expo-router'
import React from 'react'

import { Colors } from '@/src/constants/Colors'
import { Activity, ChartSpline } from 'lucide-react-native'

export default function TabLayout () {
  const colorScheme = 'dark'

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background
        },
        sceneStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background
        }
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Activities',
          tabBarIcon: ({ color, focused }) => (
            <Activity color={focused ? color : '#A8A8A8'} />
            // <ExploreIcon isFocused={focused} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name='monthlyStats'
        options={{
          title: 'Statistics',
          tabBarIcon: ({ color, focused }) => (
            <ChartSpline color={focused ? color : '#A8A8A8'} />
            // <HeartIcon color={color} isFocused={focused} />
          )
        }}
      />
    </Tabs>
  )
}
