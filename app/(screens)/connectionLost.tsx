import { router } from 'expo-router'
import { useContext } from 'react'

import { NetworkContext } from '@/src/contexts/NetworkContext'
import InternetConnectionLost from '@/src/components/base/internetConnectionLost'

export default function ActivityByMonthScreen () {
  const { isConnected, loading } = useContext(NetworkContext)

  const handleOnConnectionRestored = () => {
    if (isConnected && !loading) {
      router.replace('/(tabs)')
    }
  }

  return <InternetConnectionLost onRetry={handleOnConnectionRestored} />
}
