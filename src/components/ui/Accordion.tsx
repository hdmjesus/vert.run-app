import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { Pressable, View, Animated } from 'react-native'
import { ExpandableView } from '@pietile-native-kit/expandable-view'

import { ThemedText } from './ThemedText'
import { Colors } from '@/src/constants/Colors'

interface IAccordion {
  title: string
  children?: React.ReactNode
  iconStart?: React.ReactNode
  iconEnd?: React.ReactNode
  subTitle?: string
  isActiveFilter?: boolean
}

export const Accordion = ({
  title,
  iconStart,
  subTitle,
  iconEnd,
  children,
  isActiveFilter
}: IAccordion): JSX.Element => {
  const [show, setShow] = useState(false)

  function onPress () {
    setShow(!show)
  }

  const animatedValue = React.useRef(new Animated.Value(0)).current
  const scaleValue = React.useRef(new Animated.Value(1)).current

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(animatedValue, {
        toValue: isActiveFilter ? 1 : 0,
        duration: 500,
        useNativeDriver: true
      }),
      Animated.spring(scaleValue, {
        toValue: isActiveFilter ? 1.2 : 1,
        friction: 4,
        useNativeDriver: true
      })
    ]).start()
  }, [isActiveFilter])

  const interpolatedFillColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['transparent', Colors.dark['s-red-500']]
  })

  return (
    <View>
      <Pressable onPress={onPress} style={{ width: '100%' }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <View>
            {iconStart && iconStart}
            <View
              style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}
            >
              <ThemedText
                style={{
                  fontSize: 15,
                  fontWeight: 'bold'
                }}
              >
                {title}
              </ThemedText>
              <Animated.View
                style={{
                  transform: [{ scale: scaleValue }],
                  width: 10,
                  height: 10,
                  borderRadius: 1000,
                  backgroundColor: interpolatedFillColor
                }}
              />
            </View>
            <ThemedText
              style={{
                fontSize: 13,
                fontWeight: 'light',
                color: Colors.dark['s-white-50']
              }}
            >
              {subTitle}
            </ThemedText>
            {iconEnd && iconEnd}
          </View>
          {show ? (
            <MaterialIcons
              name='keyboard-arrow-up'
              size={40}
              color={Colors.dark['s-white-80']}
            />
          ) : (
            <MaterialIcons
              name='keyboard-arrow-down'
              size={40}
              color={Colors.dark['s-white-80']}
            />
          )}
        </View>
      </Pressable>

      <ExpandableView style={{ width: '100%' }} show={show}>
        {children}
      </ExpandableView>
    </View>
  )
}
