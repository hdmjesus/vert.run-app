import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
export const EditIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill='none' {...props}>
    <Path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='m18.039 10.55-4.14-4.138M2 22.45l3.502-.389c.428-.047.642-.071.842-.136.177-.057.346-.139.502-.241.175-.116.327-.268.632-.573L21.143 7.447a2.927 2.927 0 1 0-4.14-4.139L3.34 16.973c-.305.304-.457.456-.573.632a2.07 2.07 0 0 0-.24.502c-.066.2-.09.413-.137.841L2 22.45Z'
    />
  </Svg>
)
