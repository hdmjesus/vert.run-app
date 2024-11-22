import { useAuthStorage } from '@/src/store/useAuthStorage'
import { useUserStorage } from '@/src/store/useUserStorage'
import { View } from 'react-native'

export default function HomeScreen () {
  const { token } = useAuthStorage()
  const { user } = useUserStorage()
  console.log(user.user)
  return <View></View>
}
