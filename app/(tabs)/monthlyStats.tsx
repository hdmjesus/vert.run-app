import { ScreenView } from '@/src/components/base/ScreenView'
import { HeaderScreen } from '@/src/components/shared/HeaderScreen'
import { AggregatedDataScreen } from '@/src/components/Stats/AggregatedDataScreen'

export default function MonthlyStatsScreen () {
  return (
    <ScreenView marginTop={0} edges={['left', 'right']}>
      <HeaderScreen />
      <AggregatedDataScreen />
    </ScreenView>
  )
}
