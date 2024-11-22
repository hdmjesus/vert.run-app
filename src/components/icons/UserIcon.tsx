import * as React from 'react'
import Svg, {
  G,
  Mask,
  Path,
  Defs,
  LinearGradient,
  Stop
} from 'react-native-svg'

export const UserIcon = ({ size = 200 }) => (
  <Svg fill='none'>
    <G filter='url(#a)'>
      <Mask
        id='b'
        width={size}
        height={size}
        x={40}
        y={20}
        maskUnits='userSpaceOnUse'
      >
        <Path
          fill='#fff'
          fillRule='evenodd'
          d='M40 20.863h178.137V198.96H40V20.863Z'
          clipRule='evenodd'
        />
      </Mask>
      <G mask='url(#b)'>
        <Path
          fill='#fff'
          fillRule='evenodd'
          d='M218.137 109.912c0 49.179-39.878 89.048-89.068 89.048C79.878 198.96 40 159.091 40 109.912c0-49.18 39.878-89.049 89.069-89.049 49.19 0 89.068 39.869 89.068 89.049Z'
          clipRule='evenodd'
        />
      </G>
      <Path
        fill='url(#c)'
        fillRule='evenodd'
        d='M193.612 154.481c-3.987-5.356-23.818-12.655-34.116-16.478-3.505-1.313-5.373-2.014-6.183-2.465-1.471-1.194-6.16-7.538-6.16-7.538h-.321v-5.571c3.246-3.525 5.697-7.421 7.125-10.379.993-2.049 1.978-9.058 1.978-9.058 6.234-2.813 6.986-12.753 7.246-18.315.131-2.81-1.266-2.97-2.78-2.357.062-.522.091-1.02.136-1.528 2.204-5.698 3.786-11.593 3.927-17.673.216-9.313-3.542-19.194-11.438-24.138-7.343-4.597-16.633-4.207-25.279-3.663-4.851.305-9.843.646-14.216 2.767-4.374 2.122-7.439 6.792-7.205 11.648-2.103-2.511-6.397-1.978-8.74.31-2.344 2.288-3.168 5.694-3.604 8.94-.725 5.363-.673 10.91.918 16.084.786 2.56 1.977 5.02 3.537 7.195-1.449-.534-2.743-.292-2.618 2.415.26 5.556 1.012 15.475 7.227 18.303.548 4.211 1.19 7.523 1.937 9.07 1.438 2.976 3.91 6.903 7.187 10.444V128h-.322s-4.69 6.344-6.16 7.538c-.18.146-.837.432-1.858.834-1.133.444-2.646 1.003-4.414 1.663-10.322 3.832-30.05 11.105-34.028 16.446-2.192 2.943-3.956 7.08-5.388 11.907C76.251 186.859 101.334 200 129.5 200c28.166 0 53.249-13.141 69.5-33.611-1.431-4.828-3.194-8.965-5.388-11.908Z'
        clipRule='evenodd'
      />
    </G>
    <Defs>
      <LinearGradient
        id='c'
        x1={129.5}
        x2={129.5}
        y1={35}
        y2={200}
        gradientUnits='userSpaceOnUse'
      >
        <Stop stopColor='#FF6E57' />
        <Stop offset={0.316} stopColor='#FA5D5C' />
        <Stop offset={0.54} stopColor='#F8585D' />
        <Stop offset={1} stopColor='#FE4865' />
      </LinearGradient>
    </Defs>
  </Svg>
)
