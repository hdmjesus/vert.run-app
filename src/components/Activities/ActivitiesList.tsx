import React from 'react'
import { Plus } from 'lucide-react-native'
import { useActivities } from '@/src/services/stravaActivitiesService'
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import { ThemedText } from '../ui/ThemedText'
import { Activity } from '@/src/interfaces/activity'

import { ThemedView } from '../ui/ThemedView'
import { formartDate } from '@/src/lib/dateFns.plugin'

const renderActivity = ({ item }: { item: Activity }) => (
  <TouchableOpacity style={{}}>
    <ThemedView darkColor='#282828' style={styles.activityItem}>
      <ThemedText style={styles.activityName}>{item.name}</ThemedText>
      <ThemedText style={styles.activityDate}>
        {formartDate(item.start_date, 'dd/MM/yyyy')}
      </ThemedText>
    </ThemedView>
  </TouchableOpacity>
)

const renderEmptyState = () => (
  <View style={styles.emptyState}>
    <ThemedText style={styles.emptyStateText}>
      You don't have any activities
    </ThemedText>
  </View>
)
export const ActivitiesList = () => {
  const { data: activities, isLoading, isError, error } = useActivities(1, 10)

  const addActivity = () => {
    // In a real app, this would open a form to add activity details
    const newActivity = {
      id: Date.now().toString(),
      name: `Activity ${activities.length + 1}`,
      date: new Date(),
      type: 'Running'
    }
    // setActivities([newActivity, ...activities]);
  }
  return (
    <View>
      <TouchableOpacity style={styles.addButton} onPress={addActivity}>
        <Plus size={20} color='#666' />
        <ThemedText style={styles.addButtonText}>
          Add a manual activity
        </ThemedText>
      </TouchableOpacity>
      <FlatList
        data={activities}
        renderItem={renderActivity}
        ListEmptyComponent={renderEmptyState}
        keyExtractor={item => item.id as any}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#ccc',
    margin: 16,
    borderRadius: 8
  },
  addButtonText: {
    marginLeft: 8,
    color: '#666',
    fontSize: 16
  },
  listContainer: {
    flexGrow: 1,
    padding: 16
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32
  },
  emptyStateText: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center'
  },
  activityItem: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2
  },
  activityName: {
    fontSize: 16,
    fontWeight: '500'
  },
  activityDate: {
    fontSize: 14,
    color: '#666',
    marginTop: 4
  },

  activeNavText: {
    color: '#FF4B81'
  }
})
