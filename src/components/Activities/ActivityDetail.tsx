import React from 'react'
import { useGlobalSearchParams } from 'expo-router'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ActivityIndicator
} from 'react-native'
import { Calendar, Navigation, Clock, TrendingUp } from 'lucide-react-native'

import { ThemedText } from '../ui/ThemedText'
import { ThemedView } from '../ui/ThemedView'
import { formartDate } from '@/src/lib/dateFns.plugin'
import { useActivityById } from '@/src/services/stravaActivitiesService'

const { width } = Dimensions.get('window')

export default function ActivityDetail () {
  const { id: activityId } = useGlobalSearchParams()
  console.log(activityId, 'activityId')
  const {
    data: activitie,
    isLoading,
    isError,
    error
  } = useActivityById(activityId as string)

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size='large' color='#dcdcdc' />
        <Text style={styles.loaderText}>Loading program details...</Text>
      </View>
    )
  }
  return (
    <View>
      <Image
        source={{
          uri: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
        }}
        style={styles.heroImage}
      />

      <View style={styles.content}>
        <ThemedText style={styles.teamName}>Team Vert</ThemedText>
        <ThemedText style={styles.programTitle}>{activitie?.name}</ThemedText>

        <View style={styles.metricsContainer}>
          <ThemedView style={styles.metricItem}>
            <Calendar size={24} color='#666' />
            <ThemedText style={styles.metricText}>
              {formartDate(activitie?.start_date!, 'dd/MM/yyyy')}
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.metricItem}>
            <Navigation size={24} color='#666' />
            <ThemedText style={styles.metricText}>
              {activitie?.distance} km
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.metricItem}>
            <Clock size={24} color='#666' />
            <ThemedText style={styles.metricText}>
              {activitie?.moving_time} hours
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.metricItem}>
            <TrendingUp size={24} color='#666' />
            <ThemedText style={styles.metricText}>
              {activitie?.total_elevation_gain}
            </ThemedText>
          </ThemedView>
        </View>

        <ThemedView style={styles.noteContainer}>
          <ThemedText style={styles.noteText}>
            Don't worry! Even if your race date is closer or farther away than
            the weeks listed on this plan, your coach will adapt it for you.
          </ThemedText>
        </ThemedView>

        <Text style={styles.description}>{activitie?.description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100
  },
  loaderText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666'
  },
  heroImage: {
    width: width,
    height: width * 0.7,
    resizeMode: 'cover',
    paddingHorizontal: 20,
    borderRadius: 8
  },
  content: {
    padding: 20
  },
  teamName: {
    fontSize: 16,
    color: '#909090',
    marginBottom: 8
  },
  programTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    lineHeight: 32
  },
  metricsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24
  },
  metricItem: {
    flexBasis: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,

    padding: 12,
    borderRadius: 8
  },
  metricText: {
    marginLeft: 12,
    fontSize: 16
  },
  noteContainer: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 24
  },
  noteText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    marginBottom: 24
  },
  footer: {
    alignItems: 'center',
    marginTop: 20
  },
  footerText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12
  },
  indicator: {
    width: 40,
    height: 4,
    backgroundColor: '#000',
    borderRadius: 2
  }
})
