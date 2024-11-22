import { SVGProps } from 'react'
import Svg, { Path } from 'react-native-svg'

import { IconProps } from '@/src/interfaces/base.interface'

export const MenWomenIconPlus = ({
  className,
  stroke
}: SVGProps<SVGSVGElement> & IconProps) => (
  <Svg width={70} height={24} fill='none'>
    <Path
      stroke={stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M36.654 22.719h-5.297a5.032 5.032 0 0 1-5.031-5.031v-5.64c0-5.703 4.621-10.33 10.328-10.33 5.707 0 10.33 4.627 10.33 10.33v5.64a5.032 5.032 0 0 1-5.032 5.03h-5.298Z'
    />
    <Path
      stroke={stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M36.654 5.646c0 2.91 2.358 6.606 5.267 6.606h1.42v3.536c0 3.661-2.608 6.93-6.687 6.93-4.079 0-6.685-3.269-6.685-6.93v-3.536h1.419c2.909 0 5.266-3.696 5.266-6.606ZM3.979 6.932c-1.455.68-2.313 2.352-1.824 4.025L3.53 15.66M16.13 5.2h.377c2.261 0 3.89 2.169 3.255 4.338l-1.375 4.705'
    />
    <Path
      stroke={stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M7.07 9.077a3.25 3.25 0 0 1-3.25-3.25V1.675A5.718 5.718 0 0 0 7.638 3.14h4.792c2.301 0 4.165 1.864 4.165 4.164v2.563'
    />
    <Path
      stroke={stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M3.53 14.974V13.52a4.442 4.442 0 0 1 4.442-4.443h5.972a4.442 4.442 0 0 1 4.443 4.443v1.454c0 4.069-2.897 7.7-7.43 7.7-4.534 0-7.431-3.631-7.431-7.7h.004Z'
    />
    <Path
      stroke={stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d='M58.983 7.197v10M63.983 12.197h-10'
    />
  </Svg>
)
