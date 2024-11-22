import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconProps } from '@/src/interfaces/base.interface'

export const HeartIcon = ({
  stroke = '#A8A8A8',
  isFocused,
  color,
  size = 24
}: React.SVGProps<SVGSVGElement> & IconProps) => {
  return (
    <Svg width={size} height={size} fill='none' viewBox='0 0 24 24'>
      <Path
        // fill={isFocused ? color : '#A8A8A8'}

        stroke={isFocused ? color : stroke}
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d='M12.1 17.217c.772 0 1.457-.33 2.046-.916.861-.978 6.6-6.358 8.11-8.2C23.764 6.26 23.567 2.067 19.853.96 16.14-.15 15.188 3.587 12.1 3.587c-3.088 0-4.04-3.739-7.757-2.628C.627 2.069.433 6.259 1.942 8.1c1.51 1.842 7.25 7.224 8.11 8.2.589.586 1.274.916 2.046.916h.002Z'
      />
      <Path
        stroke={isFocused ? color : stroke}
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d='M8.043 1.593s6.298 6.434 7.718 7.613c1.42 1.18 4.047 1.92 6.223-.784'
      />
    </Svg>
  )
}
