import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()

export default function ScreensLayout () {
  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName='login'>
      <Stack.Screen
        name='login'
        options={{
          headerShown: false
        }}
      />
    </Stack>
  )
}
