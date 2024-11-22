import Button from '@/src/components/ui/Button'
import { ScreenView } from '@/src/components/base/ScreenView'
import { ActivitiesList } from '@/src/components/Activities/ActivitiesList'
import { HeaderScreen } from '@/src/components/shared/HeaderScreen'

export default function HomeScreen () {
  const handleLogout = () => {}
  return (
    <ScreenView marginTop={0} edges={['left', 'right']}>
      <HeaderScreen />
      <ActivitiesList />
      {/* <Button.Primary onPress={handleLogout}>Loggot</Button.Primary> */}
    </ScreenView>
  )
}
