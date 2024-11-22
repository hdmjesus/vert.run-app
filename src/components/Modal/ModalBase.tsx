import Modal from 'react-native-modal'
import { Pressable, View, StyleSheet } from 'react-native'

export function ModalBase ({
  open,
  children,
  setOpen
}: {
  open?: boolean
  children: React.ReactNode
  setOpen?: any
}) {
  return (
    <Modal
      avoidKeyboard
      isVisible={open}
      style={styles.modal}
      animationIn='slideInUp' // Animación de entrada
      animationOut='slideOutDown' // Animación de salida
      animationInTiming={500} // Duración de la animación de entrada
      animationOutTiming={500} // Duración de la animación de salida
      backdropTransitionInTiming={500} // Tiempo de transición del fondo
      backdropTransitionOutTiming={500} // Tiempo de transición del fondo
    >
      <View style={{ flex: 1 }}>
        <Pressable
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          onPress={() => setOpen?.(false)}
        >
          {children}
        </Pressable>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0
  }
})
