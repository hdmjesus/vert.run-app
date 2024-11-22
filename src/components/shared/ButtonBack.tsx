import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { ThemedText } from '../ui/ThemedText'

export const ButtonBack = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
      }}
      onPress={onPress}
    >
      <MaterialIcons name='arrow-back-ios' size={24} color='#fff' />
      <ThemedText>Atrás</ThemedText>
    </TouchableOpacity>
  )
}
