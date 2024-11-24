import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack, useRouter, useSegments } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useContext, useEffect } from 'react'
import 'react-native-reanimated'
import { QueryClient, QueryClientProvider } from 'react-query'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message'

import { Colors } from '@/src/constants/Colors'
import { Providers } from '@/src/contexts/Providers'
import { NetworkContext } from '@/src/contexts/NetworkContext'
import { SplastScreen } from '@/src/components/base/SplastScreen'
import { useAuthStorage } from '@/src/store/useAuthStorage'

SplashScreen.preventAutoHideAsync()

const InitialLayoutRoot = () => {
  const router = useRouter()
  const { isConnected, loading } = useContext(NetworkContext)

  const { token } = useAuthStorage()

  const [loaded] = useFonts({
    SpaceMono: require('../src/assets/fonts/SpaceMono-Regular.ttf')
  })

  const segments = useSegments()
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  useEffect(() => {
    const authState = segments[0] === '(auth)'

    if (!token && authState) {
      router.replace('/(auth)/login')
    } else if (token && !authState) {
      router.replace('/(tabs)')
    }
  }, [token])

  useEffect(() => {
    if (!loading && isConnected === false) {
      router.replace('/(screens)/connectionLost')
    }
  }, [isConnected, loading])

  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='(auth)' options={{ headerShown: false }} />
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      <Stack.Screen name='(screens)' options={{ headerShown: false }} />
      <Stack.Screen name='+not-found' />
    </Stack>
  )
}

const RootLayoutNav = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient()
  const colorScheme = 'dark'

  const toastConfig = {
    success: (props: any) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: 'pink', backgroundColor: 'pink' }}
        contentContainerStyle={{
          paddingHorizontal: 15,
          backgroundColor: 'pink'
        }}
      />
    ),

    error: (props: any) => (
      <ErrorToast
        {...props}
        style={{
          borderLeftColor: 'red'
        }}
        contentContainerStyle={{
          paddingHorizontal: 15,
          backgroundColor: Colors.dark['s-gray-700'],
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5
        }}
        text1Style={{
          color: 'white'
        }}
        text2Style={{
          color: 'white'
        }}
      />
    )
  }

  if (!queryClient) {
    return <SplastScreen />
  }

  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
          <Providers>
            <InitialLayoutRoot />
            <Toast config={toastConfig!} />
          </Providers>
        </ThemeProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  )
}

export default RootLayoutNav