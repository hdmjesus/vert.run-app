import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'

import { LogoWhite } from '../icons/LogoWhite'
import { AvatarUser } from '../ui/Avatar'

export const HeaderScreen = () => {
  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 20,
        paddingBottom: 0,
        justifyContent: 'center',
        height: 60,
        marginTop: 20
      }}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={{
            width: 40
          }}
        ></TouchableOpacity>

        <LogoWhite size={100} />
        <TouchableOpacity
          // onPress={() => push('/(screens)/filtersScreen')}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            position: 'relative',
            width: 40,
            gap: 10
          }}
        >
          <AvatarUser
            size={40}
            uri={
              'https://fastly.picsum.photos/id/767/200/200.jpg?hmac=xNXS1_JsopizJIWXid2sWabvtf3urglv1JXpbh6Ahvc'
            }
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',

    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative'
  },
  imageLogo: {
    width: 150,
    height: 30
  }
})
