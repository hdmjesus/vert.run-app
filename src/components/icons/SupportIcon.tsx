import { SVGProps } from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconProps } from '@/src/interfaces/base.interface'

export const SupportIcon = ({
  stroke,
  size = 24
}: SVGProps<SVGSVGElement> & IconProps) => (
  <Svg width={size} height={size} fill='none' viewBox='0 0 24 24'>
    <Path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M4.137 7.78V4.848A4.383 4.383 0 0 1 8.598.531a4.383 4.383 0 0 1 4.462 4.316v2.934M2.464 6.107h1.115a.558.558 0 0 1 .558.558v3.346a.558.558 0 0 1-.558.558H2.464a1.116 1.116 0 0 1-1.115-1.116v-2.23a1.115 1.115 0 0 1 1.115-1.116Z'
    />
    <Path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M14.733 10.569h-1.116a.558.558 0 0 1-.557-.558V6.665a.558.558 0 0 1 .557-.558h1.116a1.115 1.115 0 0 1 1.115 1.116v2.23a1.116 1.116 0 0 1-1.115 1.116ZM10.829 13.636a2.23 2.23 0 0 0 2.23-2.231v-2.51'
    />
    <Path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M10.829 13.636a1.394 1.394 0 0 1-1.394 1.395H7.762a1.394 1.394 0 0 1 0-2.789h1.673a1.394 1.394 0 0 1 1.394 1.394Z'
    />
  </Svg>
)
