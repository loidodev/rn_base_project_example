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
import BoxInfo from './../BoxInfo/index';
import styles from './styles';

export function rHorizontalScale(size) {
  'worklet';
  return (shortDimension / DESIGN_WIDTH) * size;
}

export function rVerticalScale(size) {
  'worklet';
  return (longDimension / DESIGN_HEIGHT) * size;
}

const Information = ({
  scrollY,
  heightAvatar,
  heightBoxInfo,
  maxHeightInfo,
  minHeightInfo,
}) => {
  const INPUT = [0, rVerticalScale(maxHeightInfo)];

  const rContainerStyles = useAnimatedStyle(() => ({
    marginTop: interpolate(
      scrollY.value,
      INPUT,
      [rVerticalScale(-heightAvatar / 2), 0],
      Extrapolate.CLAMP,
    ),
    height: interpolate(
      scrollY.value,
      INPUT,
      [rVerticalScale(maxHeightInfo), rVerticalScale(minHeightInfo)],
      Extrapolate.CLAMP,
    ),
    transform: [
      {
        translateY: interpolate(
          scrollY.value,
          INPUT,
          [rVerticalScale(100), 0],
          Extrapolate.CLAMP,
        ),
      },
    ],
  }));

  return (
    <Animated.View style={[rContainerStyles, styles.container]}>
      {/* edit user */}
      <BtnEditUser
        scrollY={scrollY}
        minHeightInfo={minHeightInfo}
        maxHeightInfo={maxHeightInfo}
      />
      {/* avatar */}
      <Avatar
        scrollY={scrollY}
        heightAvatar={heightAvatar}
        maxHeightInfo={maxHeightInfo}
      />
      {/* box info */}
      <BoxInfo
        scrollY={scrollY}
        heightBoxInfo={heightBoxInfo}
        heightAvatar={heightAvatar}
        maxHeightInfo={maxHeightInfo}
      />
    </Animated.View>
  );
};

export default Information;
