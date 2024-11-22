import { useGlobalSearchParams } from 'expo-router'

import { activities } from '@/src/constants/activities'
import { formartDate } from '@/src/lib/dateFns.plugin'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { ScreenView } from '@/src/components/base/ScreenView'
import { ActiviesMonth } from '@/src/components/ActivitiesMonth/ActiviesMonth'

export default function ActivityByMonthScreen () {
  const { month } = useGlobalSearchParams()

  const date = new Date(2025, Number(month) - 1)

  const monthName = formartDate(date, 'MMMM')

  const list = activities.filter(activity => {
    const date = new Date(activity.start_date)
    const monthArray = date.getUTCMonth() + 1

    return monthArray === Number(month)
  })

  return (
    <ScreenView
      scroll
      contentContainerStyle={{
        backgroundColor: Colors.dark['s-gray-900'],
        position: 'relative'
      }}
    >
      <ActiviesMonth list={list!} monthCurrent={monthName.toUpperCase()} />
    </ScreenView>
  )
}
