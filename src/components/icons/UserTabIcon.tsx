import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconProps } from '@/src/interfaces/base.interface'

export const UserTabIcon = ({ isFocused, color }: IconProps) => (
  <Svg fill={'none'} width={24} height={24}>
    <Path
      stroke={isFocused ? color : '#A8A8A8'}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M5.499 6.938c-1.454.68-2.313 2.353-1.824 4.026l1.375 4.704M17.65 5.206h.377c2.261 0 3.89 2.17 3.255 4.34l-1.375 4.704'
    />
    <Path
      stroke={isFocused ? color : '#A8A8A8'}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M8.59 9.084a3.25 3.25 0 0 1-3.25-3.25V1.682a5.718 5.718 0 0 0 3.818 1.466h4.792c2.301 0 4.165 1.863 4.165 4.164v2.563'
    />
    <Path
      stroke={isFocused ? color : '#A8A8A8'}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M5.05 14.98v-1.453a4.442 4.442 0 0 1 4.442-4.443h5.972a4.442 4.442 0 0 1 4.443 4.443v1.454c0 4.069-2.897 7.7-7.43 7.7-4.534 0-7.431-3.631-7.431-7.7h.004Z'
    />
  </Svg>
)
