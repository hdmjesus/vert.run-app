import { Animated } from 'react-native'
import { TPrevStateAct } from '@/types/discover'

export interface ISwipeCard<T> {
  children: (
    item: T,
    swipe: Animated.ValueXY,
    isFirst: boolean,
    handleChoice: (direction: number) => void,
    renderActionBar: (
      handleChoice: (direction: number) => void
    ) => React.ReactNode
  ) => React.ReactNode
  items: T[]
  setList: (fun: TPrevStateAct) => void
  renderActionBar: (
    handleChoice: (direction: number) => void,
    user: any
  ) => React.ReactNode
  onSwipeUser: (
    swipe: Animated.ValueXY,
    prevState: T[],
    isOtherLke: boolean
  ) => void
  handleMoreList?: () => void
  planType?: string
}
