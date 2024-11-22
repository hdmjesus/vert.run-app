import React from 'react'
import { ThemedView } from '../ui/ThemedView'

import { Platform, ScrollView, StatusBar, StyleSheet } from 'react-native'
import { Edges, SafeAreaView } from 'react-native-safe-area-context'
import { useThemeColor } from '@/src/hooks/useThemeColor'

const HEADER_HEIGHT = 250

interface IScreenView {
  children: React.ReactNode
  scroll?: boolean
  contentContainerStyle?: any
  marginTop?: number
  marginBottom?: number
  saveArea?: boolean
  edges?: Edges
  theme?: string
  darkColor?: string
  lightColor?: string

  onScroll?: () => void
}
export const ScreenView = ({
  scroll,
  children,
  contentContainerStyle,
  onScroll,
  marginBottom,
  darkColor,
  lightColor,
  edges = ['right', 'left', 'top'],
  saveArea = true
}: IScreenView) => {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  )
  if (scroll) {
    return (
      <SafeAreaView style={styles.scroll} edges={edges}>
        <ScrollView
          onScroll={onScroll}
          scrollEventThrottle={20}
          keyboardShouldPersistTaps='handled'
          style={{ marginBottom }}
          contentContainerStyle={[
            {
              backgroundColor
            },
            contentContainerStyle
          ]}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    )
  }

  if (!saveArea) {
    return (
      <ThemedView
        style={{
          flex: 1,
          width: '100%'
        }}
      >
        {children}
      </ThemedView>
    )
  }

  return (
    <SafeAreaView style={styles.container} edges={edges}>
      <ThemedView
        style={[
          contentContainerStyle,
          {
            flex: 1,
            width: '100%'
          }
        ]}
      >
        {children}
      </ThemedView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 0,
    width: '100%'
  },
  scroll: {
    flex: 1,
    marginBottom: 0,
    marginTop: StatusBar.currentHeight
  },
  header: {
    height: 250,
    overflow: 'hidden'
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden'
  }
})
