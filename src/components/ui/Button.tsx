import React from 'react'
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  ViewStyle,
  Text,
  View,
  ActivityIndicator,
  TextStyle
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from '@/src/constants/Colors'

// Definición del tipo de los subcomponentes
const colorScheme = 'dark'
interface ButtonComponent extends React.FC<ThemedButtonProps> {
  Primary: React.FC<ThemedButtonProps>
  Default: React.FC<ThemedButtonProps>
  Secondary: React.FC<ThemedButtonProps>
}

export type ThemedButtonProps = TouchableOpacityProps & {
  style?: ViewStyle
  children: React.ReactNode
  title?: string
  textStyle?: TextStyle
  loading?: boolean
  loadingColor?: string
}

// Definición del Componente Principal
const Button: ButtonComponent = ({
  style,
  children,
  loading,
  textStyle,
  loadingColor,
  ...rest
}) => {
  return (
    <TouchableOpacity {...rest} style={[styles.defaultButton, style]}>
      <View style={{ flexDirection: 'row', gap: 10 }}>
        {loading && (
          <ActivityIndicator color={loadingColor ? loadingColor : '#fff'} />
        )}

        <Text style={[styles.defaultText, textStyle]}>{children}</Text>
      </View>
    </TouchableOpacity>
  )
}

// Subcomponente Primario
Button.Primary = ({
  style,
  children,
  loading,
  loadingColor,
  textStyle,
  ...rest
}: ThemedButtonProps) => {
  return (
    <TouchableOpacity
      {...rest}
      style={[
        style,
        {
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }
      ]}
    >
      <LinearGradient
        colors={['#F0C96A', '#F0C96A', '#D5A843', '#DEB85B', '#B1903F']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.primaryButton, style]}
      >
        <View style={{ flexDirection: 'row', gap: 10 }}>
          {loading && (
            <ActivityIndicator color={loadingColor ? loadingColor : '#fff'} />
          )}

          <Text style={[styles.secondaryText, textStyle]}>{children}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  )
}

Button.Secondary = ({
  style,
  children,
  loading,
  loadingColor,
  textStyle,
  ...rest
}: ThemedButtonProps) => {
  return (
    <TouchableOpacity {...rest} style={[styles.secondaryButton, style]}>
      <View style={{ flexDirection: 'row', gap: 10 }}>
        {loading && (
          <ActivityIndicator color={loadingColor ? loadingColor : '#fff'} />
        )}

        <Text style={[styles.secondaryText, textStyle]}>{children}</Text>
      </View>
    </TouchableOpacity>
  )
}

// Subcomponente por Defecto
Button.Default = ({
  style,
  children,
  loading,
  loadingColor,
  textStyle,
  ...rest
}: ThemedButtonProps) => {
  return (
    <TouchableOpacity {...rest} style={[styles.defaultButton, style]}>
      <View style={{ flexDirection: 'row', gap: 10 }}>
        {loading && (
          <ActivityIndicator color={loadingColor ? loadingColor : '#fff'} />
        )}

        <Text style={[styles.secondaryText, textStyle]}>{children}</Text>
      </View>
    </TouchableOpacity>
  )
}

// Estilos
const styles = StyleSheet.create({
  defaultButton: {
    padding: 10,
    backgroundColor: '#282828',
    borderRadius: 8,
    width: '100%',
    alignItems: 'center'
  },

  primaryButton: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  secondaryButton: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors[colorScheme ?? 'light']['s-red-900']
  },
  defaultText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#A8A8A8',
    fontWeight: '600'
  },
  primaryText: {
    fontSize: 16,
    lineHeight: 24,
    color: 'black',
    fontWeight: '600'
  },
  secondaryText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#fff',
    fontWeight: '600'
  }
})

// Exportar el Componente
export default Button
