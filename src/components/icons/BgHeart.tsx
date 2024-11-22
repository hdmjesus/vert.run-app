import * as React from 'react'
import Svg, {
  G,
  Ellipse,
  Defs,
  LinearGradient,
  Stop,
  Circle
} from 'react-native-svg'
import { IconProps } from '@/src/interfaces/base.interface'

export const BgHeartIcon = ({ color, isFocused }: IconProps) => {
  return (
    <Svg width='100' height='100' viewBox='0 0 1440 811' fill='none'>
      <G opacity='0.6'>
        <G>
          {/* Primer elipse con gradiente */}
          <Ellipse
            cx='521.999'
            cy='240.6'
            rx='521.999'
            ry='240.6'
            transform='matrix(-0.67266 0.739952 -0.837424 -0.546554 1458.63 38.0826)'
            fill='url(#paint0_linear)'
          />
        </G>
        <G>
          {/* Segundo elipse con gradiente */}
          <Ellipse
            cx='521.999'
            cy='240.6'
            rx='521.999'
            ry='240.6'
            transform='matrix(0.67266 0.739952 0.837424 -0.546554 -18.6328 38.0825)'
            fill='url(#paint1_linear)'
          />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id='paint0_linear'
          x1='666.241'
          y1='210.325'
          x2='-74.6379'
          y2='175.898'
          gradientUnits='userSpaceOnUse'
        >
          <Stop stopColor='#6E141A' />
          <Stop offset='1' stopColor='rgba(110, 18, 25, 0.5)' />
        </LinearGradient>

        <LinearGradient
          id='paint1_linear'
          x1='666.241'
          y1='210.325'
          x2='-74.6379'
          y2='175.898'
          gradientUnits='userSpaceOnUse'
        >
          <Stop stopColor='#6E141A' />
          <Stop offset='1' stopColor='rgba(110, 18, 25, 0.5)' />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}
