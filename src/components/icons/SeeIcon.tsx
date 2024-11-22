import { SVGProps } from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconProps } from '@/src/interfaces/base.interface'

export const SeeIcon = ({
  stroke,
  size = 24
}: SVGProps<SVGSVGElement> & IconProps) => (
  <Svg width={size} height={size} fill='none' viewBox='0 0 24 24'>
    <Path
      fill='#BDBDBD'
      stroke='#282828'
      strokeMiterlimit={10}
      strokeWidth={3}
      d='m2.825 7.842-.338.674.338.673c1.705 3.394 4.963 5.827 8.84 5.827s7.136-2.433 8.84-5.827l.339-.673-.338-.674c-1.706-3.393-4.964-5.826-8.84-5.826-3.878 0-7.136 2.433-8.841 5.826Zm8.84 2.299a1.625 1.625 0 1 1 0-3.25 1.625 1.625 0 0 1 0 3.25Z'
    />
  </Svg>
)
