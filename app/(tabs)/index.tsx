import Button from '@/src/components/ui/Button'
import { ScreenView } from '@/src/components/base/ScreenView'
import { ActivitiesList } from '@/src/components/Activities/ActivitiesList'

export default function HomeScreen () {
  const handleLogout = () => {}
  return (
    <ScreenView>
      <ActivitiesList />
      {/* <Button.Primary onPress={handleLogout}>Loggot</Button.Primary> */}
    </ScreenView>
  )
}
