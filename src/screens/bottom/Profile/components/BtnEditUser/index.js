import {Icon, Pressable} from '@components';
import {COLORS, SIZES} from '@theme';
import React from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {rHorizontalScale, rVerticalScale} from '../Information';

const ICON_SIZE = 15;

const BtnEditUser = ({scrollY, minHeightInfo, maxHeightInfo}) => {
  const rStyles = useAnimatedStyle(() => ({
    position: 'absolute',
    top: interpolate(
      scrollY.value,
      [0, rVerticalScale(maxHeightInfo)],
      [
        rVerticalScale(-(minHeightInfo - SIZES.medium) / 2),
        rVerticalScale(minHeightInfo / 2) - rHorizontalScale(ICON_SIZE),
      ],
      Extrapolate.CLAMP,
    ),
    right: rHorizontalScale(SIZES.medium),
    backgroundColor: COLORS.dark,
    padding: rHorizontalScale(SIZES.normal),
    borderRadius: rHorizontalScale(SIZES.xxLarge),
  }));

  return (
    <Animated.View style={rStyles}>
      <Pressable>
        <Icon
          IconType={MaterialCommunityIcons}
          iconName="pencil"
          iconColor="white"
          iconSize={ICON_SIZE}
        />
      </Pressable>
    </Animated.View>
  );
};

export default BtnEditUser;
