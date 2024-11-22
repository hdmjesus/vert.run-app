import { ScreenView } from '@/src/components/base/ScreenView'
import { ActivitiesList } from '@/src/components/Activities/ActivitiesList'
import { HeaderScreen } from '@/src/components/shared/HeaderScreen'

export default function HomeScreen () {
  return (
    <ScreenView marginTop={0} edges={['left', 'right']}>
      <HeaderScreen />
      <ActivitiesList />
    </ScreenView>
  )
}
