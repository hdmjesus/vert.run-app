import { SVGProps } from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconProps } from '@/src/interfaces/base.interface'

export const ShieldIcon = ({
  stroke,
  size = 24
}: SVGProps<SVGSVGElement> & IconProps) => (
  <Svg width={size} height={size} fill='none' viewBox='0 0 24 24'>
    <Path
      stroke='#fff'
      strokeLinecap='round'
      strokeMiterlimit={10}
      d='m4.513 6.377 2.468 2.468 3.703-3.702'
    />
    <Path
      stroke='#fff'
      strokeMiterlimit={10}
      d='M13.769 5.901a9.837 9.837 0 0 1-6.17 9.13 9.837 9.837 0 0 1-6.17-9.13V1.75L7.598.53l6.17 1.219V5.9Z'
    />
  </Svg>
)
