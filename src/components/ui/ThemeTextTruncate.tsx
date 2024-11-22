import React from 'react'
import { TextProps, View } from 'react-native'
import { ThemedText } from './ThemedText'

interface ThemeTextTruncateProps extends TextProps {
  lineClamp: number
  minWidth?: number
  maxWidth?: number
}

export const ThemeTextTruncate = ({
  children,
  maxWidth,
  minWidth,
  lineClamp,

  ...props
}: ThemeTextTruncateProps) => {
  const styleContainer: any = {
    minWidth: minWidth ?? 150,
    maxWidth: maxWidth ?? 250,
    overflow: 'hidden',
    position: 'relative',
    lineHeight: 20
  }
  return (
    <View style={styleContainer}>
      <ThemedText numberOfLines={lineClamp} {...props}>
        {children}
      </ThemedText>
    </View>
  )
}
