import { Tabs } from 'expo-router'
import React from 'react'

import { useColorScheme } from '@/src/hooks/useColorScheme.web'

export default function TabLayout () {
  const colorScheme = useColorScheme()

  return <Tabs></Tabs>
}
