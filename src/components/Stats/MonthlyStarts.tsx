import React from 'react'
import { format } from 'date-fns'
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { Calendar, Navigation, Clock, TrendingUp } from 'lucide-react-native'

import { ThemedText } from '../ui/ThemedText'
import { ThemedView } from '../ui/ThemedView'

interface MonthlyData {
  month: string
  totalDistance: number
  totalTime: number
  totalElevation: number
}

interface MonthlyStatsProps {
  aggregatedData: MonthlyData[]
  onMonthPress: (month: string) => void
}

export const MonthlyStats: React.FC<MonthlyStatsProps> = ({
  aggregatedData,
  onMonthPress
}) => {
  const formatDate = (dateString: string, formatString: string) => {
    return format(new Date(dateString), formatString)
  }

  const renderItem = ({ item }: { item: MonthlyData }) => (
    <TouchableOpacity
      onPress={() => onMonthPress(item.month)}
      activeOpacity={0.7}
    >
      <ThemedView style={styles.card} darkColor='#282828'>
        <View style={styles.header}>
          <Calendar size={24} color='#4A90E2' />
          <ThemedText style={styles.monthText}>
            {formatDate(item.month, 'MMMM yyyy')}
          </ThemedText>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Navigation size={20} color='#4A90E2' />
            <View>
              <ThemedText style={styles.statValue}>
                {item.totalDistance.toFixed(1)} km
              </ThemedText>
              <ThemedText style={styles.statLabel}>Distance</ThemedText>
            </View>
          </View>
          <View style={styles.statItem}>
            <Clock size={20} color='#4A90E2' />
            <View>
              <ThemedText style={styles.statValue}>
                {Math.round(item.totalTime)} min
              </ThemedText>
              <ThemedText style={styles.statLabel}>Time</ThemedText>
            </View>
          </View>
          <View style={styles.statItem}>
            <TrendingUp size={20} color='#4A90E2' />
            <View>
              <ThemedText style={styles.statValue}>
                {item.totalElevation} m
              </ThemedText>
              <ThemedText style={styles.statLabel}>Elevation</ThemedText>
            </View>
          </View>
        </View>
      </ThemedView>
    </TouchableOpacity>
  )

  return (
    <FlatList
      data={aggregatedData}
      keyExtractor={item => item.month}
      renderItem={renderItem}
      contentContainerStyle={styles.listContainer}
    />
  )
}

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 20
  },
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12
  },
  monthText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
    textTransform: 'uppercase'
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  statValue: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginLeft: 8
  }
})
