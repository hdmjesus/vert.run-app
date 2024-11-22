import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconProps } from '@/src/interfaces/base.interface'

export const InboxIcon = ({ color, isFocused }: IconProps) => {
  return (
    <Svg fill={isFocused ? color : 'none'} width={24} height={24}>
      <Path
        stroke={isFocused ? color : '#A8A8A8'}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M.774 6.72c0-2.002 0-3.003.39-3.768.342-.673.89-1.22 1.562-1.562C3.491 1 4.492 1 6.495 1h10.01c2.003 0 3.004 0 3.769.39.673.342 1.22.89 1.562 1.562.39.765.39 1.766.39 3.769v6.435c0 2.003 0 3.004-.39 3.769a3.576 3.576 0 0 1-1.562 1.562c-.765.39-1.766.39-3.768.39h-3c-.743 0-1.115 0-1.47.073a3.577 3.577 0 0 0-.908.318c-.324.165-.614.398-1.195.862L7.09 22.405c-.496.396-.744.595-.952.595a.596.596 0 0 1-.467-.224c-.13-.163-.13-.48-.13-1.116v-2.783c-1.108 0-1.662 0-2.117-.122a3.575 3.575 0 0 1-2.528-2.528c-.122-.455-.122-1.009-.122-2.117V6.72Z'
      />
      <Path
        stroke={isFocused ? '#161515' : '#A8A8A8'}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M6.137 9.938h.012m5.35 0h.013m5.351 0h.012m-10.142 0a.596.596 0 1 1-1.192 0 .596.596 0 0 1 1.192 0Zm5.363 0a.596.596 0 1 1-1.192 0 .596.596 0 0 1 1.192 0Zm5.363 0a.596.596 0 1 1-1.192 0 .596.596 0 0 1 1.192 0Z'
      />
    </Svg>
  )
}
