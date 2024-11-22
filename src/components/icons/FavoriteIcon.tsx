import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconProps } from '@/src/interfaces/base.interface'
import { Animated } from 'react-native'
import { Easing } from 'react-native-reanimated'

const AnimatedSvg = Animated.createAnimatedComponent(Svg)
const AnimatedPath = Animated.createAnimatedComponent(Path)
export const FavoriteIcon = ({
  stroke = '#A8A8A8',
  isActive,
  color,
  size = 24
}: React.SVGProps<SVGSVGElement> & IconProps) => {
  const animatedValue = React.useRef(new Animated.Value(0)).current
  const scaleValue = React.useRef(new Animated.Value(1)).current

  // Efecto para animar el cambio del color cuando isActive cambia
  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(animatedValue, {
        toValue: isActive ? 1 : 0,
        duration: 500, // Duración aumentada para notar más el cambio
        easing: Easing.out(Easing.ease),
        useNativeDriver: false
      }),
      Animated.spring(scaleValue, {
        toValue: isActive ? 1.2 : 1, // Efecto de "bounce" cuando cambia
        friction: 4,
        useNativeDriver: true
      })
    ]).start()
  }, [isActive])
  // Interpolamos el valor animado para cambiar el color, usando formato hexadecimal válido
  const interpolatedStrokeColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [stroke, color] // Asegúrate que `stroke` y `color` sean colores hexadecimales válidos
  })

  const interpolatedFillColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['transparent', color] // Asegúrate que `stroke` y `color` sean colores hexadecimales válidos
  })

  return (
    <Animated.View
      style={{ alignSelf: 'center', justifyContent: 'center', marginTop: -14 }}
    >
      <AnimatedSvg
        width={size}
        height={size}
        viewBox='0 0 25 25'
        style={{
          transform: [{ scale: scaleValue }],
          alignSelf: 'center',
          justifyContent: 'center'
          // marginTop: -14
        }}
      >
        <AnimatedPath
          fill={interpolatedFillColor}
          stroke={interpolatedStrokeColor}
          strokeMiterlimit={10}
          strokeWidth={1.5}
          d='M12.1 17.217c.772 0 1.457-.33 2.046-.916.861-.978 6.6-6.358 8.11-8.2C23.764 6.26 23.567 2.067 19.853.96 16.14-.15 15.188 3.587 12.1 3.587c-3.088 0-4.04-3.739-7.757-2.628C.627 2.069.433 6.259 1.942 8.1c1.51 1.842 7.25 7.224 8.11 8.2.589.586 1.274.916 2.046.916h.002Z'
        />
        <AnimatedPath
          stroke={interpolatedStrokeColor}
          strokeMiterlimit={10}
          strokeWidth={1.5}
          d='M8.043 1.593s6.298 6.434 7.718 7.613c1.42 1.18 4.047 1.92 6.223-.784'
        />
      </AnimatedSvg>
    </Animated.View>
  )
}
