import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native'
import { ModalBase } from '../ModalBase'
import { Colors } from '@/src/constants/Colors'
import { AddNewActivityForm } from '../../Activities/AddNewActivityForm'

export const AddNewActivityModal = ({
  setOpen,
  open
}: {
  setOpen?: any
  open?: boolean
}) => {
  return (
    <ModalBase open={open} setOpen={setOpen!}>
      <View
        style={{
          width: '100%',
          backgroundColor: Colors.dark['s-gray-800'],
          borderRadius: 10,
          padding: 20
        }}
      >
        <AddNewActivityForm />
      </View>
    </ModalBase>
  )
}
