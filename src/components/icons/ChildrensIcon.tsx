import { SVGProps } from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconProps } from '@/src/interfaces/base.interface'

export const ChildrensIcon = ({
  stroke = '#A8A8A8'
}: SVGProps<SVGSVGElement> & IconProps) => (
  <Svg width={50} height={24} fill='none' viewBox='0 0 56 24'>
    <Path
      stroke={stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M5.326 11.544h-1.22a2.682 2.682 0 0 0 0 5.364h1.478M22.193 11.544h1.237a2.682 2.682 0 0 1 0 5.364h-1.58'
    />
    <Path
      stroke={stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M23.968 11.477v.067h-.814a10.989 10.989 0 0 1-7.775-3.22L12.62 9.977a11.018 11.018 0 0 1-5.658 1.566H3.569v-.067c0-5.631 4.563-10.2 10.2-10.2 5.63 0 10.2 4.564 10.2 10.2Z'
    />
    <Path
      stroke={stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M5.484 11.544a8.408 8.408 0 0 0-.305 2.248c0 4.686 3.845 8.486 8.59 8.486 4.743 0 8.589-3.8 8.589-8.486 0-.779-.107-1.532-.305-2.248M35.151 11.544h-1.219a2.682 2.682 0 0 0 0 5.364h1.477M52.019 11.544h1.236a2.682 2.682 0 0 1 0 5.364h-1.579'
    />
    <Path
      stroke={stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M37.753 20.262h-3.447a3.191 3.191 0 0 1-3.194-3.194V13.76c0-6.895 5.587-12.482 12.482-12.482S56.075 6.864 56.075 13.76v3.54a3.191 3.191 0 0 1-3.193 3.195H49.19'
    />
    <Path
      stroke={stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M35.276 11.544s7.103 1.69 8.318-4.27c1.214 5.956 8.318 4.27 8.318 4.27'
    />
    <Path
      stroke={stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M35.31 11.544a8.411 8.411 0 0 0-.306 2.248c0 4.686 3.846 8.486 8.59 8.486s8.59-3.8 8.59-8.486c0-.779-.107-1.532-.306-2.248'
    />
  </Svg>
)
