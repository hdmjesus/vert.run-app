import { useEffect } from 'react'
import { useRouter } from 'expo-router'
import * as WebBrowser from 'expo-web-browser'
import { Image, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session'

import Divider from '@/src/components/ui/Divider'
import { ThemedText } from '@/src/components/ui/ThemedText'
import { ThemedView } from '@/src/components/ui/ThemedView'
import { LogoWhite } from '@/src/components/icons/LogoWhite'
import { ScreenView } from '@/src/components/base/ScreenView'
import { LoginButton } from '@/src/components/Auth/LoginButton'
import {
  exchangeCodeForToken,
  getUserInfo
} from '@/src/services/stravaAuthService'
import { discovery, CLIENT_ID } from '@/src/constants/authConfig'
import { useAuthStorage } from '@/src/store/useAuthStorage'
import { useUserStorage } from '@/src/store/useUserStorage'
const heroImage = require('../../src/assets/images/login-hero.jpeg')

WebBrowser.maybeCompleteAuthSession()

export default function LoginScreen () {
  const { replace } = useRouter()

  const { setToken } = useAuthStorage()
  const { setConfig } = useUserStorage()
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: CLIENT_ID,
      scopes: ['read,activity:read'],
      approval_prompt: 'force',
      redirectUri: makeRedirectUri({
        scheme: 'myapp'
      })
    },
    discovery
  )

  useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params
      exchangeCodeForToken(code).then(token => {
        if (token) {
          setToken(token)
          getUserInfo(token).then(user => {
            setConfig('user', user)
            replace('/(tabs)')
          })
        }
      })
    }
  }, [response])

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
            <ThemedText type='subtitle' style={{ textAlign: 'center' }}>
              Start your Strava journey
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
                Get ready to achieve your goals! Log in and start your
                transformation today. 💪🚀
              </ThemedText>
            </ThemedView>
            <Divider thickness={20} />
            <LoginButton onPress={() => promptAsync()} />
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
    height: 600,
    marginTop: -40,
    ...StyleSheet.absoluteFillObject
  },
  gradient: {
    // opacity: 0.4,

    ...StyleSheet.absoluteFillObject // Asegura que el degradado cubra la imagen completa
  }
})
