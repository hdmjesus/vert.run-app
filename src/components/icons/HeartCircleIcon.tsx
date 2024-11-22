import { SVGProps } from 'react'
import Svg, { Circle, Path } from 'react-native-svg'
import { IconProps } from '@/src/interfaces/base.interface'

export const HeartCircleIcon = ({
  stroke
}: SVGProps<SVGSVGElement> & IconProps) => (
  <Svg width={24} height={24} fill='none' viewBox='0 0 24 24'>
    <Circle
      cx={12}
      cy={12.197}
      r={11}
      stroke={stroke}
      strokeMiterlimit={10}
      strokeWidth={1.5}
    />
    <Path
      stroke={stroke}
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d='M12 18.186c.468 0 .883-.2 1.24-.555.522-.593 4-3.853 4.915-4.969.914-1.116.795-3.656-1.456-4.328-2.25-.672-2.827 1.592-4.699 1.592-1.87 0-2.448-2.265-4.7-1.592-2.252.673-2.37 3.212-1.455 4.328s4.393 4.377 4.914 4.97c.357.354.772.554 1.24.554H12Z'
    />
  </Svg>
)
