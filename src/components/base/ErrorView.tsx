import React from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from 'react-native'
import { useRouter } from 'expo-router'
import { AlertCircle, RefreshCw } from 'lucide-react-native'

import { ThemedText } from '../ui/ThemedText'
import { useAuthStorage } from '@/src/store/useAuthStorage'

export default function ErrorView () {
  const { replace } = useRouter()
  const { token } = useAuthStorage()

  const handleRetry = async () => {
    if (token) {
      replace('/(tabs)')
    } else {
      replace('/(auth)/login')
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <AlertCircle size={64} color='#FF3B30' style={styles.icon} />
          <ThemedText style={styles.title}>
            Oops! Something went wrong
          </ThemedText>
          <ThemedText style={styles.message}>
            An error occurred while fetching data. Please try again.
          </ThemedText>
          <TouchableOpacity style={styles.retryButton} onPress={handleRetry}>
            <>
              <RefreshCw size={24} color='#FFFFFF' style={styles.retryIcon} />
              <ThemedText style={styles.retryText}>Retry</ThemedText>
            </>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  content: {
    alignItems: 'center',
    padding: 20
  },
  icon: {
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',

    marginBottom: 10,
    textAlign: 'center'
  },
  message: {
    fontSize: 16,
    color: '#8E8E93',
    textAlign: 'center',
    marginBottom: 30
  },
  retryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8
  },
  retryIcon: {
    marginRight: 8
  },
  retryText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600'
  }
})
