import React, { forwardRef } from 'react'
import {
  View,
  TextInput,
  TextInputProps,
  StyleSheet,
  Text,
  ViewStyle
} from 'react-native'

import { useThemeColor } from '@/src/hooks/useThemeColor'

const colorScheme = 'dark'

type ThemedInputProps = TextInputProps & {
  style?: ViewStyle
  label?: string
  loading?: boolean
  loadingColor?: string
  lightColor?: string
  darkInputColor?: string
  darkColor?: string
  styleInput?: ViewStyle
  lighInputColor?: string
}

export const Input = forwardRef<TextInput, ThemedInputProps>(
  (
    {
      style,
      label,
      loading,
      lightColor,
      darkColor,
      styleInput,
      placeholder,
      darkInputColor,
      lighInputColor,
      loadingColor = '#000',
      ...rest
    },
    ref
  ) => {
    const background = useThemeColor(
      { light: lighInputColor, dark: darkInputColor },
      's-gray-700'
    )
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text')

    return (
      <View style={[styles.container]}>
        {label && (
          <Text
            style={[
              styles.label,
              {
                color
              }
            ]}
          >
            {label}
          </Text>
        )}
        <View
          style={[
            styles.inputContainer,
            { backgroundColor: background },
            styleInput
          ]}
        >
          <TextInput
            {...rest}
            ref={ref}
            style={[
              styles.input,
              style,
              {
                color
              }
            ]}
            placeholder={placeholder}
            placeholderTextColor='#A8A8A8'
          />
        </View>
      </View>
    )
  }
)

// Estilos
const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10
  },
  label: {
    fontSize: 14,
    marginBottom: 10
  },
  inputContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderWidth: 1,
    borderColor: '#A8A8A8',
    borderRadius: 8,
    paddingHorizontal: 10
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    paddingVertical: 8
  },
  loader: {
    position: 'absolute',
    right: 10
  }
})
