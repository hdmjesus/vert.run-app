import React from 'react'
import { TouchableOpacity, StyleSheet, SafeAreaView, Alert } from 'react-native'
import { useRouter } from 'expo-router'
import { LogOut } from 'lucide-react-native'
import { ThemedView } from '../ui/ThemedView'
import { ThemedText } from '../ui/ThemedText'
import { useAuthStorage } from '@/src/store/useAuthStorage'
import { useUserStorage } from '@/src/store/useUserStorage'

export default function LoggoutScreen () {
  const { removeToken } = useAuthStorage()
  const { user, removeConfig } = useUserStorage()
  const { push } = useRouter()

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      {
        text: 'OK',
        onPress: () => {
          removeToken()
          removeConfig('user')
          push('/')
        }
      }
    ])
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={styles.content}>
        <ThemedText style={styles.welcomeText}>
          Welcome, {user?.user?.firstname}!
        </ThemedText>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <LogOut size={24} color='#FFFFFF' style={styles.logoutIcon} />
          <ThemedText style={styles.logoutText}>Logout</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center'
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF3B30',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8
  },
  logoutIcon: {
    marginRight: 8
  },
  logoutText: {
    fontSize: 18,
    fontWeight: '600'
  }
})
