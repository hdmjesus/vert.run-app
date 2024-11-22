import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleProp } from 'react-native'

interface IGradient {
  colors: string[]
  children?: React.ReactNode
  style?: StyleProp<any>
  start?: any
  end?: any
}

export const GradientBackground = ({
  colors,
  children,
  style,
  start,
  end
}: IGradient): JSX.Element => {
  return (
    <LinearGradient colors={colors} style={style} start={start} end={end}>
      {children}
    </LinearGradient>
  )
}
