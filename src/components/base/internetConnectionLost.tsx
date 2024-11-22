import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  ActivityIndicator
} from 'react-native'
import { WifiOff, RefreshCw } from 'lucide-react-native'

const { width } = Dimensions.get('window')

interface InternetConnectionLostProps {
  onRetry: () => void
}

export default function InternetConnectionLost ({
  onRetry
}: InternetConnectionLostProps) {
  const [isRetrying, setIsRetrying] = useState(false)

  const handleRetry = async () => {
    setIsRetrying(true)
    try {
      await onRetry()
    } finally {
      setIsRetrying(false)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <WifiOff size={64} color='#FF3B30' style={styles.icon} />
        <Text style={styles.title}>No Internet Connection</Text>
        <Text style={styles.message}>
          Please check your internet connection and try again.
        </Text>
        <TouchableOpacity
          style={styles.retryButton}
          onPress={handleRetry}
          disabled={isRetrying}
        >
          {isRetrying ? (
            <ActivityIndicator color='#FFFFFF' />
          ) : (
            <>
              <RefreshCw size={24} color='#FFFFFF' style={styles.retryIcon} />
              <Text style={styles.retryText}>Retry</Text>
            </>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    alignItems: 'center',
    padding: 20,
    maxWidth: width * 0.8
  },
  icon: {
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1C1C1E',
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
