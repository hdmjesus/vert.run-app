import { SVGProps } from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconProps } from '@/src/interfaces/base.interface'

export const GoldIconPlan = ({
  stroke
}: SVGProps<SVGSVGElement> & IconProps) => (
  <Svg width={15} height={15} fill='none' viewBox='0 0 10 10'>
    <Path
      fill='#201f1f'
      d='M.32 5.547C2.81 6.442 3.762 7.4 4.663 9.89c.108.296.536.29.656-.013 1.015-2.534 2.017-3.536 4.552-4.551.302-.12.315-.549.012-.656C7.393 3.775 6.441 2.817 5.54.327c-.107-.297-.536-.29-.656.012C3.87 2.874 2.867 3.876.333 4.891c-.303.12-.316.548-.013.656Z'
    />
  </Svg>
)
