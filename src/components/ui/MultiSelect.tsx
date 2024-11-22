import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  Pressable
} from 'react-native'
import { Entypo } from '@expo/vector-icons'

import Button from './Button'
import { Colors } from '@/src/constants/Colors'
import { useThemeColor } from '@/src/hooks/useThemeColor'

interface Option {
  label: string
  value: string | number
}

interface MultiSelectProps {
  feebackEventCallback?: () => void
  options: Option[]
  label?: string
  selectedValues?: (string | number)[]
  onValuesChange?: (values: (string | number)[]) => void
  darkColor?: string
  lightColor?: string
  multiple?: boolean
  containerStyle?: any
  placeholder?: string
}

export const MultiSelect = ({
  options,
  label = '',
  selectedValues = [],
  lightColor,
  darkColor,
  onValuesChange,
  multiple = true,
  containerStyle,
  feebackEventCallback,
  placeholder = 'Selecciona opciones' // Valor predeterminado para el placeholder
}: MultiSelectProps) => {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text')

  const background = useThemeColor(
    { light: lightColor, dark: darkColor },
    's-gray-700'
  )
  const [isModalVisible, setModalVisible] = useState(false)
  const [selectedItems, setSelectedItems] =
    useState<(string | number)[]>(selectedValues)

  const toggleOption = (value: string | number) => {
    let updatedSelectedItems
    if (multiple) {
      updatedSelectedItems = selectedItems.includes(value)
        ? selectedItems.filter(item => item !== value)
        : [...selectedItems, value]
    } else {
      updatedSelectedItems = selectedItems.includes(value) ? [] : [value]
    }
    setSelectedItems(updatedSelectedItems)
    onValuesChange?.(updatedSelectedItems)
  }

  const renderOption = ({ item }: { item: Option }) => (
    <TouchableOpacity
      style={styles.optionContainer}
      onPress={() => toggleOption(item.value)}
    >
      <View
        style={{
          width: 20,
          height: 20,
          borderRadius: 10,
          backgroundColor: selectedItems.includes(item.value)
            ? '#fff'
            : Colors.dark['s-gray-800'],
          borderWidth: selectedItems.includes(item.value) ? 6 : 2,
          borderColor: selectedItems.includes(item.value)
            ? Colors.dark['s-red-500']
            : Colors.dark['s-white-50']
        }}
      />

      <Text style={styles.optionLabel}>{item.label}</Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      {label && (
        <Text
          style={[
            styles.label,
            {
              color
            }
          ]}
        >
          {label}
        </Text>
      )}

      <TouchableOpacity
        style={[
          styles.selectButton,
          {
            backgroundColor: background
          },
          containerStyle
        ]}
        onPress={() => {
          setModalVisible(true)
          feebackEventCallback?.()
        }}
      >
        <Text
          style={{
            color: selectedItems.length > 0 ? '#fff' : '#cac9c9'
          }}
        >
          {selectedItems.length > 0
            ? `${selectedItems
                .map(item => options.find(opt => opt.value === item)?.label)
                .join(', ')}`
            : placeholder}
        </Text>
        <Entypo name='chevron-thin-down' size={20} color='#A8A8A8' />
      </TouchableOpacity>

      <Modal visible={isModalVisible} transparent animationType='slide'>
        <Pressable
          style={styles.modalContainer}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Selecciona opciones</Text>
            <FlatList
              data={options}
              renderItem={renderOption}
              keyExtractor={item => item?.value.toString()}
            />
            <Button
              onPress={() => setModalVisible(false)}
              style={{
                marginTop: 20
              }}
            >
              Cerrar
            </Button>
          </View>
        </Pressable>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20
  },
  label: {
    fontSize: 14,
    marginBottom: 7
  },
  selectButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#A8A8A8',
    borderRadius: 8,
    padding: 12,
    height: 50,
    backgroundColor: '#f0f0f0'
  },
  selectButtonText: {
    fontSize: 16,
    color: '#333'
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContent: {
    width: '80%',
    maxHeight: '70%',
    backgroundColor: Colors.dark['s-gray-800'],
    borderRadius: 8,
    padding: 20
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: Colors.dark['s-white']
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#555353'
  },
  optionLabel: {
    fontSize: 14,
    color: Colors.dark['s-white-80']
  },
  ButtonText: {
    color: 'white',
    fontSize: 16
  }
})
