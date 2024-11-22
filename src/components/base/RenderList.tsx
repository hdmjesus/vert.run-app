import React from 'react'
import { FlatList, View } from 'react-native'

interface IRenderList {
  RenderItem: any
  separators?: any
  data: any
  numColumns?: number
  styles?: any
  keyExtractor?: any
  showsHorizontalScrollIndicator?: boolean
  showsVerticalScrollIndicator?: boolean
  onEndReachedThreshold?: number
  onEndReached?: () => void
  horizontal?: boolean
  RenderFooter?: any
  extraElement?: React.ReactNode
  contentContainerStyle?: any
}

export const RenderList = ({
  RenderItem,
  data,
  separators,
  numColumns,
  keyExtractor,
  showsVerticalScrollIndicator = false,
  showsHorizontalScrollIndicator = false,
  onEndReachedThreshold = 0,
  onEndReached,
  RenderFooter,
  horizontal,
  contentContainerStyle,
  styles
}: IRenderList): JSX.Element => {
  return (
    <FlatList
      data={data}
      numColumns={numColumns}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      onEndReachedThreshold={onEndReachedThreshold}
      ListFooterComponent={RenderFooter}
      contentContainerStyle={contentContainerStyle!}
      onEndReached={onEndReached}
      keyExtractor={keyExtractor}
      horizontal={horizontal}
      renderItem={({ item }: { item: any }) => (
        <View style={styles}>
          <RenderItem
            key={item._id}
            item={item}
            isLock={item.isLock}
            index={1}
            separators={separators}
          />
        </View>
      )}
    />
  )
}
