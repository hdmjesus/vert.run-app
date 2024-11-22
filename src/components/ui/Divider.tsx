import React from 'react'
import { View } from 'react-native'

export const Divider = ({ orientation = 'horizontal', thickness = 1 }) => {
  const style = {
    flex: 0,
    height: orientation === 'vertical' ? '100%' : thickness,
    width: orientation === 'horizontal' ? '100%' : thickness
  }

  return <View style={style} />
}

export default Divider
