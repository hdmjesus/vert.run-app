import React, { useEffect, useRef } from 'react'
import { Image, StyleSheet, Animated } from 'react-native'
import { ScreenView } from './ScreenView'
import { ThemedView } from '../ui/ThemedView'

export const SplastScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current // Valor inicial de opacidad
  const scaleAnim = useRef(new Animated.Value(0.5)).current // Valor inicial de escala

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true
      })
    ]).start()
  }, [fadeAnim, scaleAnim])

  return (
    <ScreenView saveArea={false}>
      <ThemedView style={styles.container}>
        <ThemedView
          style={{
            backgroundColor: 'transparent',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            paddingHorizontal: 20,
            zIndex: 99999
          }}
        >
          {/* <Animated.Image
            source={logoImage}
            style={[
              styles.logoImage,
              {
                opacity: fadeAnim,
                transform: [{ scale: scaleAnim }]
              }
            ]}
            resizeMode='contain'
          /> */}
        </ThemedView>

        {/* <Image source={heroImage} style={styles.image} resizeMode='cover' /> */}
      </ThemedView>
    </ScreenView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  image: {
    width: '100%',
    height: 800,
    ...StyleSheet.absoluteFillObject
  },
  logoImage: {
    width: 200,
    height: 200
  }
})
