import { Stack, useRouter } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'

import { ButtonBack } from '@/src/components/shared/ButtonBack'

SplashScreen.preventAutoHideAsync()

export default function RegisterLayout () {
  const { back } = useRouter()
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#282828' }
      }}
    >
      <Stack.Screen
        name='viewActivity'
        options={{
          headerShown: true,
          title: 'Activity detail',
          headerBackTitle: 'Atrás',
          headerStyle: {
            backgroundColor: '#151718'
          },
          headerTintColor: '#fff',
          headerLeft: () => <ButtonBack onPress={back} />
        }}
      />

      <Stack.Screen
        name='activitiesByMonth'
        options={{
          headerShown: true,
          title: 'Activities by month',
          headerBackTitle: 'Atrás',
          headerStyle: {
            backgroundColor: '#151718'
          },
          headerTintColor: '#fff',
          headerLeft: () => <ButtonBack onPress={back} />,
          contentStyle: { backgroundColor: 'transparent' }
        }}
      />
    </Stack>
  )
}
