import React, { useContext } from 'react'
import { router } from 'expo-router'
import { StyleSheet, Image } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { ScreenView } from './ScreenView'
import { ThemedView } from '../ui/ThemedView'
import { LogoWhite } from '../icons/LogoWhite'
import { ThemedText } from '../ui/ThemedText'
import Button from '../ui/Button'

const heroImage = require('../../assets/images/romance-image.png')

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
          <LogoWhite />

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
            <ThemedText type='subtitle' style={{ textAlign: 'center' }}>
              Creando conexiones elegantes y prósperas
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
                style={{
                  textAlign: 'center',
                  lineHeight: 20,
                  color: '#b6b6b6'
                }}
              >
                Descubre tu mundo privado.
              </ThemedText>

              <ThemedText
                style={{
                  textAlign: 'center',
                  lineHeight: 20,
                  color: '#b6b6b6'
                }}
              >
                Conexión real e invitaciones exclusivas.
              </ThemedText>
            </ThemedView>
            <Button.Primary
              // onPress={() => router.replace('/(auth)/login')}
              style={{ marginTop: 20, width: '90%' }}
            >
              Comenzar
            </Button.Primary>
          </ThemedView>
        </ThemedView>

        <Image source={heroImage} style={styles.image} resizeMode='cover' />
        <LinearGradient
          colors={['#6E141A', 'rgba(110, 18, 25, 0.5)']}
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
    ...StyleSheet.absoluteFillObject
  },
  gradient: {
    // opacity: 0.4,

    ...StyleSheet.absoluteFillObject // Asegura que el degradado cubra la imagen completa
  }
})
