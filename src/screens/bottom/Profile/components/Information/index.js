import {
  DESIGN_HEIGHT,
  DESIGN_WIDTH,
  longDimension,
  shortDimension,
} from '@responsive';
import React from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Avatar from '../Avatar';
import BtnEditUser from '../BtnEditUser';
import {
  HEIGHT_AVATAR,
  HEIGHT_BG_WAVE,
  MAX_HEIGHT_INFO,
  MIN_HEIGHT_INFO,
} from '../helper';
import BoxInfo from './../BoxInfo';
import styles from './styles';
import BoxWhite from './../BoxWhite';

export function rHorizontalScale(size) {
  'worklet';
  return (shortDimension / DESIGN_WIDTH) * size;
}

export function rVerticalScale(size) {
  'worklet';
  return (longDimension / DESIGN_HEIGHT) * size;
}

const Information = ({scrollY}) => {
  const INPUT = [0, rVerticalScale(MAX_HEIGHT_INFO)];

  const rContainerStyles = useAnimatedStyle(() => ({
    height: interpolate(
      scrollY.value,
      INPUT,
      [rVerticalScale(MAX_HEIGHT_INFO), rVerticalScale(MIN_HEIGHT_INFO)],
      Extrapolate.CLAMP,
    ),
    marginTop: interpolate(
      scrollY.value,
      INPUT,
      [rVerticalScale(-HEIGHT_AVATAR / 2), 0],
      Extrapolate.CLAMP,
    ),
    transform: [
      {
        translateY: interpolate(
          scrollY.value,
          INPUT,
          [rVerticalScale(HEIGHT_BG_WAVE), 0],
          Extrapolate.CLAMP,
        ),
      },
    ],
  }));

  return (
    <Animated.View style={[rContainerStyles, styles.container]}>
      {/* box white */}
      <BoxWhite scrollY={scrollY} />
      {/* edit user */}
      <BtnEditUser scrollY={scrollY} />
      {/* avatar */}
      <Avatar scrollY={scrollY} />
      {/* box info */}
      <BoxInfo scrollY={scrollY} />
    </Animated.View>
  );
};

export default Information;
