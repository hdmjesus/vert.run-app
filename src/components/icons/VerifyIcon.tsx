import * as React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'

export const VerifyIcon = ({ isVerify }: { isVerify?: boolean }) => (
  <Svg fill={'none'} width={24} height={24}>
    <Path
      fill='url(#a)'
      d='M8.766 1.765a4.215 4.215 0 0 1-2.399.993 4.215 4.215 0 0 0-3.866 3.867 4.215 4.215 0 0 1-.994 2.399 4.215 4.215 0 0 0 0 5.468c.575.675.923 1.514.994 2.399a4.215 4.215 0 0 0 3.866 3.866c.884.07 1.724.418 2.399.994a4.215 4.215 0 0 0 5.468 0 4.215 4.215 0 0 1 2.399-.994 4.215 4.215 0 0 0 3.866-3.866c.071-.884.419-1.724.994-2.4a4.215 4.215 0 0 0 0-5.467 4.216 4.216 0 0 1-.994-2.399 4.215 4.215 0 0 0-3.866-3.867 4.215 4.215 0 0 1-2.399-.993 4.215 4.215 0 0 0-5.468 0Z'
    />
    <Path
      stroke={isVerify ? '#fff' : '#000'}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2.2}
      d='m7.375 11.953 2.444 2.445 5.5-5.5'
    />
    <Defs>
      <LinearGradient
        id='a'
        x1={0.114}
        x2={23.153}
        y1={21.085}
        y2={20.661}
        gradientUnits='userSpaceOnUse'
      >
        <Stop stopColor={isVerify ? '#E6202D' : '#fff'} />
        <Stop offset={1} stopColor={isVerify ? '#E6202D' : '#fff'} />
      </LinearGradient>
    </Defs>
  </Svg>
)
