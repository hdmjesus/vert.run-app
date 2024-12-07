import React, { useState } from 'react'
import { Platform, useWindowDimensions } from 'react-native';
import Animated, { cancelAnimation, runOnJS, useAnimatedGestureHandler, useAnimatedReaction, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { PanGestureHandler } from 'react-native-gesture-handler';
import * as Haptics from 'expo-haptics';
import { BlurView } from 'expo-blur';
import { Song } from './Song';
import { clamp, objectMove } from '@/src/utils/dragAndDrop';

export const MovableSong = ({ id,
  artist,
  cover,
  title,
  positions,
  scrollY,
  songsCount, }: {
    id: number,
    artist: string,
    cover: string,
    title: string,
    positions: any,
    scrollY: any,
    songsCount: number
  }) => {

  const SONG_HEIGHT = 70;
  const SCROLL_HEIGHT_THRESHOLD = SONG_HEIGHT;

  const dimensions = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const [moving, setMoving] = useState(false);
  const top = useSharedValue(positions.value[id] * SONG_HEIGHT);

  useAnimatedReaction(
    () => positions.value[id],
    (currentPosition, previousPosition) => {
      if (currentPosition !== previousPosition) {
        if (!moving) {
          top.value = withSpring(currentPosition * SONG_HEIGHT);
        }
      }
    },
    [moving]
  );

  const gestureHandler = useAnimatedGestureHandler({
    onStart() {
      runOnJS(setMoving)(true);

      if (Platform.OS === 'ios') {
        runOnJS(Haptics.impactAsync)(
          Haptics.ImpactFeedbackStyle.Medium
        );
      }
    },
    onActive(event) {
      const positionY = event.absoluteY + scrollY.value;

      if (positionY <= scrollY.value + SCROLL_HEIGHT_THRESHOLD) {
        // Scroll up
        scrollY.value = withTiming(0, { duration: 1500 });
      } else if (
        positionY >=
        scrollY.value + dimensions.height - SCROLL_HEIGHT_THRESHOLD
      ) {
        // Scroll down
        const contentHeight = songsCount * SONG_HEIGHT;
        const containerHeight =
          dimensions.height - insets.top - insets.bottom;
        const maxScroll = contentHeight - containerHeight;
        scrollY.value = withTiming(maxScroll, { duration: 1500 });
      } else {
        cancelAnimation(scrollY);
      }

      top.value = withTiming(positionY - SONG_HEIGHT, {
        duration: 16,
      });

      const newPosition = clamp(
        Math.floor(positionY / SONG_HEIGHT),
        0,
        songsCount - 1
      );

      if (newPosition !== positions.value[id]) {
        positions.value = objectMove(
          positions.value,
          positions.value[id],
          newPosition
        );

        if (Platform.OS === 'ios') {
          runOnJS(Haptics.impactAsync)(
            Haptics.ImpactFeedbackStyle.Light
          );
        }
      }
    },
    onFinish() {
      top.value = positions.value[id] * SONG_HEIGHT;
      runOnJS(setMoving)(false);
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      left: 0,
      right: 0,
      top: top.value,
      zIndex: moving ? 1 : 0,
      shadowColor: 'black',
      shadowOffset: {
        height: 0,
        width: 0,
      },
      shadowOpacity: withSpring(moving ? 0.2 : 0),
      shadowRadius: 10,
    };
  }, [moving]);

  return (
    <Animated.View style={animatedStyle}>
      <BlurView intensity={moving ? 100 : 0} tint="light">
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={{ maxWidth: '80%' }}>
            <Song artist={artist} cover={cover} title={title} />
          </Animated.View>
        </PanGestureHandler>
      </BlurView>
    </Animated.View>
  );
}
