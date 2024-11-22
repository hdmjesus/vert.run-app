import NetworkContext from './NetworkContext'

interface IProvidersProps {
  children: React.ReactNode
}

export function Providers ({ children }: IProvidersProps): JSX.Element {
  return <NetworkContext.Provider>{children}</NetworkContext.Provider>
}
