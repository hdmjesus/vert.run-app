import React, { useEffect, useState } from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
  ViewStyle,
  View
} from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'
import { ThemedText } from './ThemedText'

interface CustomCheckboxProps {
  checked?: boolean
  onChange?: (checked: boolean) => void
  style?: ViewStyle
  label?: string
}

export default function CheckboxRN ({
  checked = false,
  label,
  onChange,
  style
}: CustomCheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked)
  const [scaleValue] = useState(new Animated.Value(1))

  const toggleCheckbox = () => {
    const newValue = !isChecked
    setIsChecked(newValue)
    onChange?.(newValue)

    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 0.8,
        duration: 100,
        easing: Easing.bounce,
        useNativeDriver: true
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        easing: Easing.bounce,
        useNativeDriver: true
      })
    ]).start()
  }

  useEffect(() => {
    setIsChecked(checked)
  }, [checked])

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginVertical: 5
      }}
    >
      <Animated.View style={[{ transform: [{ scale: scaleValue }] }]}>
        <TouchableOpacity
          onPress={toggleCheckbox}
          style={[
            styles.checkbox,
            isChecked ? styles.checked : styles.unchecked,
            style
          ]}
          activeOpacity={0.8}
        >
          {isChecked && <AntDesign name='check' size={20} color='#fff' />}
        </TouchableOpacity>
      </Animated.View>
      <TouchableOpacity onPress={toggleCheckbox}>
        <ThemedText
          style={{
            fontWeight: 'bold',
            fontSize: 14
          }}
        >
          {label}
        </ThemedText>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  checked: {
    backgroundColor: '#FF3B30'
  },
  unchecked: {
    backgroundColor: '#787878',
    opacity: 0.8
  }
})
