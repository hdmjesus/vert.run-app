import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Animated } from 'react-native'

export const Progress = ({ progressValue }: { progressValue?: number }) => {
  const [progress] = useState(new Animated.Value(0)) // Inicia en 0
  useEffect(() => {
    Animated.timing(progress, {
      toValue: progressValue!,
      duration: 2000,
      useNativeDriver: false
    }).start()
  }, [progressValue])

  const widthInterpolated = progress.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%']
  })

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.bar, { width: widthInterpolated }]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 10,
    backgroundColor: '#686868',
    borderRadius: 10
  },
  bar: {
    height: 10,
    backgroundColor: '#cf1e1e',
    borderRadius: 10
  }
})
