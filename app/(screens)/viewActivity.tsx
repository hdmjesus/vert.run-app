import { ScreenView } from '@/src/components/base/ScreenView'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import ActivityDetail from '@/src/components/Activities/ActivityDetail'

export default function ViewActivityScreen () {
  return (
    <ScreenView
      scroll
      contentContainerStyle={{
        backgroundColor: Colors.dark['s-gray-900'],
        position: 'relative'
      }}
    >
      <ActivityDetail />
    </ScreenView>
  )
}
