import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconProps } from '@/src/interfaces/base.interface'

export const ExploreIcon = ({ color, isFocused }: IconProps) => {
  return (
    <Svg width={24} height={24} fill={isFocused ? color : 'none'}>
      <Path
        stroke={isFocused ? 'none' : '#A8A8A8'}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d='M12.5 23c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11Z'
      />
      <Path
        stroke={isFocused ? '#131313' : '#A8A8A8'}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d='m10.682 10.181-2.87 6.512 6.507-2.873-3.637-3.639Z'
      />
      <Path
        stroke={isFocused ? '#131313' : '#A8A8A8'}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d='m10.682 10.182 6.511-2.87-2.873 6.506-3.638-3.636Z'
      />
    </Svg>
  )
}
