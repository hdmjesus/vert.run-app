import React, { useState } from 'react'

import { router } from 'expo-router'
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native'

import { ThemedView } from '../ui/ThemedView'
import { ThemedText } from '../ui/ThemedText'
import { Activity } from '@/src/interfaces/activity'
import { formartDate } from '@/src/lib/dateFns.plugin'
import { AddNewActivityModal } from '../Modal/activities/AddNewActivityModal'

const renderActivity = ({ item }: { item: Activity }) => {
  return (
    <TouchableOpacity
      onPress={() => router.push(`/(screens)/viewActivity?id=${item?.id}`)}
    >
      <ThemedView darkColor='#282828' style={styles.activityItem}>
        <ThemedText style={styles.activityName}>{item?.name}</ThemedText>
        <ThemedText style={styles.activityDate}>
          {formartDate(item.start_date, 'dd/MM/yyyy')}
        </ThemedText>
      </ThemedView>
    </TouchableOpacity>
  )
}

const renderEmptyState = () => (
  <View style={styles.emptyState}>
    <ThemedText style={styles.emptyStateText}>
      You don't have any activities
    </ThemedText>
  </View>
)
export const ActiviesMonth = ({
  list = [],
  isLoading,
  monthCurrent
}: {
  list: Activity[]
  isLoading?: boolean
  monthCurrent: string
}) => {
  const [open, setOpen] = useState(false)

  return (
    <View
      style={{
        marginHorizontal: 10
      }}
    >
      <ThemedText
        style={{
          marginTop: 10
        }}
        type='subtitle'
      >
        {monthCurrent}
      </ThemedText>

      {isLoading ? (
        <View
          style={{
            marginTop: 30
          }}
        >
          <ActivityIndicator size='large' color='#dcdcdc' />
        </View>
      ) : (
        <FlatList
          data={list}
          renderItem={renderActivity}
          ListEmptyComponent={renderEmptyState}
          keyExtractor={item => item.id as any}
          contentContainerStyle={styles.listContainer}
        />
      )}

      <AddNewActivityModal open={open} setOpen={setOpen} />
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
    marginTop: 20,
    borderRadius: 8
  },
  addButtonText: {
    marginLeft: 8,
    color: '#666',
    fontSize: 16
  },
  listContainer: {
    flexGrow: 1,
    marginTop: 20
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
    width: '100%',
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
