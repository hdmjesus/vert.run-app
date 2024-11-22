import React, { useContext } from 'react'
import { router } from 'expo-router'
import { StyleSheet, Image } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { ScreenView } from './ScreenView'
import { ThemedView } from '../ui/ThemedView'
import { LogoWhite } from '../icons/LogoWhite'
import { ThemedText } from '../ui/ThemedText'
import Button from '../ui/Button'

const heroImage = require('../../assets/images/hero.png')

export const InitialLayout = () => {
  return (
    <ScreenView saveArea={false}>
      <ThemedView style={styles.container}>
        <ThemedView
          style={{
            backgroundColor: 'transparent',
            zIndex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            flex: 1,
            marginTop: 100
          }}
        >
          <LogoWhite size={200} />

          <ThemedView
            style={{
              backgroundColor: 'transparent',
              zIndex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 100,
              width: '100%'
            }}
          >
            <ThemedText type='title' style={{ textAlign: 'center' }}>
              Running coaching for Everybody
            </ThemedText>

            <ThemedView
              style={{
                backgroundColor: 'transparent',
                alignItems: 'center',
                width: '100%',
                marginTop: 10
              }}
            >
              <ThemedText
                darkColor='#b6b6b6'
                style={{
                  textAlign: 'center',
                  lineHeight: 20,
                  paddingHorizontal: 20
                }}
              >
                Vert.run is the #1 leading app for Trail & Ultra runners of all
                kinds
              </ThemedText>
            </ThemedView>
            <Button.Primary
              // onPress={() => router.replace('/(auth)/login')}
              style={{ marginTop: 20, width: '90%' }}
            >
              Get Started
            </Button.Primary>
          </ThemedView>
        </ThemedView>

        <Image source={heroImage} style={styles.image} resizeMode='cover' />
        <LinearGradient
          colors={['#7c7b7b', 'rgba(17, 17, 17, 0.5)']}
          start={{ x: 0.9, y: 1 }}
          end={{ x: 1, y: 0.2 }}
          style={styles.gradient}
        />
      </ThemedView>
    </ScreenView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute'
  },
  image: {
    width: '100%',
    height: '100%',
    marginRight: 100,
    ...StyleSheet.absoluteFillObject
  },
  gradient: {
    // opacity: 0.4,

    ...StyleSheet.absoluteFillObject // Asegura que el degradado cubra la imagen completa
  }
})
