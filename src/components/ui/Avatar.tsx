import React from 'react'
import { Image, View, StyleSheet, ViewStyle } from 'react-native'

import { UserIcon } from '../icons/UserIcon'

interface IAvatar {
  uri: string
  size: number
  online?: boolean
  type?: 'newFriend' | 'requestImage'
  styleBadge?: ViewStyle
  isFree?: boolean
}

export const AvatarUserEmpty = (): JSX.Element => {
  return (
    <View style={styles.avatarUserWrapper}>
      <UserIcon size={200} />
    </View>
  )
}

export const AvatarUser = ({ uri, size }: IAvatar): JSX.Element => {
  return (
    <View style={[styles.avatarWrapper, { width: size, height: size }]}>
      <Image
        source={{ uri }}
        style={[styles.image, { width: '100%', height: '100%' }]}
        resizeMode='cover'
      />
    </View>
  )
}

export const AvatarChat = ({
  uri,
  size,
  online = false
}: IAvatar): JSX.Element => {
  const proportion = 0.25
  const sizeProportional = size * proportion

  const onlineStyle = online ? styles.circleOn : styles.circleOff

  return (
    <View style={[styles.avatarWrapper, { width: size, height: size }]}>
      <Image
        source={{ uri }}
        style={[styles.image, { width: '100%', height: '100%' }]}
        resizeMode='cover'
      />
      <View
        style={[
          styles.avatarNotificationWrapper,
          { width: sizeProportional, height: sizeProportional, ...onlineStyle }
        ]}
      >
        <View style={[styles.circleOnline, onlineStyle]} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  avatarUserWrapper: {
    height: 200,
    width: 270,
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatarWrapper: {
    position: 'relative'
  },
  avatarNotificationWrapper: {
    position: 'absolute',
    right: 0,
    width: '100%',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10000,
    borderColor: '#282828',
    borderWidth: 3
  },
  avatarChatWrapper: {
    position: 'absolute',
    right: 0,
    left: 0,
    width: '100%',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarBadgeWrapper: {
    width: 100,
    height: 30,
    borderRadius: 1000,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
    alignItems: 'center',
    padding: 8
  },
  image: {
    borderRadius: 1000
  },
  circleOnline: {
    width: '100%',
    height: '100%',
    borderRadius: 100
  },
  circleOn: {
    backgroundColor: '#31a24c'
  },
  circleOff: {
    backgroundColor: '#E2E2E2'
  }
})
