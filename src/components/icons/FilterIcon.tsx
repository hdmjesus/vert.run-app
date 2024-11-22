import { SVGProps } from 'react'
import Svg, { Circle, Path } from 'react-native-svg'
import { IconProps } from '@/src/interfaces/base.interface'

export const FilterIcon = ({ stroke }: SVGProps<SVGSVGElement> & IconProps) => (
  <Svg width={24} height={24} fill='none'>
    <Path
      stroke='#fff'
      strokeLinecap='round'
      strokeWidth={1.5}
      d='M9.595 17.601H21.81'
    />
    <Circle cx={5.495} cy={17.696} r={3.745} stroke='#fff' strokeWidth={1.5} />
    <Path
      stroke='#fff'
      strokeLinecap='round'
      strokeWidth={1.5}
      d='M14.405 6.423H2.19'
    />
    <Circle
      cx={18.505}
      cy={6.328}
      r={3.745}
      stroke='#fff'
      strokeWidth={1.5}
      transform='rotate(180 18.505 6.328)'
    />
  </Svg>
)
