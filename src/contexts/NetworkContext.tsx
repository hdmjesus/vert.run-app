import React, { createContext, useEffect, useState } from 'react'
import NetInfo, { NetInfoState } from '@react-native-community/netinfo'

interface NetworkState {
  isConnected: boolean | null
  loading: boolean | null
}

export const NetworkContext = createContext<NetworkState>({} as NetworkState)

interface Props {
  children: React.ReactNode
}

const Provider = ({ children }: Props): JSX.Element => {
  const [isConnected, setIsConnected] = useState<boolean | null>(null)
  const [loading, setIsLoading] = useState<boolean | null>(null)

  useEffect(() => {
    setIsLoading(true)
    const unsubscribe = NetInfo.addEventListener((state: NetInfoState) => {
      setIsConnected(state.isConnected)
    })

    // Verifica el estado de la conexión al montar
    NetInfo.fetch().then(state => {
      setIsConnected(state.isConnected)
      setIsLoading(false)
    })

    return () => unsubscribe() // Limpia el listener al desmontar
  }, [])

  return (
    <NetworkContext.Provider
      value={{
        isConnected,
        loading
      }}
    >
      {children}
    </NetworkContext.Provider>
  )
}

const Consumer = NetworkContext.Consumer

export { Provider, Consumer }
export default { Provider, Consumer }
