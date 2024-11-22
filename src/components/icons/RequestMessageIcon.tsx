import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconProps } from '@/src/interfaces/base.interface'

export const RequestMessageIcon = ({
  stroke = '#A8A8A8',
  isActive,
  color,
  size = 24
}: React.SVGProps<SVGSVGElement> & IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      fill='none'
      viewBox='0 0 24 24'
      style={{
        marginTop: -5
      }}
    >
      <Path
        stroke={stroke}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='m9.8 15.613-3.383 3.425c-.472.477-.708.716-.91.733a.55.55 0 0 1-.463-.19c-.133-.155-.133-.49-.133-1.162v-1.716c0-.602-.493-1.038-1.09-1.125v0a3.3 3.3 0 0 1-2.786-2.787C1 12.553 1 12.269 1 11.7V6.592c0-1.848 0-2.772.36-3.478a3.3 3.3 0 0 1 1.442-1.442c.706-.36 1.63-.36 3.478-.36h8.14c1.848 0 2.772 0 3.478.36a3.3 3.3 0 0 1 1.442 1.442c.36.706.36 1.63.36 3.479v4.62m0 12.1-2.394-1.665c-.337-.234-.505-.35-.688-.434a2.198 2.198 0 0 0-.509-.16c-.198-.036-.403-.036-.812-.036H13.32c-1.232 0-1.848 0-2.319-.24a2.2 2.2 0 0 1-.961-.961c-.24-.47-.24-1.087-.24-2.319v-2.766c0-1.232 0-1.848.24-2.318a2.2 2.2 0 0 1 .961-.962c.47-.24 1.087-.24 2.319-.24h6.16c1.232 0 1.848 0 2.319.24.414.211.75.548.961.962.24.47.24 1.086.24 2.319v2.985c0 1.025 0 1.538-.168 1.942a2.2 2.2 0 0 1-1.19 1.19c-.404.168-.917.168-1.942.168v2.294Z'
      />
    </Svg>
  )
}
