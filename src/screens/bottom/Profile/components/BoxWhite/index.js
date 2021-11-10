import {Block} from '@components';
import React from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {HEIGHT_AVATAR, MAX_HEIGHT_INFO, MIN_HEIGHT_INFO} from '../helper';
import {rVerticalScale} from '../Information';

const BoxWhite = ({scrollY}) => {
  const rStyles = useAnimatedStyle(() => ({
    height: rVerticalScale(HEIGHT_AVATAR / 2),
    backgroundColor: 'white',
    opacity: interpolate(
      scrollY.value,
      [
        rVerticalScale(MAX_HEIGHT_INFO) - rVerticalScale(MIN_HEIGHT_INFO),
        rVerticalScale(MAX_HEIGHT_INFO) -
          rVerticalScale(MIN_HEIGHT_INFO) +
          rVerticalScale(HEIGHT_AVATAR / 2),
      ],
      [0, 1],
      Extrapolate.CLAMP,
    ),
  }));

  return (
    <Block absolute right={0} left={0} bottom={0} top={0}>
      <Animated.View style={rStyles} />
      <Block flex backgroundColor="white" />
    </Block>
  );
};

export default BoxWhite;
