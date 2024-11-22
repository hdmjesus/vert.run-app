import React from 'react'
import { TouchableOpacity, View } from 'react-native'

import { ThemedText } from '../ui/ThemedText'
import { StravaIcon } from '../icons/StravaIcon'

interface LoginButtonProps {
  onPress: () => void
}

export const LoginButton = ({ onPress }: LoginButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#282828',
        padding: 15,
        borderRadius: 8
      }}
      onPress={onPress}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10
        }}
      >
        <StravaIcon />
        <ThemedText
          style={{
            fontSize: 17,
            fontWeight: 'bold'
          }}
        >
          Login with Strava
        </ThemedText>
      </View>
    </TouchableOpacity>
  )
}
