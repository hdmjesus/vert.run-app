import React from 'react';
import { ScreenView } from '@/src/components/base/ScreenView'
import { MovableSong } from '@/src/components/Songs/MovableSong';

import Animated, { useAnimatedRef, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { listToObject } from '@/src/utils/dragAndDrop';
import { SONGS } from '@/src/constants/songs';
export default function SongsScreen() {
  const SONG_HEIGHT = 70;


  const positions = useSharedValue(listToObject(SONGS));
  const scrollY = useSharedValue(0);
  const scrollViewRef = useAnimatedRef();

  // useAnimatedReaction(
  //   () => scrollY?.value,
  //   (scrolling) => scrollTo(scrollViewRef, 0, scrolling, false)
  // );

  const handleScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  return (
    <ScreenView marginTop={0} edges={['left', 'right']}>
      <Animated.ScrollView
        ref={scrollViewRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={{
          flex: 1,
          position: 'relative',
          backgroundColor: 'white',
        }}
        contentContainerStyle={{
          height: SONGS.length * SONG_HEIGHT,
        }}
      >
        {SONGS.map((song) => (
          <MovableSong
            key={song.id}
            id={song.id}
            artist={song.artist}
            cover={song.cover}
            title={song.title}
            positions={positions}
            scrollY={scrollY}
            songsCount={SONGS.length}
          />
        ))}
      </Animated.ScrollView>
    </ScreenView>
  )
}
